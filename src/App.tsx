import { useState } from "react";

// -----------------------------
// TYPES
// -----------------------------

type ApplicationStatus =
  | "Wishlist"
  | "Applied"
  | "OA"
  | "Interview"
  | "Offer"
  | "Rejected";

type JobType =
  | "Internship"
  | "Full-Time"
  | "Part-Time"
  | "Contract";

interface Application {
  id: number;
  company: string;
  position: string;
  type: JobType;
  status: ApplicationStatus;
  dateApplied: string;
}

// -----------------------------
// APP COMPONENT
// -----------------------------

function App() {
  // -----------------------------
  // APPLICATION DATA
  // -----------------------------

  const [applications, setApplications] = useState<Application[]>([
    {
      id: 1,
      company: "Google",
      position: "Software Engineer Intern",
      type: "Internship",
      status: "Applied",
      dateApplied: "2026-10-01",
    },
  ]);

  // -----------------------------
  // FORM STATE
  // -----------------------------

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");

  const [type, setType] =
    useState<JobType>("Internship");

  const [status, setStatus] =
    useState<ApplicationStatus>("Wishlist");

  const [dateApplied, setDateApplied] =
    useState("");

  // -----------------------------
  // ADD APPLICATION
  // -----------------------------

  const addApplication = () => {
    // Don't allow empty company or position
    if (!company.trim() || !position.trim()) {
      return;
    }

    const newApplication: Application = {
      id: Date.now(),
      company: company,
      position: position,
      type: type,
      status: status,
      dateApplied: dateApplied,
    };

    setApplications([
      ...applications,
      newApplication,
    ]);

    // Reset form after adding
    setCompany("");
    setPosition("");
    setType("Internship");
    setStatus("Wishlist");
    setDateApplied("");
  };

  // -----------------------------
  // DELETE APPLICATION
  // -----------------------------

  const deleteApplication = (id: number) => {
    const updatedApplications =
      applications.filter(
        (application) => application.id !== id
      );

    setApplications(updatedApplications);
  };

  // -----------------------------
  // UI
  // -----------------------------

  return (
    <div>
      <h1>Job Application Tracker</h1>

      {/* ADD APPLICATION FORM */}

      <div>
        <h2>Add Application</h2>

        {/* Company */}

        <div>
          <label>Company</label>

          <input
            type="text"
            placeholder="Google"
            value={company}
            onChange={(event) =>
              setCompany(event.target.value)
            }
          />
        </div>

        {/* Position */}

        <div>
          <label>Position</label>

          <input
            type="text"
            placeholder="Software Engineer"
            value={position}
            onChange={(event) =>
              setPosition(event.target.value)
            }
          />
        </div>

        {/* Job Type */}

        <div>
          <label>Job Type</label>

          <select
            value={type}
            onChange={(event) =>
              setType(
                event.target.value as JobType
              )
            }
          >
            <option value="Internship">
              Internship
            </option>

            <option value="Full-Time">
              Full-Time
            </option>

            <option value="Part-Time">
              Part-Time
            </option>

            <option value="Contract">
              Contract
            </option>
          </select>
        </div>

        {/* Status */}

        <div>
          <label>Status</label>

          <select
            value={status}
            onChange={(event) =>
              setStatus(
                event.target
                  .value as ApplicationStatus
              )
            }
          >
            <option value="Wishlist">
              Wishlist
            </option>

            <option value="Applied">
              Applied
            </option>

            <option value="OA">
              OA
            </option>

            <option value="Interview">
              Interview
            </option>

            <option value="Offer">
              Offer
            </option>

            <option value="Rejected">
              Rejected
            </option>
          </select>
        </div>

        {/* Date Applied */}

        <div>
          <label>Date Applied</label>

          <input
            type="date"
            value={dateApplied}
            onChange={(event) =>
              setDateApplied(event.target.value)
            }
          />
        </div>

        {/* Add Button */}

        <button onClick={addApplication}>
          Add Application
        </button>
      </div>

      <hr />

      {/* APPLICATION LIST */}

      <div>
        <h2>Applications</h2>

        {applications.length === 0 && (
          <p>No applications yet.</p>
        )}

        {applications.map((application) => (
          <div key={application.id}>
            <h3>{application.company}</h3>

            <p>
              Position: {application.position}
            </p>

            <p>
              Type: {application.type}
            </p>

            <p>
              Status: {application.status}
            </p>

            <p>
              Date Applied:{" "}
              {application.dateApplied ||
                "Not specified"}
            </p>

            <button
              onClick={() =>
                deleteApplication(
                  application.id
                )
              }
            >
              Delete
            </button>

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;