import { useState } from "react";

import ApplicationForm from "./components/ApplicationForm";
import ApplicationCard from "./components/ApplicationCard";

import type { Application } from "./types/application";

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

  const addApplication = (
    application: Application
  ) => {
    setApplications([
      ...applications,
      application,
    ]);
  };

  const deleteApplication = (id: number) => {
    setApplications(
      applications.filter(
        (application) => application.id !== id
      )
    );
  };

  return (
    <div>
      <h1>Job Application Tracker</h1>

      <ApplicationForm
        onAddApplication={addApplication}
      />

      <hr />

      <h2>Applications</h2>

      {applications.length === 0 && (
        <p>No applications yet.</p>
      )}

      {applications.map((application) => (
        <ApplicationCard
          key={application.id}
          application={application}
          onDelete={deleteApplication}
        />
      ))}
    </div>
  );
}

export default App;