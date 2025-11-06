import { FaFire } from "react-icons/fa";

const PriorityDisplay = ({ priority }) => {
  return (
    <>
      {/* Mobile: Show fire with number */}
      <div className="flex md:hidden items-center gap-1.5">
        <FaFire
          size={20}
          className="text-red-500"
        />
        <span className="text-sm font-bold text-red-500">
          {priority}
        </span>
      </div>

      {/* Desktop: Show all fires */}
      <div className="hidden md:flex justify-start align-baseline gap-2">
        <FaFire
          size={20}
          className={`pr-1 ${
            priority > 0 ? "text-red-500" : "text-slate-500"
          }`}
        />
        <FaFire
          size={20}
          className={`pr-1 ${
            priority > 1 ? "text-red-500" : "text-slate-500"
          }`}
        />
        <FaFire
          size={20}
          className={`pr-1 ${
            priority > 2 ? "text-red-500" : "text-slate-500"
          }`}
        />
        <FaFire
          size={20}
          className={`pr-1 ${
            priority > 3 ? "text-red-500" : "text-slate-500"
          }`}
        />
        <FaFire
          size={20}
          className={`${priority > 4 ? "text-red-500" : "text-slate-500"}`}
        />
      </div>
    </>
  );
};

export default PriorityDisplay;
