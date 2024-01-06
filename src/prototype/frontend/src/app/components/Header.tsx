"use client"
// src/components/Header.tsx
import React from 'react';
// import  Link  from "next/link";
// import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="md:sticky top-10 flex justify-center">

      {/* <div className=" flex items-start text-[#FFFF]">

        <Link href="#hero" className="menuList">    <Image
        src="https://www.htw-dresden.de/typo3conf/ext/xm_templates_htw/Resources/Public/theme/utils/logo/assets/dist/logo--image.png"
        alt="Logo"
        width={300}
        height={100}
        className="w-20 md:w-76"   
    
      /></Link>

      </div> */}
      <h1 className="text-3xl font-bold text-center">VM Management</h1>
    </header>
  );
};

export default Header;