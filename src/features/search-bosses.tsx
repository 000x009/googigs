import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/ui";
import SearchIcon from "@/shared/assets/icons/search.svg";
import Image from "next/image";

export function SearchBosses() {
  return (
    <div className="flex items-center justify-center w-full">
      <InputGroup className="w-full max-w-xl">
        <InputGroupAddon align="inline-start" className="pr-1">
          <Image
            src={SearchIcon}
            alt="Search"
            width={20}
            height={20}
            className="dark:invert"
          />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="Search bosses..."
          className="tracking-4! text-sm!"
        />
      </InputGroup>
    </div>
  );
}
