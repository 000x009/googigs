import Lottie from "lottie-react";
import animationData from "@/shared/assets/lottie/staple.json";

export function Staple() {
  return (
    <div className="fixed bottom-8 right-10 hover:-translate-y-1 transition-all duration-300">
      <Lottie
        animationData={animationData}
        style={{ width: "56px", height: "56px" }}
        className="flex justify-center items-center"
        loop={true}
      />
    </div>
  );
}
