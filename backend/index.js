import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import complaintRoutes from "./routes/complaintRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log("MongoDB Connected");

  })
  .catch((error) => {

    console.log(error);

  });

app.get("/", (req, res) => {

  res.send("API Running");

});

app.use("/api/users", userRoutes);

app.use("/api/complaints", complaintRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server Running On Port ${PORT}`
  );

});