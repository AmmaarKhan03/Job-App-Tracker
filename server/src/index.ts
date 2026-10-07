import express from "express";
import cors from "cors";

const app = express();

const PORT = 3000;

app.use(cors());

app.use(express.json());

interface Application {
  id: number;
  company: string;
  position: string;
  type: string;
  status: string;
  dateApplied: string;
}

const applications: Application[] = [
  {
    id: 1,
    company: "Google",
    position: "Software Engineer Intern",
    type: "Internship",
    status: "Applied",
    dateApplied: "2026-10-01"
  }
];

app.get("/api/applications", (req, res) => {
  res.json(applications);
});

app.get("/", (req, res) => {
  res.json({
    message: "Job Application Tracker API"
  });
});

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});