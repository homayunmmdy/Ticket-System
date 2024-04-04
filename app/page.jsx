import React from "react";
import TicketCard from "@/app/(components)/TicketCard";

const getTickets = async () => {
  const API_URL = process.env.API_URL;
  try {
    const res = await fetch(`${API_URL}/api/Tickets`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const Dashboard = async () => {
  const data = await getTickets();

  // Make sure we have tickets needed for production build.
  if (!data?.tickets) {
    return <p>No tickets.</p>;
  }

  const tickets = data.tickets;


  return (
    <div className="p-5">
      <div>
        {tickets &&
          <div className="mb-4">
            <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
              {tickets.map((filteredTicket, _index) => (
                <TicketCard
                  id={_index}
                  key={_index}
                  ticket={filteredTicket}
                />
              ))}
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Dashboard;