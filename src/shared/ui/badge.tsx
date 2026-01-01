import { cn } from "@/shared/lib/helpers/cn";
import { Text } from "./text";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: IProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary",
        className,
      )}
    >
      <Text>{children}</Text>
    </div>
  );
}
