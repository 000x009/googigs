"use client";

import { LogoWidget } from "@/widgets/logo-widget/ui/logo-widget";
import { Page } from "@/shared/ui/page";
import { SearchBosses } from "@/features/search-bosses";
import { Staple } from "@/widgets/logo-widget/ui/staple";
import { JobsList } from "@/widgets/jobs-list/ui/jobs-list";
import { JobType, WorkModel } from "@/entities/job/model/types";

const jobs = [
  {
    id: "1",
    title: "Senior Python Developer",
    description:
      "We are looking for an experienced Python developer to join our backend team.",
    company: {
      id: "1",
      name: "TechCorp Inc.",
      logo_url: "https://m.media-amazon.com/images/I/31epF-8N9LL.png",
      slug: "tech-corp",
    },
    location: "San Francisco, CA",
    work_model: WorkModel.REMOTE,
    tags: [
      { id: "1", name: "Python" },
      { id: "2", name: "React" },
      { id: "3", name: "Node.js" },
    ],
    salary_min: 100000,
    salary_max: 120000,
    slug: "senior-python-developer",
    created_at: "2024-01-01",
    type: JobType.FULL_TIME,
  },
  {
    id: "2",
    title: "Marketing Manager",
    description: "Lead our marketing efforts and grow our brand presence.",
    company: {
      id: "1",
      name: "TechCorp Inc.",
      logo_url: "https://m.media-amazon.com/images/I/31epF-8N9LL.png",
      slug: "tech-corp",
    },
    location: "New York, NY",
    work_model: WorkModel.REMOTE,
    tags: [{ id: "1", name: "Marketing" }],
    salary_min: 100000,
    salary_max: 120000,
    slug: "marketing-manager",
    created_at: "2024-01-01",
    type: JobType.FULL_TIME,
  },
];

export default function HomePage() {
  return (
    <Page className="gap-8 relative">
      <LogoWidget />
      <SearchBosses />
      <Staple />
      <JobsList jobs={jobs} />
    </Page>
  );
}
