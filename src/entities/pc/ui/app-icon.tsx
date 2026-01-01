import { cn } from "@/shared/lib/helpers/cn";
import Image from "next/image";
import { Text } from "@/shared/ui/text";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  icon: string;
}

export function AppIcon({ children, className, icon, ...props }: IProps) {
  return (
    <div className={cn(className)} {...props}>
      <Image
        src={icon}
        alt="App Icon"
        width={24}
        height={24}
        className="w-6 h-6"
      />
      <Text>{children}</Text>
    </div>
  );
}
