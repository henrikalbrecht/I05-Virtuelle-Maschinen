"use client"
// src/components/VmForm.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface FormData {
  dns_name: string;
  team_id: string;
  team_name: string;
  team_email: string;
  external_net: boolean;
  ip: string;
  operating_sys: string;
  allocationStage: string;
}

const VmForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    dns_name: '',
    team_id: '',
    team_name: '',
    team_email: '',
    external_net: false,
    ip: '',
    operating_sys: '',
    allocationStage: 'unassigned', // Default value
  });

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
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <label htmlFor="dns_name" className="block text-gray-700">
          DNS Name:
        </label>
        <input
          type="text"
          id="dns_name"
          name="dns_name"
          value={formData.dns_name}
          onChange={handleChange}
          required
          className="mt-1 p-2 border rounded-md w-full"
        />

        <label htmlFor="team_id" className="block text-gray-700 mt-4">
          Team ID:
        </label>
        <input
          type="text"
          id="team_id"
          name="team_id"
          value={formData.team_id}
          onChange={handleChange}
          required
          className="mt-1 p-2 border rounded-md w-full"
        />

        <label htmlFor="team_name" className="block text-gray-700 mt-4">
          Team Name:
        </label>
        <input
          type="text"
          id="team_name"
          name="team_name"
          value={formData.team_name}
          onChange={handleChange}
          required
          className="mt-1 p-2 border rounded-md w-full"
        />

        <label htmlFor="team_email" className="block text-gray-700 mt-4">
          Team Email:
        </label>
        <input
          type="email"
          id="team_email"
          name="team_email"
          value={formData.team_email}
          onChange={handleChange}
          required
          className="mt-1 p-2 border rounded-md w-full"
        />

        <label htmlFor="external_net" className="block text-gray-700 mt-4">
          External Network:
        </label>
        <input
          type="checkbox"
          id="external_net"
          name="external_net"
          checked={formData.external_net}
          onChange={handleCheckboxChange}
          className="mt-1"
        />

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
        <input
          type="text"
          id="operating_sys"
          name="operating_sys"
          value={formData.operating_sys}
          onChange={handleChange}
          required
          className="mt-1 p-2 border rounded-md w-full"
        />

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

        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Allocate VM
        </button>
      </form>
    </div>
  );
};

export default VmForm;
