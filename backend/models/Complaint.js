import mongoose from "mongoose";

const ComplaintSchema = new mongoose.Schema({
  name: String,
  email: String,
  title: String,
  description: String,
  category: String,
  location: String,
  priority: {
    type: String,
    default: "Medium"
  },
  department: {
    type: String,
    default: "General"
  },
  aiSummary: String,
  aiResponse: String,
  status: {
    type: String,
    default: "Pending"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Complaint", ComplaintSchema);