"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
    status: "open",
    startTime: "",
    endTime: "",
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["body"] = ticket.body;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
    startingTicketData["startTime"] = ticket.startTime;
    startingTicketData["endTime"] = ticket.endTime;
  }

  const [formData, setFormData] = useState(startingTicketData);
  const [categories, setCategories] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/Category');
        setCategories(response.data.data);
      } catch (error) {
        toast.error("Error fetching categories");
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

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
    setIsSubmitting(true);

    try {
      if (EDITMODE) {
        const res = await fetch(`/api/Tickets/${ticket._id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ formData }),
        });
        const data = await res.json();
        
        if (!res.ok) {
          toast.error("Failed to update ticket");
          throw new Error("Failed to update ticket");
        }
        toast.success(data.message);
      } else {
        const res = await fetch("/api/Tickets", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ formData }),
        });
        const data = await res.json();
        
        if (!res.ok) {
          toast.error("Failed to create ticket");
          throw new Error("Failed to create ticket");
        }
        toast.success(data.message);
      }

      router.push("/Tickets");
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const priorityLevels = [
    { value: 1, label: "Low", color: "bg-green-100 border-green-300 text-green-800" },
    { value: 2, label: "Medium-Low", color: "bg-blue-100 border-blue-300 text-blue-800" },
    { value: 3, label: "Medium", color: "bg-yellow-100 border-yellow-300 text-yellow-800" },
    { value: 4, label: "High", color: "bg-orange-100 border-orange-300 text-orange-800" },
    { value: 5, label: "Critical", color: "bg-red-100 border-red-300 text-red-800" }
  ];

  const statusOptions = [
    { value: "open", label: "Open", icon: "🆕" },
    { value: "started", label: "In Progress", icon: "⚙" },
    { value: "delay", label: "Delayed", icon: "⏸" },
    { value: "done", label: "Completed", icon: "✅" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-pink-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white">
              {EDITMODE ? "✏ Edit Ticket" : "🎫 Create New Ticket"}
            </h1>
            <p className="text-red-50 mt-2">
              {EDITMODE ? "Update your ticket information" : "Fill in the details to create a new ticket"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            {/* Basic Information Section */}
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-red-500 pl-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Title */}
                <div className="lg:col-span-2">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleChange}
                    required={true}
                    value={formData.title}
                    placeholder="Enter ticket title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 outline-none"
                  />
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 outline-none bg-white"
                  >
                    <option value="">Select a category</option>
                    {categories?.map((category) => (
                      <option key={category._id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Status */}
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 outline-none bg-white"
                  >
                    {statusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.icon} {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Start Time */}
                <div>
                  <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Start Time
                  </label>
                  <input
                    id="startTime"
                    name="startTime"
                    type="datetime-local"
                    onChange={handleChange}
                    value={formData.startTime}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 outline-none"
                  />
                </div>

                {/* End Time */}
                <div>
                  <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-2">
                    End Time
                  </label>
                  <input
                    id="endTime"
                    name="endTime"
                    type="datetime-local"
                    onChange={handleChange}
                    value={formData.endTime}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 outline-none"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  onChange={handleChange}
                  value={formData.description}
                  rows="4"
                  placeholder="Provide a brief description..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 outline-none resize-none"
                />
              </div>

              {/* Body */}
              <div>
                <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-2">
                  Detailed Information
                </label>
                <textarea
                  id="body"
                  name="body"
                  onChange={handleChange}
                  value={formData.body}
                  rows="6"
                  placeholder="Add detailed information about the ticket..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 outline-none resize-none"
                />
              </div>
            </div>

            {/* Priority Section */}
            <div className="mb-8">
              <div className="border-l-4 border-red-500 pl-4 mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Priority Level</h2>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {priorityLevels.map((level) => (
                  <label
                    key={level.value}
                    className={`relative flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      formData.priority == level.value
                        ? `${level.color} border-current shadow-md scale-105`
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    <input
                      type="radio"
                      name="priority"
                      value={level.value}
                      checked={formData.priority == level.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">{level.value}</div>
                      <div className="text-xs font-medium">{level.label}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Progress Section */}
            <div className="mb-8">
              <div className="border-l-4 border-red-500 pl-4 mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Progress</h2>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor="progress" className="text-sm font-medium text-gray-700">
                    Completion
                  </label>
                  <span className="text-2xl font-bold text-red-600">{formData.progress}%</span>
                </div>
                
                <input
                  type="range"
                  id="progress"
                  name="progress"
                  value={formData.progress}
                  min="0"
                  max="100"
                  onChange={handleChange}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                  style={{
                    background: `linear-gradient(to right, #dc2626 0%, #dc2626 ${formData.progress}%, #e5e7eb ${formData.progress}%, #e5e7eb 100%)`
                  }}
                />
                
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 justify-end pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => router.push("/Tickets")}
                className="px-6 py-3 border cursor-pointer border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-linear-to-r cursor-pointer from-red-500 to-pink-600 text-white font-medium rounded-lg hover:from-red-600 hover:to-pink-700 focus:ring-4 focus:ring-red-300 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  EDITMODE ? "Update Ticket" : "Create Ticket"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTicketForm;
