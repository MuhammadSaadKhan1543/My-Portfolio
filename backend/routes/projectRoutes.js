const express = require("express");
const router = express.Router();
const multer = require("multer"); // 1. Import Multer
const path = require("path");
const Project = require("../models/Project");
const auth = require("../middleware/auth");

// 2. Configure Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure this folder exists in your root!
  },
  filename: (req, file, cb) => {
    // Saves file as: timestamp-originalName.jpg
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// ✅ GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ POST new project (Added 'upload.single' middleware)
router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    // Multer puts text fields in req.body and the file in req.file
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "No body received" });
    }

    const { title, description, techStack, githubLink, liveLink } = req.body;

    const newProject = new Project({
      title,
      description,
      // Handle techStack as string or array depending on how you send it
      techStack: typeof techStack === "string" ? techStack.split(",") : techStack,
      githubLink,
      liveLink,
      // Store the filename in the database
      image: req.file ? req.file.filename : null,
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    console.error("POST ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

// ✅ DELETE
router.delete("/:id", auth, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;