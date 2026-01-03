import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/ui";
import SearchIcon from "@/shared/assets/icons/search.svg";
import Image from "next/image";
import { mapPinIcon } from "@/shared/assets/icons/map-pin-icon";

export function SearchBosses() {
  return (
    <div className="flex items-center justify-center w-full gap-4">
      <InputGroup className="w-full flex-3">
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
      <InputGroup className="w-full flex-1">
        <InputGroupAddon align="inline-start" className="pr-1">
          {mapPinIcon}
        </InputGroupAddon>
        <InputGroupInput
          placeholder="Location"
          className="tracking-4! text-sm!"
        />
      </InputGroup>
    </div>
  );
}
