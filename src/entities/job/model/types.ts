import { ICompany } from "@/entities/company/model/types";

interface ITag {
  id: string;
  name: string;
}

export enum JobType {
  FULL_TIME = "full_time",
  PART_TIME = "part_time",
  CONTRACT = "contract",
  INTERNSHIP = "internship",
}

export enum WorkModel {
  REMOTE = "remote",
  HYBRID = "hybrid",
  ON_SITE = "on_site",
}

export interface IRequirements {
  description: string;
}

export interface IResponsibilities {
  description: string;
}

export interface IBenefits {
  id: string;
  title: string;
  description: string;
}

export interface IJob {
  id: string;
  title: string;
  description: string;
  company: ICompany;
  position: string;
  location: string;
  salary_min: number;
  work_model: WorkModel;
  requirements: IRequirements[];
  responsibilities: IResponsibilities[];
  benefits: IBenefits[];
  tags: ITag[];
  salary_max: number;
  slug: string;
  created_at: string;
  type: JobType;
  applied_count: number;
  currency: string;
}
