"use client"
// src/components/VmList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface VM {
  id: number;
  dns_name: string;
  team_name: string;
}

const VmList: React.FC = () => {
  const [allocatedVMs, setAllocatedVMs] = useState<VM[]>([]);

  useEffect(() => {
    // Fetch allocated VMs from the backend on component mount
    const fetchAllocatedVMs = async () => {
      try {
        const response = await axios.get<VM[]>('http://127.0.0.1:8000/api/VM/');
        setAllocatedVMs(response.data);
      } catch (error) {
        console.error('Error fetching allocated VMs:', error);
      }
    };

    fetchAllocatedVMs();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      // Send a DELETE request to the Django backend API
      await axios.delete(`http://127.0.0.1:8000/api/VM/${id}/`);
      // Remove the deleted VM from the local state
      setAllocatedVMs((prevVMs) => prevVMs.filter((vm) => vm.id !== id));
      console.log('VM deleted successfully:', id);
    } catch (error) {
      console.error('Error deleting VM:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-4 p-6 bg-white rounded-md shadow-md text-black">
      <h2 className="text-2xl font-bold mb-4">Allocated VMs</h2>
      <ul>
        {allocatedVMs.map((vm) => (
          <li key={vm.id} className="flex justify-between items-center border-b py-2">
            <span>{vm.dns_name} - {vm.team_name}</span>
            <button onClick={() => handleDelete(vm.id)} className="bg-red-500 text-white p-2 rounded-md">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VmList;
