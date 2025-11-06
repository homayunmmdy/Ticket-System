"use client";
import CategoryTable from "@/app/components/CategoryTable";
import Container from "@/app/components/Container";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Category = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/Category", {
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
        const response = await axios.get(`/api/Category`);
        setData(response.data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Container>
      <ToastContainer />
      <div className="my-4 rounded-xl border-2 border-base-300 px-4 py-4 md:px-8 md:py-7 ">
        <div className="items-center justify-between sm:flex">
          <div className="flex items-center">
            <div className="rounded-full focus:bg-red-50 focus:outline-hidden focus:ring-2 focus:ring-red-800" href=" javascript:void(0)">
              <div className="rounded-full bg-red-100 px-8 py-2 text-red-700">
                <p>Categories</p>
              </div>
            </div>
          </div>
          <button className="mt-4 inline-flex items-start justify-start rounded-sm bg-red-700 px-6 py-3 hover:bg-red-600 focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:ring-offset-2 sm:mt-0" onClick={() => document.getElementById('my_modal_2').showModal()}><p className="text-sm font-medium leading-none text-white">Add Category</p></button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <form className="flex gap-5" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="input input-bordered input-info"
                  placeholder="Enter your category Name"
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
          <CategoryTable />
        </div>
      </div>
    </Container>
  );
};

export default Category;