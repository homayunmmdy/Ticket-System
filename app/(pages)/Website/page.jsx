"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteBlock from "@/app/(components)/DeleteBlock";

const WebsitePage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

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
        setMessage(data.message);
        setName("");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
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
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Website"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">اضافه کردن</button>
      </form>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>قسمت</th>
              <th>حذف</th>
            </tr>
          </thead>
          {data?.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>{item.name}</td>
                <td>
                  <DeleteBlock path="Website" id={item._id} />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default WebsitePage;