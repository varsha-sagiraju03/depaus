// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const XLSX = require("xlsx");
// const fs = require("fs");
// const path = require("path");
// const nodemailer = require("nodemailer");
// require("dotenv").config();

// // ================= APP SETUP =================
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // ================= MONGODB CONNECTION =================
// mongoose
//   .connect(
//     "mongodb+srv://varsha:varsha@backend.rravwpl.mongodb.net/newexcelDB",
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB error:", err));

// // ================= MONGOOSE SCHEMA =================
// const submissionSchema = new mongoose.Schema({
//   name: String,
//   mobile: String,
//   email: String,
//   lookingFor: String,
//   country: String,
//   comments: String,
//   scheduleDate: String,
//   scheduleTime: String,
//   pageUrl: String,
//   createdAt: { type: Date, default: Date.now },
// });

// const Submission = mongoose.model("Submission", submissionSchema);

// // ================= EXCEL FILE SETUP =================
// const excelFile = path.join(__dirname, "submissions.xlsx");
// if (!fs.existsSync(excelFile)) {
//   const ws = XLSX.utils.json_to_sheet([]);
//   const wb = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(wb, ws, "Submissions");
//   XLSX.writeFile(wb, excelFile);
// }

// // ================= NODEMAILER SETUP =================
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // ================= API ROUTES =================

// // 1️⃣ Save form submission (used by both Email & WhatsApp buttons)
// app.post("/api/submit", async (req, res) => {
//   const { name, mobile, email, lookingFor, country, comments, scheduleDate, scheduleTime, pageUrl } = req.body;

//   if (!name || !mobile || !email || !lookingFor || !country) {
//     return res.status(400).json({ error: "❌ All required fields must be filled" });
//   }

//   try {
//     // Save in MongoDB
//     const newSubmission = new Submission({
//       name,
//       mobile,
//       email,
//       lookingFor,
//       country,
//       comments,
//       scheduleDate: scheduleDate || "",
//       scheduleTime: scheduleTime || "",
//       pageUrl,
//     });
//     const savedSubmission = await newSubmission.save();

//     // Save in Excel
//     const wb = XLSX.readFile(excelFile);
//     const ws = wb.Sheets["Submissions"];
//     const data = XLSX.utils.sheet_to_json(ws);

//     data.push({
//       Name: name,
//       Mobile: mobile,
//       Email: email,
//       LookingFor: lookingFor,
//       Country: country,
//       Comments: comments || "",
//       ScheduleDate: scheduleDate || "",
//       ScheduleTime: scheduleTime || "",
//       PageUrl: pageUrl || "",
//       Date: new Date().toLocaleString(),
//     });

//     const newWs = XLSX.utils.json_to_sheet(data);
//     wb.Sheets["Submissions"] = newWs;
//     XLSX.writeFile(wb, excelFile);

//     console.log("✅ Submission saved:", { name, mobile, email });
//     res.json({
//       message: "✅ Submission saved successfully",
//       id: savedSubmission._id,
//     });
//   } catch (err) {
//     console.error("❌ Error submitting form:", err);
//     res.status(500).json({ error: "❌ Server error" });
//   }
// });

// // 2️⃣ Send email by submission ID
// app.get("/api/send-email/:id", async (req, res) => {
//   try {
//     const submission = await Submission.findById(req.params.id);
//     if (!submission) return res.status(404).json({ error: "Submission not found" });

//     const emailContent = `
// New Consultation Request from Xcel Global Services:

// Name: ${submission.name}
// Mobile: ${submission.mobile}
// Email: ${submission.email}
// Looking For: ${submission.lookingFor}
// Country: ${submission.country}
// Comments: ${submission.comments || "N/A"}
// Schedule Date: ${submission.scheduleDate || "N/A"}
// Schedule Time: ${submission.scheduleTime || "N/A"}
// Page URL: ${submission.pageUrl || "N/A"}
// Submission Date: ${submission.createdAt}

// This is an automated message from the Xcel Global Services website.
//     `;

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: "sagiraju1770@gmail.com", // Replace with your email
//       subject: "New Consultation Request - Xcel Global Services",
//       text: emailContent,
//     });

//     res.json({ message: "📧 Email sent successfully" });
//   } catch (err) {
//     console.error("❌ Error sending email:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // ================= START SERVER =================
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enhanced CORS for production
app.use(cors({
  origin: [
    "http://localhost:5173", 
    "http://localhost:3000",
    "https://your-frontend-domain.vercel.app",
    "https://www.your-frontend-domain.vercel.app"
  ],
  credentials: true
}));

