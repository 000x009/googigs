import Lottie from "lottie-react";
import { Popover, PopoverContent, PopoverTrigger, Text } from "@/shared/ui";
import animationData from "@/shared/assets/lottie/staple.json";
import { essentialFileIcon } from "@/shared/assets/icons/essential-file-icon";

export function Staple() {
  return (
    <div className="fixed bottom-8 right-10 hover:-translate-y-1 transition-all duration-300">
      <Popover>
        <PopoverTrigger>
          <div>
            <Lottie
              animationData={animationData}
              style={{ width: "56px", height: "56px" }}
              className="flex justify-center items-center"
              loop={true}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="mr-10 bg-[#ffffcc]!" sideOffset={10}>
          <div className="flex items-center gap-4 flex-col justify-center">
            {essentialFileIcon}
            <Text className="text-center text-sm!">
              SERVICE IS NOT AVAILABLE :(
            </Text>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
