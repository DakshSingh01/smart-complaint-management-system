import { analyzeComplaintAI } from "../services/openrouterService.js";

export const analyzeComplaint = async (req, res) => {
  try {
    const { description } = req.body;

    const result = await analyzeComplaintAI(description);

    res.json({
      result
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};