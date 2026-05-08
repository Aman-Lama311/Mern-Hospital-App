import validator from "validator";
import bcrypt from "bcryptjs";
import { UserModel } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";
import { DoctorModel } from "../models/docterModel.js";
import appointmentModel from "../models/appointmentModel.js";

// Register user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Missing Details" });
    }

    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Enter a valid email" });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "Email already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = { name, email, password: hashedPassword };
    const newUser = new UserModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({ success: true, token, name: user.name });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// User login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Missing email or password" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ success: true, token, name: user.name });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get user profile (auth required)
export const getProfile = async (req, res) => {
  try {
    const userId = req.userId; // from middleware
    const userData = await UserModel.findById(userId).select("-password");
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.json({ success: true, userData });
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Update user profile (auth required)
export const updateProfile = async (req, res) => {
  try {
    const userId = req.userId; // from middleware
    const { name, phone, address, dob, gender } = req.body;
    const imageFile = req.file;

    if (!name || !phone || !dob || !gender) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    const updateData = {
      name,
      phone,
      dob,
      gender,
    };

    if (address) {
      try {
        updateData.address = JSON.parse(address);
      } catch {
        return res
          .status(400)
          .json({ success: false, message: "Invalid address format" });
      }
    }

    // Update user data
    await UserModel.findByIdAndUpdate(userId, updateData);

    // If image uploaded, upload to cloudinary and update
    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      await UserModel.findByIdAndUpdate(userId, {
        image: imageUpload.secure_url,
      });
    }

    res.json({ success: true, message: "Profile updated successfully" });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Book appointment (auth required)
export const bookAppointment = async (req, res) => {
  try {
    const { docId, slotDate, slotTime } = req.body;
    const userId = req.userId; // from middleware

    if (!docId || !slotDate || !slotTime) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    // Fetch doctor
    const docData = await DoctorModel.findById(docId).select("-password");
    if (!docData) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    // Only if explicitly false
    if (docData.available === false) {
      return res
        .status(400)
        .json({ success: false, message: "Doctor not available" });
    }

    // duplicate appointment check
    const existingAppointment = await appointmentModel.findOne({
      userId,
      docId,
      slotDate,
      slotTime,
      cancelled: false,
    });

    if (existingAppointment) {
      return res.status(409).json({
        success: false,
        message: "You already have this appointment booked.",
      });
    }

    // Atomic slot booking - FIXED
    const updateResult = await DoctorModel.updateOne(
      {
        _id: docId,
        $or: [
          { [`slots_booked.${slotDate}`]: { $exists: false } },
          { [`slots_booked.${slotDate}`]: { $nin: [slotTime] } },
        ],
      },
      {
        $addToSet: { [`slots_booked.${slotDate}`]: slotTime },
      },
    );

    if (updateResult.matchedCount === 0 || updateResult.modifiedCount === 0) {
      return res.status(409).json({
        success: false,
        message: "This time slot is already booked.",
      });
    }

    // Fetch user data
    const userData = await UserModel.findById(userId).select("-password");
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Exclude slots_booked from docData before saving
    const { slots_booked: _, ...docDataWithoutSlots } = docData.toObject();

    const appointmentData = {
      userId,
      docId,
      userData,
      docData: docDataWithoutSlots,
      amount: docData.fees,
      slotTime,
      slotDate,
      date: Date.now(),
    };

    const newAppointment = new appointmentModel(appointmentData);
    await newAppointment.save();

    res.status(200).json({ success: true, message: "Appointment Booked" });
  } catch (error) {
    console.error("Appointment booking error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

//Api to get userAppointments
export const listAppointment = async (req, res) => {
  try {
    const userId = req.userId;
    const appointments = await appointmentModel.find({ userId });

    res.json({ success: true, appointments });
  } catch (error) {
    console.error("Appointment booking error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

//Api to cancel appointment
export const cancelAppointment = async (req, res) => {
  try {
    const userId = req.userId; //  from auth middleware
    const { appointmentId } = req.body;

    // Fetch appointment
    const appointmentData = await appointmentModel.findById(appointmentId);
    if (!appointmentData) {
      return res
        .status(404)
        .json({ success: false, message: "Appointment not found" });
    }

    //  Validate user is owner of the appointment
    if (appointmentData.userId.toString() !== userId) {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized action" });
    }

    //  Mark appointment as cancelled
    await appointmentModel.findByIdAndUpdate(appointmentId, {
      cancelled: true,
    });

    //  Release the doctor slot
    const { docId, slotDate, slotTime } = appointmentData;
    const doctorData = await DoctorModel.findById(docId);

    if (
      doctorData &&
      doctorData.slots_booked &&
      doctorData.slots_booked[slotDate]
    ) {
      // Filter out the cancelled time
      doctorData.slots_booked[slotDate] = doctorData.slots_booked[
        slotDate
      ].filter((e) => e !== slotTime);

      // Optional: remove empty date entry to keep the object clean
      if (doctorData.slots_booked[slotDate].length === 0) {
        delete doctorData.slots_booked[slotDate];
      }

      // Save updated doctor data
      await doctorData.save();
    }

    res.json({ success: true, message: "Appointment cancelled" });
  } catch (error) {
    console.error("Cancel appointment error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
