import { cn } from "@/shared/lib/helpers/cn";

export function Page({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col h-screen", className)}>{children}</div>
  );
}
