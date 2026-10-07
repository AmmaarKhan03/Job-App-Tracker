import { useState } from "react";
import type {
  NewApplication,
  ApplicationStatus,
  JobType,
} from "../types/application";

interface ApplicationFormProps {
  onAddApplication: (
    application: NewApplication
  ) => void;
}

function ApplicationForm({
  onAddApplication,
}: ApplicationFormProps) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [type, setType] =
    useState<JobType>("Internship");

  const [status, setStatus] =
    useState<ApplicationStatus>("Wishlist");

  const [dateApplied, setDateApplied] = useState("");

  const handleSubmit = () => {
    if (!company.trim() || !position.trim()) {
      return;
    }

    const newApplication: NewApplication = {
  company,
  position,
  type,
  status,
  dateApplied,
};

    onAddApplication(newApplication);

    setCompany("");
    setPosition("");
    setType("Internship");
    setStatus("Wishlist");
    setDateApplied("");
  };

  return (
    <div>
      <h2>Add Application</h2>

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

      <div>
        <label>Job Type</label>

        <select
          value={type}
          onChange={(event) =>
            setType(event.target.value as JobType)
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

      <div>
        <label>Status</label>

        <select
          value={status}
          onChange={(event) =>
            setStatus(
              event.target.value as ApplicationStatus
            )
          }
        >
          <option value="Wishlist">Wishlist</option>
          <option value="Applied">Applied</option>
          <option value="OA">OA</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

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

      <button onClick={handleSubmit}>
        Add Application
      </button>
    </div>
  );
}

export default ApplicationForm;