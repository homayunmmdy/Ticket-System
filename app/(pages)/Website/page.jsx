"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteBlock from "@/app/(components)/DeleteBlock";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Website = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/Website", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setName("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/Website`);
        setData(response.data.websites);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <ToastContainer />
      <div className="sm:px-6 w-full">
        <div className="bg-base-300 rounded-xl py-4 md:py-7 my-4 px-4 md:px-8 xl:px-10">
          <div className="sm:flex items-center justify-between">
            <div className="flex items-center">
              <div className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800" href=" javascript:void(0)">
                <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                  <p>Websites</p>
                </div>
              </div>
            </div>
            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded" onClick={() => document.getElementById('my_modal_2').showModal()}><p className="text-sm font-medium leading-none text-white">Add Website</p></button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <form className="flex gap-5" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="input input-bordered input-info"
                    placeholder="Enter your Website Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <button className="btn btn-info" type="submit">Submit</button>
                </form>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full ">
              <tbody >
                {data?.map((item) => (
                  <tr tabindex="0" key={item.id} className="focus:outline-none h-16 border border-gray-100 rounded">
                    <td className="">
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-white mr-2">{item.name}</p>
                      </div>
                    </td>
                    <td className="pl-4">
                      <DeleteBlock path="Website" id={item._id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;