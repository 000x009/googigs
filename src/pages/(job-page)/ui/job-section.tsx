import { Separator } from "@/shared/ui/separator";
import { Text } from "@/shared/ui/text";
import { cn } from "@/shared/lib/helpers/cn";

interface IProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export const JobSection = ({
  children,
  title,
  className,
  ...props
}: IProps) => (
  <div className={cn("flex flex-col", className)} {...props}>
    <div className="mb-4 flex flex-col gap-3">
      <Text component="h2" className="font-bold">
        {title}
      </Text>
      <Separator />
    </div>
    {children}
  </div>
);
