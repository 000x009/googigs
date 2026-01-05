import { IJob } from "@/entities/job/model/types";
import { Text } from "@/shared/ui/text";
import { JobWidget } from "./job-widget";
import { JobSection } from "./job-section";

interface IProps {
  job: IJob;
}

export function JobBody({ job }: IProps) {
  return (
    <JobWidget className="flex flex-col gap-4">
      <JobSection title="Job Description">
        <Text component="p">{job.description}</Text>
      </JobSection>
      <JobSection title="Job Responsibilities">
        <Text component="p">
          {job.responsibilities
            .map((responsibility) => responsibility.description)
            .join(", ")}
        </Text>
      </JobSection>
    </JobWidget>
  );
}
