'use client'
// src/components/Footer.tsx
import React from 'react';


interface FooterProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, currentPage }) => {
  return (
    <footer className="flex justify-center mt-4 p-4">
      

      
      {currentPage === 'allocation' ? (
        <button onClick={() => onNavigate('allocated')} className="bg-blue-500 text-white p-4 rounded-md">
          View VMs
        </button>
      ) : (
        <button onClick={() => onNavigate('allocation')} className="bg-gray-500 text-white p-2 rounded-md">
          Back to Allocation
        </button>
      )}


    </footer>
  );
};

export default Footer;
