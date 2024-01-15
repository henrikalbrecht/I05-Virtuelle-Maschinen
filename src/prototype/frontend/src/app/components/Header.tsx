"use client"
// src/components/Header.tsx
import React from 'react';
import Head from 'next/head';

const Header: React.FC = () => {
  return (
    <>
      <Head>
        <title>VM Management</title>
      </Head>
      <header className="md:sticky top-10 flex justify-center">
        <h1 className="text-3xl font-bold text-center">VM Management</h1>
      </header>
    </>
  );
};

export default Header;