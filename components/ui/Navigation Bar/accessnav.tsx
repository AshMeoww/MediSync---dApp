import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
type LinkItem = {
  name: string;
  id: string;
  onClick?: () => void;
};

function AccessNav() {
  const [currentSection, setCurrentSection] = useState("");

  const clickToSection = (SectionID: any) => {
    const section = document.getElementById(SectionID);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links: LinkItem[] = [
    { name: "Pending Requests", id: "pending" },
    { name: "Approved Access", id: "approved" },
    { name: "Denied Requests", id: "denied" },
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
    <div className="flex flex-row mt-10 w-1/2 justify-between text-xl font-medium ">

        {links
          .filter((link) => link.name !== "")
          .map((link, index) => (
            <h1
              key={link.id}
              className={`className=" p-5 hover:rounded-lg hover:border hover:border-gray-200 hover:shadow-[0_3px_6px_-1px_rgba(0,0,0,0.1),_-4px_0_6px_-1px_rgba(0,0,0,0.1),_4px_0_6px_-1px_rgba(0,0,0,0.1)] active:text-[#13505B] text-gray-500" ${
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
                >
                 {link.name}
                </Link>
              
            </h1>
          ))}

    </div>
  );
}

export default AccessNav;
