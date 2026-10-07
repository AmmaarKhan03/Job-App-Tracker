export type ApplicationStatus =
  | "Wishlist"
  | "Applied"
  | "OA"
  | "Interview"
  | "Offer"
  | "Rejected";

export type JobType =
  | "Internship"
  | "Full-Time"
  | "Part-Time"
  | "Contract";

export interface Application {
  id: number;
  company: string;
  position: string;
  type: JobType;
  status: ApplicationStatus;
  dateApplied: string;
}

export interface NewApplication {
  company: string;
  position: string;
  type: JobType;
  status: ApplicationStatus;
  dateApplied: string;
}