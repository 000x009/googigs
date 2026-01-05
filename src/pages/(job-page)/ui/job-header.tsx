import { Text } from "@/shared/ui/text";
import { JobWidget } from "./job-widget";
import { IJob } from "@/entities/job/model/types";
import { Badge } from "@/shared/ui/badge";

interface IProps {
  job: IJob;
}

export function JobHeader({ job }: IProps) {
  return (
    <JobWidget className="flex flex-col gap-4 relative">
      <Text component="h2" className="font-bold text-2xl">
        {job.title}
      </Text>

      <div className="flex items-center gap-2 lowercase">
        <Badge>{job.position}</Badge>
        <Badge>{job.work_model}</Badge>
        <Badge>{job.type}</Badge>
      </div>
    </JobWidget>
  );
}
