"use client"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Link from "next/link";
import { GiTicket } from "react-icons/gi";

const RecentTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [recentSize] = useState(-5);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const postResponse = await axios.get(`/api/Tickets`);
                setTickets(postResponse.data.tickets.slice(recentSize));
                setLoading(false)
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false)
            }
        };

        fetchData();
    }, [recentSize]);

    return (
        <>
            <div className="bg-base-100 p-4 rounded-3xl">
                <h2 className="text-xl font-bold  my-4 text-center">Recent Tickets</h2>
                <ul className="list-none">
                    {loading ? (
                        <>
                            <li class="flex p-2 gap-2 items-center border-dotted border-b-2 border-gray-400 hover:border-gray-900 hover:border-solid">
                                <GiTicket color='#398DEF' size={25} />
                                <div className="skeleton h-5 w-full my-4"></div>
                            </li>
                            <li class="flex p-2 gap-2 items-center border-dotted border-b-2 border-gray-400 hover:border-gray-900 hover:border-solid">
                                <GiTicket color='#398DEF' size={25} />
                                <div className="skeleton h-5 w-full my-4"></div>
                            </li>
                            <li class="flex p-2 gap-2 items-center border-dotted border-b-2 border-gray-400 hover:border-gray-900 hover:border-solid">
                                <GiTicket color='#398DEF' size={25} />
                                <div className="skeleton h-5 w-full my-4"></div>
                            </li>
                            <li class="flex p-2 gap-2 items-center border-dotted border-b-2 border-gray-400 hover:border-gray-900 hover:border-solid">
                                <GiTicket color='#398DEF' size={25} />
                                <div className="skeleton h-5 w-full my-4"></div>
                            </li>
                        </>
                    ) : (
                        <div class="grid grid-cols-1  gap-y-5 gap-x-3 items-start ">
                            {tickets?.map((ticket) => (
                                <Link href={`/Tickets/${ticket._id}`} >
                                    <li class="flex p-2 gap-2 items-center border-dotted border-b-2 border-gray-400 hover:border-gray-900 hover:text-red-600 hover:border-solid">
                                        <GiTicket color='#D71F1E' size={25} />
                                        {ticket.title}
                                    </li>
                                </Link>
                            ))}
                        </div>
                    )}
                </ul>
            </div>



        </>
    )
}

export default RecentTickets