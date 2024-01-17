"use client"
// src/App.tsx
import React, { useState } from 'react';
import VmForm from './components/VmForm';
import VmList from './components/VmLists';
import Header from './components/Header';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('allocation');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandotory 
    overflow-scroll overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#005a60]'>
      
      {/* Header */}
      <Header /> 
      {currentPage === 'allocation' ? (
        <div className=''>
          <VmForm />
          <button onClick={() => handleNavigate('allocated')} className=" bg-blue-500 text-white p-2 rounded-md mt-4">View VMs</button>
        </div>
      ) : (
        <div>
          <VmList />
          <button onClick={() => handleNavigate('allocation')} className="bg-gray-500 text-white p-2 rounded-md mt-4">Back to Allocation</button>
        </div>
      )}
    </div>
  );
}

export default App;
