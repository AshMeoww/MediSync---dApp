import React from 'react'
import { useState, useEffect } from 'react';
import { GoHomeFill } from "react-icons/go";
import { IoDocumentText, IoPeopleSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { RiBookletFill } from "react-icons/ri";
import Link from "next/link";
import Image from 'next/image';
// Dashboard
// Medical Record 
// Access Control
// Appointments 
// Logs

type LinkItem = {
  name: string;
  id: string;
  icon: React.ReactElement;
  onClick?: () => void;
};  

interface SideNavProps {
  onTabChange?: (tab: string) => void;
}

function SideNav({ onTabChange }: SideNavProps) {
  const [currentSection, setCurrentSection] = useState("dashboard");

  const clickToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    
    // Call the onTabChange prop if provided
    if (onTabChange) {
      if (sectionId === "medicalrecord") {
        onTabChange("records");
      } else {
        onTabChange(sectionId);
      }
    }
    
    // Scroll to section if it exists
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links: LinkItem[] = [
    { name: "Dashboard", id: "dashboard", icon: <GoHomeFill className="text-[#13505B]" /> },
    { name: "Medical Records", id: "medicalrecord", icon: <IoDocumentText className="text-[#13505B]" /> },
    { name: "Access Control", id: "accesscontrol", icon: <IoPeopleSharp className="text-[#13505B]" /> },
    { name: "Appointments", id: "appointments", icon: <FaCalendarAlt className="text-[#13505B]" /> },
    { name: "Logs", id: "logs", icon: <RiBookletFill className="text-[#13505B]" /> },
  ];

  return (
    <div className="absolute left-0 box-border flex h-screen w-fit shadow-lg">
      <header className=" flex flex-col sidebar w-full justify-normal shrink-0 text-white p-10">
        <Image
          src="/images/MediSync.png"
          quality={100}
          width={200}
          height={100}
          alt="Logo"
          className="max-w-full h-auto mt-5 self-center border-b-1 pb-2 border-black"
        />
        <ul className="flex flex-col gap-y-2 justify-between mt-5 text-xl font-bold">
          {links
            .filter((link) => link.name !== "")
            .map((link, index) => (
              <li
                key={link.id}
                className={`hover:bg-[#b1d0d748] hover:text-white rounded px-5 ${
                  currentSection === link.id ? "bg-[#b1d0d7]" : ""
                }`}
              >
                <button
                  onClick={() => clickToSection(link.id)}
                  className="p-2 inline-flex items-center space-x-2 w-full text-left"
                >
                  {link.icon}
                  <span className='text-[#13505B]'>{link.name}</span>
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  )
}

export default SideNav