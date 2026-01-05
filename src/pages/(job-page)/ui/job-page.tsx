import { Page } from "@/shared/ui/page";
import { JobHeader } from "./job-header";
import { JobBody } from "./job-body";
import { DetailsWidget } from "./details-widget";
import { AboutCompany } from "./about-company";
import { IJob, JobType, WorkModel } from "@/entities/job/model/types";
import { JobPerks } from "./job-perks";

interface IProps {
  slug: string;
}

const mockJob: IJob = {
  id: "1",
  currency: "USD",
  title: "Software Engineer",
  description:
    "We are looking for a software engineer with 3 years of experience in React and Node.js.",
  company: {
    id: "1",
    name: "Google",
    logo_url:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    slug: "google",
    industry: "Technology",
    website: "https://www.google.com",
    location: "San Francisco, CA",
    founded: "1998",
    description:
      "Google is a technology company that provides search engine services.",
    employees: 100000,
  },
  position: "Software Engineer",
  location: "San Francisco, CA",
  work_model: WorkModel.REMOTE,
  requirements: [{ description: "3 years of experience in React" }],
  responsibilities: [{ description: "Develop and maintain web applications" }],
  benefits: [
    {
      id: "1",
      title: "Health Insurance",
      description: "Health insurance provided by the company",
    },
  ],
  tags: [
    { id: "1", name: "React" },
    { id: "2", name: "Node.js" },
  ],
  salary_min: 100000,
  salary_max: 120000,
  slug: "software-engineer",
  created_at: "2024-01-01",
  type: JobType.FULL_TIME,
  applied_count: 100,
};

export default function JobPage({ slug }: IProps) {
  return (
    <Page className="bg-bg-secondary p-4 relative h-full">
      <div
        className="absolute top-0 left-0 w-full h-full inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgb(0, 0, 0) 1px, rgba(0, 0, 0, 0) 0px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="flex gap-4 z-10 max-w-5xl mx-auto my-10 w-full">
        <div className="flex flex-col gap-4 flex-2">
          <JobHeader job={mockJob} />
          <JobBody job={mockJob} />
          <JobPerks job={mockJob} />
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <DetailsWidget job={mockJob} />
          <AboutCompany company={mockJob.company} />
        </div>
      </div>
    </Page>
  );
}
