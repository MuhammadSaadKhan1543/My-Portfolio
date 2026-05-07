const express = require("express");
const router = express.Router();
const multer = require("multer"); // 1. Import Multer
const path = require("path");
const Project = require("../models/Project");
const auth = require("../middleware/auth");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

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
      techStack: typeof techStack === "string" ? techStack.split(",") : techStack,
      githubLink,
      liveLink,
      image: req.file ? req.file.filename : null,
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    console.error("POST ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;