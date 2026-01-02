import { Button } from "@/shared/ui/button";

export function Header() {
  return (
    <div className="flex items-center justify-end w-full p-4">
      <div className="flex items-center gap-4">
        <Button>Login</Button>
        <Button variant="secondary">Post a Job</Button>
      </div>
    </div>
  );
}
