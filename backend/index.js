import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

//app config

const app = express();
const port = process.env.PORT || 8000;
connectCloudinary();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes

//api endpoint
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (_, res) => {
  res.status(200).send("hello from backend");
});

//server setup
app.listen(port, () => {
  connectDB();
  console.log(`listening on port ${port}`);
});
