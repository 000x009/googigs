import { SignUp } from "@clerk/nextjs";
import { Page } from "@/shared/ui/page";

export default function SignUpPage() {
  return (
    <Page className="justify-center items-center">
      <SignUp />
    </Page>
  );
}
