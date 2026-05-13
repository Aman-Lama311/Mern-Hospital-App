import { DoctorModel } from "../models/doctorModel.js";

export const doctorList = async (req, res) => {
  try {
    const doctors = await DoctorModel.find({}).select(["-password", "-email"]);
    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// doctorController.js
export const getDoctorById = async (req, res) => {
  try {
    const { docId } = req.params;
    const doctor = await DoctorModel.findById(docId).select("-password");
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }
    res.json({ success: true, doctor });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
