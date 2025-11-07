"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

const Statistic = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const ticketResponse = await axios.get(`/api/Tickets`);
            setTickets(ticketResponse.data.data);
    
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
    return (
        <div className="py-16 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-base-50 uppercase rounded-full bg-teal-accent-400">
                        Brand new
                    </p>
                </div>
                <h2 className="text-center max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-base-50 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="d5589eeb-3fca-4f01-ac3e-983224745704"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">The</span>
                    </span>{' '}
                    New way of managing your tickets
                </h2>
                <p className="text-base text-base-50 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
            </div>
            <div className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border rounded-sm lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative flex justify-around flex-col items-center h-full py-10 duration-300 base-300 rounded-xs transition-color sm:items-stretch sm:flex-row">
                    <div className="px-12 py-8 text-center">
                        <h6 className="text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
                            {tickets.length}
                        </h6>
                        <p className="text-center md:text-base">
                            Avaliable Tickets.
                        </p>
                    </div>
                    <div className="w-56 h-1 transition duration-300 transform bg-gray-300 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-1" />
                    <div className="px-12 py-8 text-center">
                        <h6 className="text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
                            1K 
                        </h6>
                        <p className="text-center md:text-base">
                            Active User.
                        </p>
                    </div>
                </div>
            </div>
            <p className="mx-auto mb-4 text-base-50 sm:text-center lg:max-w-2xl lg:mb-6 md:px-16">
            this simple and easy to use and understand ticket-system is good for the small and even big companies to mangae their tickets 
            </p>
        </div>
    )
}

export default Statistic