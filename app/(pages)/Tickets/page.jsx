"use client"
import React, { useState, useEffect } from "react";
import TicketCard from "@/app/(components)/TicketCard";
import axios from "axios";
import TicketCardSkeleton from "@/app/(components)/TicketCardSkeleton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [categories, setCategories] = useState([]);
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

        setLoading(false);
      } catch (error) {
        toast.error("Error fetching data:", error);
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
    <div className="p-5 md:p-9">
      <ToastContainer />
      <div>
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <span className="mr-2">Filter by Status:</span>
            <select
              className="select select-error w-full rounded-sm border border-gray-300 p-2"
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
              className="select select-error w-full rounded-sm border border-gray-300 p-2"
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
              className="select select-error w-full rounded-sm border border-gray-300 p-2"
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
          
        </div>
        {loading ? <TicketCardSkeleton /> :
          (
            <>
              <div className="grid-cols-2 lg:grid xl:grid-cols-4">
                {filteredTickets.map((filteredTicket, index) => (
                  <TicketCard
                    id={index}
                    key={index}
                    ticket={filteredTicket}
                  />
                ))}
              </div>
              {tickets.length < "12" ? null : <div className="mt-4 flex justify-center">
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