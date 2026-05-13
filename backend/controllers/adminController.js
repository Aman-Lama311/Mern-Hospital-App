import validator from "validator";
import bcrypt from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";
import { DoctorModel } from "../models/doctorModel.js";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";
import { UserModel } from "../models/userModel.js";

//API for adding doctor
export const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;

    //checking for all data to add doctor
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address ||
      !imageFile
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //validating email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    //validating password length
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters long" });
    }

    //hasding doctor password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      image: imageUrl,
      date: Date.now(),
    };

    const newDoctor = new DoctorModel(doctorData);
    await newDoctor.save();
    res.status(201).json({
      success: true,
      message: "Doctor Added",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//API for admin login
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    //checking for email and password
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.status(200).json({
        message: "Login successful",
        success: true,
        token,
      });
    } else {
      return res
        .status(400)
        .json({ message: "Invalid email or password", success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//API to get all doctors list for admin panel
export const allDoctors = async (req, res) => {
  try {
    const doctors = await DoctorModel.find({}).select("-password");
    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    res.josn({ success: false, message: error.message });
  }
};

//API for change avilability
export const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;

    const docData = await DoctorModel.findById(docId);
    await DoctorModel.findByIdAndUpdate(docId, {
      available: !docData.available,
    });
    res.json({ success: true, message: "Availability Changed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Api to get all appointments list
export const appointmentsAdmin = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({});
    res.json({ success: true, appointments });
  } catch (error) {
    console.error("Cancel appointment error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

//Api for cancel the appiointment
export const appiointmentCancel = async (req, res) => {
  try {
    const { appointmentId } = req.body;

    // Fetch appointment
    const appointmentData = await appointmentModel.findById(appointmentId);
    if (!appointmentData) {
      return res
        .status(404)
        .json({ success: false, message: "Appointment not found" });
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

//Api to get dashboard data for admin panel
export const adminDashboard = async (req, res) => {
  try {
    const doctors = await DoctorModel.find({});
    const users = await UserModel.find({});
    const appointments = await appointmentModel.find({});

    const dashData = {
      doctors: doctors.length,
      appointments: appointments.length,
      patients: users.length,
      latestAppointments: appointments.reverse().slice(0, 5),
    };

    res.json({ success: true, dashData });
  } catch (error) {
    console.error("Cancel appointment error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

//Api for complete the appointment
export const appointmentComplete = async (req, res) => {
  try {
    const { appointmentId } = req.body;

    // Fetch appointment
    const appointmentData = await appointmentModel.findById(appointmentId);
    if (!appointmentData) {
      return res
        .status(404)
        .json({ success: false, message: "Appointment not found" });
    }

    // Check if it's already completed
    if (appointmentData.isCompleted) {
      return res.json({
        success: true,
        message: "Appointment is already marked as completed",
      });
    }

    // Mark appointment as completed
    await appointmentModel.findByIdAndUpdate(appointmentId, {
      isCompleted: true,
    });

    res.json({ success: true, message: "Appointment marked as completed" });
  } catch (error) {
    console.error("Complete appointment error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
