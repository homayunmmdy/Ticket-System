"use client";

import SingleTicket from "@/app/(components)/SingleTicket";


const SingleTicketPage = () => {
  const ticket = SingleTicket();
  if (!ticket) {
    return <h1>No Ticket</h1>
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="bg-base-200 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-400">{ticket.title}</h1>
          </div>
        </div>
        <div className="py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 px-4">
            </div>
            <div className="w-full md:w-3/4 px-4">
             {ticket.description}
              
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTicketPage;