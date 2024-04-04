"use client"
import React, { useState, useEffect } from "react";
import TicketCard from "@/app/(components)/TicketCard";
import axios from "axios";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ticketResponse = await axios.get(`/api/Tickets`);
        setTickets(ticketResponse.data.tickets);
        setFilteredTickets(ticketResponse.data.tickets);

        const categoryResponse = await axios.get(`/api/Category`);
        setCategories(categoryResponse.data.categories);

        const websiteResponse = await axios.get(`/api/Website`);
        setWebsites(websiteResponse.data.websites);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (filterType, value) => {
    let filtered;
    if (filterType === "status") {
      filtered = value === "all" ? tickets : tickets.filter((ticket) => ticket.status === value);
    } else if (filterType === "priority") {
      filtered = tickets.filter((ticket) => ticket.priority === parseInt(value));
    } else if (filterType === "category") {
      filtered = value === "all" ? tickets : tickets.filter((ticket) => ticket.category === value);
    } else if (filterType === "website") {
      filtered = value === "all" ? tickets : tickets.filter((ticket) => ticket.website === value);
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
              <option value="not started">Not Started</option>
              <option value="started">Started</option>
              <option value="delay">Delay</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="flex">
            <span className="mr-2">Filter by Priority:</span>
            <select
              className="p-2 border border-gray-300 rounded"
              onChange={(e) => handleFilterChange("priority", e.target.value)}
            >
              {[1, 2, 3, 4, 5].map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
          </div>
          <div className="flex">
            <span className="mr-2">Filter by Category:</span>
            <select
              className="p-2 border border-gray-300 rounded"
              onChange={(e) => handleFilterChange("category", e.target.value)}
            >
              <option value="all">All</option>
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex">
            <span className="mr-2">Filter by Website:</span>
            <select
              className="p-2 border border-gray-300 rounded"
              onChange={(e) => handleFilterChange("website", e.target.value)}
            >
              <option value="all">All</option>
              {websites.map((website) => (
                <option key={website._id} value={website.name}>
                  {website.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <h1 className="text-3xl text-center">Available Tickets {filteredTickets.length}</h1>
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

