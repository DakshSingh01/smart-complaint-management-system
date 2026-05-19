import Complaint from "../models/Complaint.js";

export const createComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create(req.body);

    res.status(201).json(complaint);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({
      createdAt: -1
    });

    res.json(complaints);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const updateComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        message: "Complaint not found"
      });
    }

    Object.assign(complaint, req.body);

    await complaint.save();

    res.json(complaint);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const deleteComplaint = async (req, res) => {
  try {
    await Complaint.findByIdAndDelete(req.params.id);

    res.json({
      message: "Complaint deleted"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const searchComplaint = async (req, res) => {
  try {
    const complaints = await Complaint.find({
      location: {
        $regex: req.query.location,
        $options: "i"
      }
    });

    res.json(complaints);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};