"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditTicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id === "new" ? false : true;
  const router = useRouter();
  const startingTicketData = {
    title: "",
    description: "",
    body: "",
    priority: 1,
    progress: 0,
    status: "not started",
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["body"] = ticket.body;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
    startingTicketData["website"] = ticket.website;
  }

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      const data = await res.json();
      toast.success(data.message);
      if (!res.ok) {
        toast.error("Failed to update ticket");
        throw new Error("Failed to update ticket");
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        //@ts-ignore
        "Content-Type": "application/json",
      });
      const data = await res.json();
      toast.success(data.message);
      if (!res.ok) {
        toast.error("Failed to create ticket");
        throw new Error("Failed to create ticket");
      }
    }
   
    router.push("/Tickets");
    router.refresh();
  };

  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`/api/Category`);
        setCategories(response.data.categories);
      } catch (error) {
        toast.error("Error fetching categories:", error);
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const [websites, setwebsites] = useState();

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        const response = await axios.get(`/api/Website`);
        setwebsites(response.data.websites);
      } catch (error) {
        toast.error("Error fetching websites:", error);
        console.error("Error fetching websites:", error);
      }
    };

    fetchWebsites();
  }, []);

  return (
    <div className=" flex justify-center">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-[90%] md:w-[70%]"
      >
        <h3 className="text-center font-semibold text-2xl">{EDITMODE ? "Update Your Ticket" : "Create New Ticket"}</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
          className="input input-bordered input-error"
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          value={formData.description}
          rows="5"
          className="textarea textarea-error"
        />
        <label>Body</label>
        <textarea
          id="body"
          name="body"
          onChange={handleChange}
          value={formData.body}
          rows="7"
          className="textarea textarea-error"
        />
        <label>Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="select select-error w-full"
        >
          {categories?.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <label>website</label>
        <select
          id="website"
          name="website"
          className="select select-error w-full"
          value={formData.website}
          onChange={handleChange}
        >
          {websites?.map((website) => (
            <option key={website._id} value={website.name}>
              {website.name}
            </option>
          ))}
        </select>
        <label>Priority</label>
        <div className="flex gap-2">
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
            className="radio radio-error"
          />
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
            className="radio radio-error"
          />
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
            className="radio radio-error"
          />
          <label>3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
            className="radio radio-error"
          />
          <label>4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
            className="radio radio-error"
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
          className="bg-red-600 h-2.5 rounded-full" />
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}
          className="select select-error w-full"
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="delay">delay</option>
          <option value="done">Done</option>
        </select>
        <div className="flex justify-center">
          <input
            type="submit"
            className="btn max-w-xs btn-outline btn-error"
            value={EDITMODE ? "Update Ticket" : "Create Ticket"}
          />
        </div>
      </form>
    </div>
  );
};

export default EditTicketForm;
