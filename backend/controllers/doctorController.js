import { DoctorModel } from "../models/docterModel.js";

export const doctorList = async (req, res) => {
  try {
    const doctors = await DoctorModel.find({}).select(["-password", "-email"]);
    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
