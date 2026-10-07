import { useState } from "react";

import ApplicationForm from "./components/ApplicationForm";
import ApplicationCard from "./components/ApplicationCard";

import type {
  Application,
  ApplicationStatus,
  JobType,
} from "./types/application";

function App() {
  const [applications, setApplications] =
    useState<Application[]>([
      {
        id: 1,
        company: "Google",
        position: "Software Engineer Intern",
        type: "Internship",
        status: "Applied",
        dateApplied: "2026-10-01",
      },
    ]);

  // Search/filter state
  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState<ApplicationStatus | "All">("All");

  const [typeFilter, setTypeFilter] =
    useState<JobType | "All">("All");

  // -----------------------
  // ADD
  // -----------------------

  const addApplication = (
    application: Application
  ) => {
    setApplications([
      ...applications,
      application,
    ]);
  };

  // -----------------------
  // DELETE
  // -----------------------

  const deleteApplication = (id: number) => {
    setApplications(
      applications.filter(
        (application) => application.id !== id
      )
    );
  };

  const updateApplicationStatus = (
  id: number,
  newStatus: ApplicationStatus
) => {
  setApplications(
    applications.map((application) =>
      application.id === id
        ? {
            ...application,
            status: newStatus,
          }
        : application
    )
  );
};

  // -----------------------
  // FILTER
  // -----------------------

  const filteredApplications =
    applications.filter((application) => {
      const matchesSearch =
        application.company
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        application.position
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        application.status === statusFilter;

      const matchesType =
        typeFilter === "All" ||
        application.type === typeFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesType
      );
    });

  return (
    <div>
      <h1>Job Application Tracker</h1>

      <ApplicationForm
        onAddApplication={addApplication}
      />

      <hr />

      <h2>Applications</h2>

      {/* SEARCH */}

      <input
        type="text"
        placeholder="Search company or position..."
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
      />

      {/* STATUS FILTER */}

      <select
        value={statusFilter}
        onChange={(event) =>
          setStatusFilter(
            event.target.value as
              | ApplicationStatus
              | "All"
          )
        }
      >
        <option value="All">
          All Statuses
        </option>

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

      {/* TYPE FILTER */}

      <select
        value={typeFilter}
        onChange={(event) =>
          setTypeFilter(
            event.target.value as
              | JobType
              | "All"
          )
        }
      >
        <option value="All">
          All Types
        </option>

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

      <p>
        Showing {filteredApplications.length} of{" "}
        {applications.length} applications
      </p>

      {/* APPLICATION LIST */}

      {filteredApplications.length === 0 && (
        <p>No matching applications.</p>
      )}

      {filteredApplications.map(
        (application) => (
          <ApplicationCard
            key={application.id}
            application={application}
            onDelete={deleteApplication}
            onStatusChange={updateApplicationStatus}
            />
        )
      )}
    </div>
  );
}

export default App;