"use client"
import React, { useState, useEffect } from "react";
import TicketCard from "@/app/(components)/TicketCard";
import axios from "axios"



const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(`/api/Tickets`);
        setTickets(response.data.tickets);
        setFilteredTickets(response.data.tickets); // Initially set filtered tickets to all tickets
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  const handleFilterChange = (filterType, value) => {
    let filtered;
    if (filterType === "status") {
      if (value === "all") {
        filtered = tickets;
      } else {
        filtered = tickets.filter((ticket) => ticket.status === value);
      }
    } else if (filterType === "priority") {
      filtered = tickets.filter((ticket) => ticket.priority === parseInt(value));
    }
    setFilteredTickets(filtered);
  };

  return (
    <div className="p-5">
      <div>
        <div className="flex justify-between mb-4">
          <div className="flex">
            <span className="mr-2">Filter by Status:</span>
            <select
              className="p-2 border border-gray-300 rounded"
              onChange={(e) => handleFilterChange("status", e.target.value)}
            >
            <option value="all">All</option>
              <option value="not started">not started</option>
              <option value="started">started</option>
              <option value="delay">delay</option>
              <option value="done">done</option>
            </select>
          </div>
          <div className="flex">
            <span className="mr-2">Filter by Priority:</span>
            <select
              className="p-2 border border-gray-300 rounded"
              onChange={(e) => handleFilterChange("priority", e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <h1 className="text-3xl text-center">Avaliable Tickets {filteredTickets.length}</h1>
        <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
          {filteredTickets.map((filteredTicket, index) => (
            <TicketCard
              id={index}
              key={index}
              ticket={filteredTicket}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

