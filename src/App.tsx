

interface Application {
  company: string;
  position: string;
  status: "Wishlist" | "Applied" | "OA" | "Interview" | "Offer" | "Rejected";
  dateApplied: string;
}

function App() {

  const applications: Application[] = [
  {
    company: "Google",
    position: "Software Engineer Intern",
    status: "Wishlist",
    dateApplied: "2023-12-23"
  },
  {
    company: "Microsoft",
    position: "Software Engineer Intern",
    status: "Applied",
    dateApplied: "2023-12-24"
  }
];

  return (
    <div>
      <h1>Internship Tracker</h1>

      {applications.map((application) => (
        <div key={application.company}>
          <h2>{/* Company */}</h2>
          <p>{/* Position */}</p>
          <p>{/* Status */}</p>
        </div>
      ))}
    </div>
  );
}