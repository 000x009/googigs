import { IJob } from "@/entities/job/model/types";
import { JobCard } from "@/entities/job/ui/job-card";

interface IProps {
  jobs: IJob[];
}

export function JobsList({ jobs }: IProps) {
  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} className="w-full" />
      ))}
    </div>
  );
}
