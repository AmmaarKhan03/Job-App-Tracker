import type {
  Application,
  ApplicationStatus,
} from "../types/application";

interface ApplicationCardProps {
  application: Application;

  onDelete: (id: number) => void;

  onStatusChange: (
    id: number,
    status: ApplicationStatus
  ) => void;
}

function ApplicationCard({
  application,
  onDelete,
  onStatusChange,
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

      <div>
        <label>Status: </label>

        <select
          value={application.status}
          onChange={(event) =>
            onStatusChange(
              application.id,
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

      <p>
        Date Applied:{" "}
        {application.dateApplied ||
          "Not specified"}
      </p>

      <button
        onClick={() =>
          onDelete(application.id)
        }
      >
        Delete
      </button>

      <hr />
    </div>
  );
}

export default ApplicationCard;