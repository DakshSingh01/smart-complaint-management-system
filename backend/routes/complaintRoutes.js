import express from "express";

import {
  createComplaint,
  getComplaints,
  updateComplaint,
  deleteComplaint,
  searchComplaint
} from "../controllers/complaintController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

/*
========================================
CRUD ROUTES
========================================
*/

// CREATE Complaint
router.post("/", protect, createComplaint);

// GET All Complaints
router.get("/", protect, getComplaints);

// SEARCH Complaint by Location
// IMPORTANT: place ABOVE /:id routes
router.get("/search/location", protect, searchComplaint);

// UPDATE Complaint
router.put("/:id", protect, updateComplaint);

// DELETE Complaint
router.delete("/:id", protect, deleteComplaint);

export default router;