import { ProfileCard } from "@/widgets/profile/ui/profile";
import { currentUser } from "@clerk/nextjs/server";

export function Header() {
  return (
    <div className="flex items-center justify-end w-full p-4">
      <ProfileCard />
    </div>
  );
}
