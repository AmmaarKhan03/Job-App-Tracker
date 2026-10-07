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

let applications: Application[] = [
  {
    id: 1,
    company: "Google",
    position: "Software Engineer Intern",
    type: "Internship",
    status: "Applied",
    dateApplied: "2026-10-01",
  },
];

// --------------------------------
// GET ALL APPLICATIONS
// --------------------------------

app.get("/api/applications", (req, res) => {
  res.json(applications);
});

// --------------------------------
// CREATE APPLICATION
// --------------------------------

app.post("/api/applications", (req, res) => {
  const newApplication: Application = {
    id: Date.now(),
    company: req.body.company,
    position: req.body.position,
    type: req.body.type,
    status: req.body.status,
    dateApplied: req.body.dateApplied,
  };

  applications.push(newApplication);

  res.status(201).json(newApplication);
});

// --------------------------------
// UPDATE APPLICATION STATUS
// --------------------------------

app.patch("/api/applications/:id", (req, res) => {
  const id = Number(req.params.id);

  const application = applications.find(
    (application) => application.id === id
  );

  if (!application) {
    res.status(404).json({
      message: "Application not found",
    });

    return;
  }

  application.status = req.body.status;

  res.json(application);
});

// --------------------------------
// DELETE APPLICATION
// --------------------------------

app.delete("/api/applications/:id", (req, res) => {
  const id = Number(req.params.id);

  const applicationExists = applications.some(
    (application) => application.id === id
  );

  if (!applicationExists) {
    res.status(404).json({
      message: "Application not found",
    });

    return;
  }

  applications = applications.filter(
    (application) => application.id !== id
  );

  res.status(204).send();
});

// --------------------------------
// ROOT
// --------------------------------

app.get("/", (req, res) => {
  res.json({
    message: "Job Application Tracker API",
  });
});

// --------------------------------
// START SERVER
// --------------------------------

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});