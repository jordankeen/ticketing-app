"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
   // default form state
   const startingTicketData = {
      title: "",
      description: "",
      priority: 1,
      progress: 0,
      status: "not started",
      category: "Hardware Problem",
   };

   const [formData, setFormData] = useState(startingTicketData);

   const handleChange = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setFormData((prevState) => ({
         ...prevState,
         [name]: value,
      }));
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('submitted');
   }

   return (
      <div className="flex justify-center">
         <form
            className="flex flex-col gap-3 w-1/2"
            method="post"
            onSubmit={handleSubmit}
         >
            <h3>Create Your Ticket</h3>
            <label htmlFor="title">Title</label>
            <input
               id="title"
               name="title"
               type="text"
               onChange={handleChange}
               required={true}
               value={formData.title}
            />
            <label htmlFor="description">Description</label>
            <textarea
               id="description"
               name="description"
               onChange={handleChange}
               required={true}
               value={formData.description}
               rows="5"
            />
            <label htmlFor="category">Category</label>
            <select
               name="category"
               id="category"
               value={formData.category}
               onChange={handleChange}
            >
               <option value="Hardware Problem">Hardware Problem</option>
               <option value="Software Problem">Software Problem</option>
               <option value="Project">Project</option>
            </select>
            <label htmlFor="priority">Priority</label>
            <div>
               <input
                  id="priority-1"
                  name="priority"
                  type="radio"
                  onChange={handleChange}
                  value={1}
                  checked={formData.priority == 1}
               />
               <label>1</label>
            </div>
         </form>
      </div>
   );
};

export default TicketForm;
