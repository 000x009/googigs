import { ICompany } from "@/entities/company/model/types";
import { JobWidget } from "./job-widget";
import { Text } from "@/shared/ui/text";
import Image from "next/image";
import Link from "next/link";
import { formatUrl } from "@/shared/lib/helpers/formatUrl";

interface IProps {
  company: ICompany;
}

export function AboutCompany({ company }: IProps) {
  return (
    <JobWidget className="flex gap-4">
      <Image
        src={company.logo_url}
        alt={company.name}
        width={120}
        height={120}
        className="w-14 h-14 object-contain border border-gray-200 rounded-md object-center"
      />
      <div className="flex flex-col gap-2">
        <Text component="h3">{company.name}</Text>
        {company.website && (
          <Link href={company.website} target="_blank">
            <Text component="p" className="text-xs text-muted-foreground">
              {formatUrl(company.website)}
            </Text>
          </Link>
        )}
      </div>
    </JobWidget>
  );
}
