import { GetInTouchDetails } from "@/constants/defaultState";
import MobileHeader from "./ui/MobileHeader";

export default function GetInTouch() {
  return (
    <div className="px-5 mt-5">
      <MobileHeader title="Get In Touch" />
      <div className="flex flex-col gap-2 mt-4">
        {GetInTouchDetails.map((details) => (
          <a
            key={details.id}
            href={details.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between bg-linear-to-r from-[#161827] via-[#38276d] to-[#6a2679] rounded-2xl px-5 py-4 border-white border items-center"
          >
            <div className="flex items-center gap-4">
              <img src={details.icon} alt={details.label} className="w-6 h-6 bg-white rounded-sm" />
              <span className="text-white">{details.label}</span>
            </div>
            <span className="text-[10px] md:text-sm">/{details.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
