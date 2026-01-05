import { cn } from "@/shared/lib/helpers/cn";

export function Page({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("flex flex-col min-h-screen flex-1", className)}>
      {children}
    </main>
  );
}
