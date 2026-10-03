import { useState } from "react";

type ApplicationStatus =
  | "Wishlist"
  | "Applied"
  | "OA"
  | "Interview"
  | "Offer"
  | "Rejected";

interface Application {
  id: number;
  company: string;
  position: string;

  type: "Internship" | "Full-Time" | "Part-Time" | "Contract";

  status:
    | "Wishlist"
    | "Applied"
    | "OA"
    | "Interview"
    | "Offer"
    | "Rejected";

  dateApplied: string;
}

function App() {
  const [applications, setApplications] = useState<Application[]>([  // gives React memory
    {
      id: 1,
      company: "Google",
      position: "Software Engineer Intern",
      status: "Applied",
      dateApplied: "2026-10-01",
    },
  ]);

  const addApplication = () => {
    const newApplication: Application = {
      id: Date.now(),
      company: "Microsoft",
      position: "Software Engineer Intern",
      status: "Wishlist",
      dateApplied: "2026-10-03",
    };

    setApplications([...applications, newApplication]);
  };

  const deleteApplication = (id: number) => {
    setApplications(
      applications.filter((application) => application.id !== id)
    );
  };

  return (
    <div>
      <h1>Internship Tracker</h1>

      <button onClick={addApplication}>
        Add Application
      </button>

      {applications.map((application) => (  // for every application in the array create a ui
        <div key={application.id}>
          <h2>{application.company}</h2>

          <p>{application.position}</p>
          <p>Status: {application.status}</p>
          <p>Date Applied: {application.dateApplied}</p>

          <button onClick={() => deleteApplication(application.id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;