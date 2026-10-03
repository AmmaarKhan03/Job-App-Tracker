import type { Application } from "../types/application";

interface ApplicationCardProps {
  application: Application;
  onDelete: (id: number) => void;
}

function ApplicationCard({
  application,
  onDelete,
}: ApplicationCardProps) {
  return (
    <div>
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
        {application.dateApplied || "Not specified"}
      </p>

      <button
        onClick={() => onDelete(application.id)}
      >
        Delete
      </button>

      <hr />
    </div>
  );
}

export default ApplicationCard;