import { IJob } from "@/entities/job/model/types";
import Link from "next/link";
import { JobCard } from "@/entities/job/ui/job-card";

interface IProps {
  jobs: IJob[];
}

export function JobsList({ jobs }: IProps) {
  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center">
      {jobs.map((job) => (
        <Link
          href={`/jobs/${job.slug}`}
          key={job.id}
          className="w-full"
          target="_blank"
        >
          <JobCard job={job} />
        </Link>
      ))}
    </div>
  );
}
