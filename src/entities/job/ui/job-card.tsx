import { IJob } from "../model/types";
import Image from "next/image";
import { Text } from "@/shared/ui/text";
import { Button } from "@/shared/ui";
import { Badge } from "@/shared/ui/badge";
import { cn } from "@/shared/lib/helpers/cn";
import { formatJobName } from "@/entities/job/lib/formatJobName";

interface IProps {
  job: IJob;
  className?: string;
}

export function JobCard({ job, className, ...props }: IProps) {
  return (
    <div
      className={cn(
        "flex gap-4 justify-between items-center border border-gray-200 p-4 w-full",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-4">
        <Image
          src={job.company.logo_url}
          alt={job.company.name}
          width={120}
          className="w-14 h-14 object-cover border border-gray-200"
          height={120}
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Text className="text-[16px]! font-bold!">
              {formatJobName(job.title)}
            </Text>
            <Badge>{job.work_model.toUpperCase()}</Badge>
          </div>
          <div className="flex items-center gap-2 text-sm!">
            <Text className="text-xs!">{job.company.name}</Text>
            <Text className="text-xs! text-muted-foreground">
              {job.location}
            </Text>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          {job.tags.slice(0, 3).map((tag) => (
            <Badge key={tag.id}>{tag.name}</Badge>
          ))}
        </div>
        <Button className="cursor-pointer">Open</Button>
      </div>
    </div>
  );
}
