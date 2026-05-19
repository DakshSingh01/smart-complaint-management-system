import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());

/* IMPORTANT CORS FIX */
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

/* ROUTES */
import authRoutes from "./routes/authRoutes.js";
import complaintRoutes from "./routes/complaintRoutes.js";

app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);

/* TEST ROUTE */
app.get("/", (req, res) => {
  res.send("API Running...");
});

/* MONGODB CONNECT */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(process.env.PORT || 5000, () => {
      console.log("Server Running");
    });
  })
  .catch((err) => {
    console.log(err);
  });