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
      <header className="md:sticky top-10 flex justify-between p-6">
      <img
          src="https://www.htw-dresden.de/typo3conf/ext/xm_templates_htw/Resources/Public/theme/utils/logo/assets/dist/logo--image.png"
          alt="HTW Dresden Logo"
          className="w-10rem h-10 mr-2"  
        />
        <h1 className="text-3xl font-bold text-center">VM Management</h1>
      </header>
    </>
  );
};

export default Header;