import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import Multer from "multer";
import cloudinary from "cloudinary";
import { upload } from "./middlewares/multer,middleware.js";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(
  cors({
    origin: "http://localhost:5173/",
    method: "GET, PUT, POST, DELETE, PATCH",
    optionsSuccessStatus: 200,
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//CLOUDINARY CONFIG
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || "",
  api_key: process.env.API_KEY || "",
  api_secret: process.env.API_SECRET || "",
});
async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
}

//Upload Route
app.post("/api/auth/upload", upload.single("my_file"), async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);
    res.json(cldRes);
  } catch (error) {
    console.log(error);
    res.send({
      message: error.message,
    });
  }
});



export { app };
