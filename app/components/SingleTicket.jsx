"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

const SingleTicket = () => {
  const pathname = usePathname();
  const id = pathname.slice(9);
  const [ticket, setTicket] = useState();

useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await axios.get(`/api/Tickets/${id}`);
        setTicket(response.data.data);
      } catch (error) {
        console.error("Error fetching ticket:", error);
      }
    };

    fetchTicket();
  }, [id]);

  return ticket;
};

export default SingleTicket;