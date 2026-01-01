interface ICompany {
  id: string;
  name: string;
  logo_url: string;
  slug: string;
}

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

export interface IJob {
  id: string;
  title: string;
  description: string;
  company: ICompany;
  location: string;
  salary_min: number;
  work_model: WorkModel;
  tags: ITag[];
  salary_max: number;
  slug: string;
  created_at: string;
  type: JobType;
}
