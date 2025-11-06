import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import DeleteBlock from "./DeleteBlock";
import FormattedTimestamp from "./FormattedTimestamp";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const ticketLink = `/TicketPage/${ticket._id}`

  return (
    <div className="group relative bg-base-300 rounded-2xl shadow-2xl p-4 mb-4 md:mb-0  border border-red-700/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-amber-500/20 hover:shadow-2xl hover:-translate-y-1">
      {/* Glowing accent line */}
      <div className="absolute top-0 left-0 right-0 h-1  from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>

      <div className="flex mb-4 items-center">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto flex gap-2">
          <DeleteBlock path="Tickets" id={ticket._id} />
          <Link href={ticketLink} style={{ display: "contents" }}>
            <button
              type="button"
              className="btn btn-warning"
            >
              <FaEdit className="text-base" />
            </button>
          </Link>
        </div>
      </div>

      <Link href={ticketLink}>
        <div className="flex flex-col gap-3 h-[75%] justify-between">
          <div>

          <h4 className="text-xl line-clamp-2 font-bold  mb-3 group-hover:text-red-700 transition-colors duration-200">
            {ticket.title}
          </h4>

          <div className="h-px  from-transparent via-slate-600 to-transparent"></div>

          <p className="whitespace-pre-wrap line-clamp-2 mb-2 text-sm leading-relaxed">
            {ticket.description}
          </p>
          <div className="grow"></div>
            <p className="text-xs text-slate-400 font-medium flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <FormattedTimestamp timestamp={ticket.createdAt} options={options} />
            </p>
          </div>


          <div className="flex items-end justify-between pt-2 border-t border-slate-700/50">

            <ProgressDisplay progress={ticket.progress} />

            <div className="ml-4">
              <StatusDisplay status={ticket.status} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
