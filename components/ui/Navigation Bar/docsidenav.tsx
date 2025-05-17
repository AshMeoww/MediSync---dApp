import React from 'react'
import { useState, useEffect } from 'react';
import { GoHomeFill } from "react-icons/go";
import { IoDocumentText, IoPeopleSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Image from 'next/image';
import { AuthContext } from '@/app/auth-context';
import { useContext } from 'react';

type LinkItem = {
  name: string;
  id: string;
  icon: React.ReactElement;
  onClick?: () => void;
};  

interface SideNavProps {
  onTabChange?: (tab: string) => void;
}

function SideNav() {
  const router = useRouter();
  const { logout } = useContext(AuthContext);
  const [currentSection, setCurrentSection] = useState("");

  const clickToSection = (SectionID: any) => {
    const section = document.getElementById(SectionID);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links: LinkItem[] = [
    { name: "Dashboard", id: "dashboard", icon: <GoHomeFill className="text-[#13505B]" /> },
    { name: "Medical Records", id: "medicalrecord", icon: <IoDocumentText className="text-[#13505B]" /> },
    { name: "Patients", id: "patients", icon: <IoPeopleSharp className="text-[#13505B]" /> },
    { name: "Appointments", id: "appointments", icon: <FaCalendarAlt className="text-[#13505B]" /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: [0.1, 0.3, 0.9] }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [links]);

  return (
    <div className="absolute left-0 box-border flex h-screen w-fit shadow-lg">
      <header className="flex flex-col sidebar w-full justify-between shrink-0 text-white p-10 h-full">
        <div>
          <Image
            src="/images/MediSync.png"
            quality={100}
            width={200}
            height={100}
            alt="Logo"
            className="max-w-full h-auto mt-5 self-center border-b-1 pb-2 border-black"
          />
          <ul className="flex flex-col gap-y-2 mt-5 text-xl font-bold">
            {links
              .filter((link) => link.name !== "")
              .map((link, index) => (
                <li
                  key={link.id}
                  className={`hover:bg-[#b1d0d748] hover:text-white rounded px-5 ${
                    currentSection === link.id ? "bg-[#b1d0d7]" : ""
                  }`}
                >
                  <Link
                    key={index}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      clickToSection(link.id);
                    }}
                    className="p-2 inline-flex items-center space-x-2"
                  >
                    {link.icon}
                    <span className='text-[#13505B]'>{link.name}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        
        {/* Logout button at the bottom */}
        <div className="mt-auto">
          <button
            onClick={logout}
            className="w-full p-2 inline-flex items-center space-x-2 text-left hover:bg-[#b1d0d748] rounded px-5"
          >
            <FiLogOut className="text-[#13505B]" />
            <span className='text-[#13505B] font-bold'>Logout</span>
          </button>
        </div>
      </header>
    </div>
  )
}

export default SideNav