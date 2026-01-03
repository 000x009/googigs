import { SignIn } from "@clerk/nextjs";
import { Page } from "@/shared/ui/page";

export default function LoginPage() {
  return (
    <Page className="flex justify-center items-center">
      <SignIn />
    </Page>
  );
}
