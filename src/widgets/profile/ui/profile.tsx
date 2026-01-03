"use client";

import { cn } from "@/shared/lib/helpers/cn";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/shared/ui";
import { AccountCard } from "@/entities/user/ui/account-card";
import { IUser } from "@/entities/user/model/types";

interface IProps {
  className?: string;
}

export function ProfileCard({ className, ...props }: IProps) {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) return null;

  const userData: IUser | null = user && {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
  };

  return (
    <div className={cn(className)} {...props}>
      {isSignedIn ? (
        <AccountCard user={userData!} />
      ) : (
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button>Login</Button>
          </Link>
          <Link href="/job/new">
            <Button variant="secondary">Post a Job</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
