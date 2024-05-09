import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import DeleteBlock from "./DeleteBlock";
import ProgressDisplay from "./ProgressDisplay";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

const TicketCard = ({ ticket }) => {
  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  }

  const createdDateTime = formatTimestamp(ticket.createdAt);

  return (
    <div className="card flex flex-col hover:bg-card-hover bg-card rounded-md shadow-xl p-5 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock path="Tickets" id={ticket._id} />
          <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}>
            <button
              type="button"
              className="focus:outline-none text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              <FaEdit />
            </button>
          </Link>
        </div>
      </div>

      <h4 className="mb-1">{ticket.title}</h4>
      <hr className="h-px  border-0 bg-page mb-2 "></hr>
      <p className="whitespace-pre-wrap">{ticket.description}</p>

      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs  my-1">{createdDateTime}</p>
          <ProgressDisplay progress={ticket.progress} />
        </div>
        <div className="ml-auto  flex items-end">
          <StatusDisplay status={ticket.status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
