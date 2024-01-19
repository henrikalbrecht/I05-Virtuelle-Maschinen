"use client"
// src/components/VmForm.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface FormData {
  hostname: string;
  project_name: string;
  contact_email: string;
  contact_name: string;
  
  // external_net: boolean;
  ip: string;
  operating_sys: string;
  allocationStage: string;
  // awarded_on: string;
}

const VmForm: React.FC = () => {
 

  const [formData, setFormData] = useState<FormData>({
    hostname: '',
    project_name: '',
    contact_name: '',
    contact_email: '',
    // external_net: false,
    ip: '',
    operating_sys: '',
    allocationStage: 'unassigned', // Default value
    // awarded_on: ''
  });

  // const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, awarded_on: e.target.value });
  // };


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Send a POST request to the Django backend API
      const response = await axios.post('http://127.0.0.1:8000/api/VM/', formData);
      console.log('VM allocated successfully:', response.data);
    } catch (error) {
      console.error('Error allocating VM:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen text-orange ">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-10 bg-white rounded-md shadow-md container_card ">
        <label htmlFor="hostname" className="block text-gray-700">
          Hostname:
        </label>
        <input
          type="text"
          id="hostname"
          name="hostname"
          value={formData.hostname}
          onChange={handleChange}
          required
          className="mt-1 p-2 border rounded-md w-full"
        />

        <label htmlFor="project_name" className="block text-gray-700 mt-4">
          Project Name:
        </label>
        <input
          type="text"
          id="project_name"
          name="project_name"
          value={formData.project_name}
          onChange={handleChange}
          required
          className="mt-1 p-2 border rounded-md w-full "
        />

        <label htmlFor="contact_name" className="block text-gray-700 mt-4">
         Contact Name:
        </label>
        <input
          type="text"
          id="contact_name"
          name="contact_name"
          value={formData.contact_name}
          onChange={handleChange}
          required
          className="mt-1 p-2 border rounded-md w-full"
        />

        <label htmlFor="contact_email" className="block text-gray-700 mt-4">
          Contact Email:
        </label>
        <input
          type="email"
          id="contact_email"
          name="contact_email"
          value={formData.contact_email}
          onChange={handleChange}
          required
          className="mt-1 p-2 border rounded-md w-full"
        />

        {/* <label htmlFor="external_net" className="block text-gray-700 mt-4">
          External Network:
        </label>
        <input
          type="checkbox"
          id="external_net"
          name="external_net"
          checked={formData.external_net}
          onChange={handleCheckboxChange}
          className="mt-1"
        /> */}

        <label htmlFor="ip" className="block text-gray-700 mt-4">
          IP Address:
        </label>
        <input
          type="text"
          id="ip"
          name="ip"
          value={formData.ip}
          onChange={handleChange}
          required
          className="mt-1 p-2 border rounded-md w-full"
        />

        <label htmlFor="operating_sys" className="block text-gray-700 mt-4">
          Operating System:
        </label>
        <select
          // type="text"
          id="operating_sys"
          name="operating_sys"
          value={formData.operating_sys}
          onChange={handleChange}
          required
          className="mt-1 p-2 border rounded-md w-full"
          >
          <option value="windows">Windows</option>
          <option value="linux">Linux</option>
          </select>

          {/* <label htmlFor="awarded_on" className="block text-gray-700 mt-4">
          Awarded On:
        </label>
        <input
          type="date"
          id="awarded_on"
          name="awarded_on"
          value={formData.awarded_on}
          onChange={handleDateChange}
          required
          className="mt-1 p-2 border rounded-md w-full"
        /> */}
        

        <label htmlFor="allocationStage" className="block text-gray-700 mt-4">
          Allocation Stage:
        </label>
        <select
          id="allocationStage"
          name="allocationStage"
          value={formData.allocationStage}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full"
        >
          <option value="unassigned">Unassigned</option>
          <option value="preparation">Preparation</option>
          <option value="in_use">In Use</option>
        </select>
        <div className='flex justify-center p-5'>
          <button type="submit" className="mt-4 p-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Allocate VM
          </button>
          


        </div>
        
      </form>
    </div>
  );
};

export default VmForm;