"use client";

import FormattedTimestamp from "@/app/(components)/FormattedTimestamp";
import PriorityDisplay from "@/app/(components)/PriorityDisplay";
import ProgressDisplay from "@/app/(components)/ProgressDisplay";
import SingleTicket from "@/app/(components)/SingleTicket";
import StatusDisplay from "@/app/(components)/StatusDisplay";


const SingleTicketPage = () => {
  const ticket = SingleTicket();
  if (!ticket) {
    return <h1>No Ticket</h1>
  }
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-base-200 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-400">{ticket.title}</h1>
            <p className="text-xs  text-center my-3"><FormattedTimestamp timestamp={ticket.createdAt} options={options} /></p>
          </div>
        </div>
        <div className="py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 px-4">
            <div className="flex flex-col gap-4 justify-center items-center">
                <PriorityDisplay priority={ticket.priority} />
                <div className="w-[25%]">
                  <StatusDisplay status={ticket.status} />
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/4 px-4">
              <div className="my-3">
                <ProgressDisplay progress={ticket.progress} />
              </div>
              {ticket.description}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTicketPage;