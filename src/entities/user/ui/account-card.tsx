import { cn } from "@/shared/lib/helpers/cn";
import { IUser } from "../model/types";
import { Text } from "@/shared/ui/text";
import { formatName } from "../lib/formatName";

interface IProps {
  className?: string;
  user: IUser;
}

export function AccountCard({ className, user, ...props }: IProps) {
  const formattedName = formatName(user.firstName, user.lastName);
  return (
    <div className={cn(className)} {...props}>
      <div className="flex flex-col gap-2 hover:underline cursor-pointer">
        <Text>{formattedName}</Text>
      </div>
    </div>
  );
}
