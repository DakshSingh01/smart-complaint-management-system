import express from "express";
import { analyzeComplaint } from "../controllers/aiController.js";

const router = express.Router();

router.post("/analyze", analyzeComplaint);

export default router;