app.use(express.json());

// Serve static files from React build (IMPORTANT FOR PRODUCTION)
app.use(express.static(path.join(__dirname, '../f2/dist')));

// MongoDB connection with environment variable
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://varsha:varsha@backend.rravwpl.mongodb.net/aexcelDB";
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// schema
const submissionSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  lookingFor: String,
  country: String,
  comments: String,
  scheduleDate: String,
  scheduleTime: String,
  pageUrl: String,
  createdAt: { type: Date, default: Date.now },
});

const Submission = mongoose.model("Submission", submissionSchema);

// excel 
const excelFile = path.join(__dirname, "submissions.xlsx");
if (!fs.existsSync(excelFile)) {
  const ws = XLSX.utils.json_to_sheet([]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Submissions");
  XLSX.writeFile(wb, excelFile);
}

// email
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify email configuration on startup
transporter.verify(function (error, success) {
  if (error) {
    console.log("❌ Email transporter error:", error);
  } else {
    console.log("✅ Email server is ready to take messages");
  }
});

// ================= API ROUTES =================

// 1️⃣ Save form submission (used by both Email & WhatsApp buttons)
app.post("/api/submit", async (req, res) => {
  const { name, mobile, email, lookingFor, country, comments, scheduleDate, scheduleTime, pageUrl } = req.body;

  if (!name || !mobile || !email || !lookingFor || !country) {
    return res.status(400).json({ error: " All required fields must be filled" });
  }

  try {
    // Save in MongoDB
    const newSubmission = new Submission({
      name,
      mobile,
      email,
      lookingFor,
      country,
      comments,
      scheduleDate: scheduleDate || "",
      scheduleTime: scheduleTime || "",
      pageUrl,
    });
    const savedSubmission = await newSubmission.save();

    // Save in Excel
    const wb = XLSX.readFile(excelFile);
    const ws = wb.Sheets["Submissions"];
    const data = XLSX.utils.sheet_to_json(ws);

    data.push({
      Name: name,
      Mobile: mobile,
      Email: email,
      LookingFor: lookingFor,
      Country: country,
      Comments: comments || "",
      ScheduleDate: scheduleDate || "",
      ScheduleTime: scheduleTime || "",
      PageUrl: pageUrl || "",
      Date: new Date().toLocaleString(),
    });

    const newWs = XLSX.utils.json_to_sheet(data);
    wb.Sheets["Submissions"] = newWs;
    XLSX.writeFile(wb, excelFile);

    console.log("✅ Submission saved:", { name, mobile, email });
    res.json({
      message: "✅ Submission saved successfully",
      id: savedSubmission._id,
    });
  } catch (err) {
    console.error("❌ Error submitting form:", err);
    res.status(500).json({ error: "❌ Server error" });
  }
});

// 2️⃣ Send email by submission ID
app.get("/api/send-email/:id", async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);
    if (!submission) return res.status(404).json({ error: "Submission not found" });

    const emailContent = `
New Consultation Request from Xcel Global Services:

Name: ${submission.name}
Mobile: ${submission.mobile}
Email: ${submission.email}
Looking For: ${submission.lookingFor}
Country: ${submission.country}
Comments: ${submission.comments || "N/A"}
Schedule Date: ${submission.scheduleDate || "N/A"}
Schedule Time: ${submission.scheduleTime || "N/A"}
Page URL: ${submission.pageUrl || "N/A"}
Submission Date: ${submission.createdAt}

This is an automated message from the Xcel Global Services website.
    `;

    console.log("📧 Attempting to send email...");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "sagiraju1770@gmail.com",
      subject: "New Consultation Request - Xcel Global Services",
      text: emailContent,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", result);

    res.json({ message: "📧 Email sent successfully" });
  } catch (err) {
    console.error("❌ Error sending email:", err);
    
    if (err.code === 'EAUTH') {
      res.status(500).json({ error: "Email authentication failed. Check your email credentials and App Password." });
    } else if (err.code === 'ECONNECTION') {
      res.status(500).json({ error: "Cannot connect to email server. Check your internet connection." });
    } else {
      res.status(500).json({ error: "Email sending failed: " + err.message });
    }
  }
});

// FIXED: Use middleware approach instead of route pattern
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '../f2/dist/index.html'));
});

// ================= START SERVER =================
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
}); 