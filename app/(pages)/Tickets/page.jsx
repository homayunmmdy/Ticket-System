"use client"
import React, { useState, useEffect } from "react";
import TicketCard from "@/app/(components)/TicketCard";
import axios from "axios";
import TicketCardSkeleton from "@/app/(components)/TicketCardSkeleton";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const ticketResponse = await axios.get(`/api/Tickets`);
        setTickets(ticketResponse.data.tickets);
        setFilteredTickets(ticketResponse.data.tickets.slice(0, pageSize));

        const categoryResponse = await axios.get(`/api/Category`);
        setCategories(categoryResponse.data.categories);

        const websiteResponse = await axios.get(`/api/Website`);
        setWebsites(websiteResponse.data.websites);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pageSize]);

  const handleFilterChange = (filterType, value) => {
    setLoading(true)
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
    setFilteredTickets(filtered.slice(0, pageSize));
    setLoading(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = pageNumber * pageSize;
    setFilteredTickets(tickets.slice(startIndex, endIndex));
  };

  return (
    <div className="p-2 md:p-5">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   xl:grid-cols-4 gap-4 mb-4">
          <div className="flex flex-col gap-3">
            <span className="mr-2">Filter by Status:</span>
            <select
              className="select select-error w-full p-2 border border-gray-300 rounded"
              onChange={(e) => handleFilterChange("status", e.target.value)}
            >
              <option value="all">All</option>
              <option value="not started">Not Started</option>
              <option value="started">Started</option>
              <option value="delay">Delay</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <span className="mr-2">Filter by Priority:</span>
            <select
              className="select select-error w-full p-2 border border-gray-300 rounded"
              onChange={(e) => handleFilterChange("priority", e.target.value)}
            >
              {[1, 2, 3, 4, 5].map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <span className="mr-2">Filter by Category:</span>
            <select
              className="select select-error w-full p-2 border border-gray-300 rounded"
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
          <div className="flex flex-col gap-3">
            <span className="mr-2">Filter by Website:</span>
            <select
              className="select select-error w-full p-2 border border-gray-300 rounded"
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
        {loading ? <TicketCardSkeleton /> :
          (
            <>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {filteredTickets.map((filteredTicket, index) => (
                  <TicketCard
                    id={index}
                    key={index}
                    ticket={filteredTicket}
                  />
                ))}
              </div>
              {tickets.length < "12" ? null : <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(tickets.length / pageSize) }, (_, i) => (
                  <button
                    key={i}
                    className={`mx-1 p-2 border ${currentPage === i + 1 ? "bg-red-700 text-white" : "border-red-500"
                      } rounded`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>}
            </>
          )
        }
      </div>
    </div>
  );
};

export default Tickets;