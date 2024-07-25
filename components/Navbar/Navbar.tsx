"use client";
import Link from "next/link";
import { useState } from "react";
import NavItems from "./NavItems";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-20 flex justify-center items-center">
      <div className="bg-gray-200 w-11/12 h-16 flex justify-between items-center rounded-lg shadow-lg relative px-4">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={50}
          height={50}
          className="scale-fade-in-animation hover-spin"
        />
        <div className="flex gap-6 font-poppins text-sm text-gray-800 mr-4">
          {NavItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link href={item.href}>
                <p className="cursor-pointer no-underline zoom-in-on-hover text-gray-800 hover:text-pink-900 transition-colors duration-300 flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                  {item.submenu && (
                    <FaChevronDown className="ml-1 w-3 h-3 transform transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </p>
              </Link>
              {item.submenu && (
                <div className="absolute mt-6 w-40 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.submenu.map((subItem, subIndex) => (
                    <Link href={subItem.href} key={subIndex}>
                      <p className="flex gap-2 px-4 py-4 cursor-pointer no-underline zoom-in-on-hover text-gray-800 hover:text-pink-900 transition-colors duration-300 items-center hover:bg-gray-200">
                        {subItem.name}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
