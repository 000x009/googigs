import Image from "next/image";
import logo from "@/shared/assets/logo.svg";
import { Text } from "@/shared/ui/text";

export function LogoWidget() {
  return (
    <div className="flex items-center justify-center flex-col">
      <Image
        src={logo}
        alt="Logo"
        width={98}
        height={98}
        className="invert dark:invert-0"
      />
      <div className="flex items-center justify-center flex-col gap-2">
        <Text
          component="h1"
          className="text-2xl font-bold text-center uppercase tracking-widest"
        >
          googigs.com
        </Text>
        <Text component="p" className="text-sm text-center">
          Jobs Jobs Jobs...
        </Text>
      </div>
    </div>
  );
}
