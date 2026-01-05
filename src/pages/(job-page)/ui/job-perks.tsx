import { IJob } from "@/entities/job/model/types";
import { JobWidget } from "./job-widget";
import { Text } from "@/shared/ui/text";
import { JobSection } from "./job-section";
import { IBenefits } from "@/entities/job/model/types";

interface IProps {
  job: IJob;
}

export function JobPerksItem({ title, description }: IBenefits) {
  return (
    <div className="flex flex-col gap-2 bg-accent p-4 rounded-md">
      <Text component="h3" className="text-bold">
        {title}
      </Text>
      <Text component="p" className="text-xs">
        {description}
      </Text>
    </div>
  );
}

export function JobPerks({ job }: IProps) {
  return (
    <JobWidget>
      <JobSection title="Benefits & Perks">
        <div className="grid grid-cols-2 gap-2">
          {job.benefits.map((benefit) => (
            <JobPerksItem key={benefit.id} {...benefit} />
          ))}
        </div>
      </JobSection>
    </JobWidget>
  );
}
