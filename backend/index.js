require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const projectRoutes = require("./routes/projectRoutes");

const app = express();

// MIDDLEWARE
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

// ROUTES
app.use("/projects", projectRoutes);

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (
    username !== process.env.ADMIN_USER ||
    password !== process.env.ADMIN_PASS
  ) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });

  res.json({ token });
});

app.get("/", (req, res) => {
  res.send("API running");
});

// DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// STATIC
app.use("/uploads", express.static("uploads"));

// START
app.listen(5000, () => console.log("Server running on port 5000"));