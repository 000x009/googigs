import { cn } from "@/shared/lib/helpers/cn";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export function JobWidget({ children, className, ...props }: IProps) {
  return (
    <div
      className={cn("bg-white w-full p-4 border-border border-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}
