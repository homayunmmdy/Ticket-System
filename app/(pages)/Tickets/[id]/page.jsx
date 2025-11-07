"use client";

import Container from "@/app/components/Container";
import FormattedTimestamp from "@/app/components/FormattedTimestamp";
import PriorityDisplay from "@/app/components/PriorityDisplay";
import ProgressDisplay from "@/app/components/ProgressDisplay";
import RecentTickets from "@/app/components/RecentTickets";
import SingleTicket from "@/app/components/SingleTicket";
import StatusDisplay from "@/app/components/StatusDisplay";
import Link from "next/link";


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
        <div className="bg-base-300 shadow-2xl py-8">
          <Container>
            <h1 className="text-4xl text-center font-extrabold bg-clip-text text-transparent bg-linear-to-r from-amber-500 to-red-400">{ticket.title}</h1>
            <p className="text-xs  text-center my-3"><FormattedTimestamp timestamp={ticket.createdAt} options={options} /></p>
          </Container>
        </div>
        <div className="py-8">
          <Container className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 px-4">
              <div className="flex flex-col gap-4 justify-center items-center mb-2">
                <Link className="btn btn-outline btn-error" href="/Tickets">Back Tickets</Link>
                <PriorityDisplay priority={ticket.priority} />
                <div className="w-[40%]">
                  <StatusDisplay status={ticket.status} />
                </div>
              </div>
              <RecentTickets />
            </div>
            <div className="w-full md:w-3/4 px-4">
              <div className="my-3">
                <ProgressDisplay progress={ticket.progress} />
              </div>
              <p className="py-3 text-lg leading-7">
                {ticket.description}
              </p>
              <p lassName="text-lg leading-7">
                {ticket.body}
              </p>
            </div>

          </Container>
        </div>
      </div>
    </>
  );
};

export default SingleTicketPage;