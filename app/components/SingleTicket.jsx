"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

const SingleTicket = () => {
  const pathname = usePathname();
  const id = pathname.slice(9);
  const [ticket, setTicket] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/Tickets/${id}`);
        setTicket(response.data.document);
      } catch (error) {
        console.error("Error fetching ticket:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTicket();
  }, [id]);

  return { ticket, loading };
};

export default SingleTicket;