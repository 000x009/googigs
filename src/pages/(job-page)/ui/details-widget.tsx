import { JobWidget } from "./job-widget";
import { Text } from "@/shared/ui/text";
import { IJob } from "@/entities/job/model/types";
import { Button } from "@/shared/ui/button";

interface IProps {
  job: IJob;
}

export function DetailsWidget({ job }: IProps) {
  return (
    <JobWidget className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Text component="p">
          <span className="font-bold">Salary:</span> {job.currency}{" "}
          {job.salary_min} - {job.salary_max}
        </Text>
        <Text component="p">
          <span className="font-bold">Location:</span> {job.location}
        </Text>
        <Text component="p">
          <span className="font-bold">Employment Type:</span> {job.type}
        </Text>
      </div>
      <Button className="w-full">Apply Now</Button>
    </JobWidget>
  );
}
