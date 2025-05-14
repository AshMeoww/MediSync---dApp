import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

function LandingPage() {
  return (
    <div className="parentbox rounded-b-lg bg-gradient-to-br from-[rgba(217,217,217,0)] to-[#DAFFEF] h-[calc(100vh-2.5rem)] mb-10 overflow-hidden">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full nav flex justify-between py-4 bg-opacity-70 backdrop-blur-md border-gray-200 px-4 md:px-20 lg:px-40">
        {/* Logo */}
        <div className="logo">
          <Image
            src="/images/MediSync.png"
            quality={100}
            width={174}
            height={40}
            alt="Logo"
            className="max-w-full h-auto"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="navbtn flex justify-between items-center text-[20px] font-bold text-[#13505B] w-full md:w-1/2 lg:w-1/3">
          <button className="hover:text-blue-500 transition duration-300">
            Home
          </button>
          <button className="hover:text-blue-500 transition duration-300">
            Features
          </button>
          <button className="hover:text-blue-500 transition duration-300">
            About Us
          </button>
          <button
            className="rounded-full bg-[#13505b] text-[#FCFFFD] text-sm px-7 h-9 hover:bg-[#0f3d46] transition duration-300 font-medium"
            type="button"
          >
            Login
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row relative mt-32 lg:mt-44 items-center justify-between px-4 md:px-10 lg:px-20">
        <div className="flex flex-col w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-7xl font-bold bg-gradient-to-r from-[#0C7489] to-[#75DDDD] text-transparent bg-clip-text">
            Securing Health, <br />
            One block at a Time
          </h1>

          <p className="text-sm my-6 lg:my-10">
            Store all your medical records safely through our decentralized
            solutions
          </p>

          <button
            className="flex items-center gap-x-4 rounded-lg bg-gradient-to-r from-[#0C7489] to-[#75DDDD] text-[#FCFFFD] text-xl lg:text-2xl px-5 lg:px-7 h-12 lg:h-16 w-fit hover:bg-[#0f3d46] transition duration-300 font-medium"
            type="button"
          >
            Get Started
            <GoArrowRight />
          </button>

          <h1 className="text-center text-md font-medium mt-8">trusted by</h1>
          <div className="flex flex-row justify-around items-center gap-4">
            <Image
              src="/images/St. Luke logo.png"
              quality={100}
              width={174}
              height={40}
              alt="Logo"
              className="w-full max-w-[120px] lg:max-w-[174px] h-auto"
            />

            <Image
              src="/images/DGMC logo.png"
              quality={100}
              width={174}
              height={40}
              alt="Logo"
              className="w-full max-w-[120px] lg:max-w-[174px] h-auto"
            />

            <Image
              src="/images/MVS logo.png"
              quality={100}
              width={174}
              height={40}
              alt="Logo"
              className="w-full max-w-[120px] lg:max-w-[174px] h-auto"
            />
          </div>
        </div>

        <div className="flex justify-end items-center w-full lg:w-1/2 mt-8 lg:mt-0">
          <Image
            src="/images/rubix.png"
            quality={100}
            width={610}
            height={485}
            alt="Logo"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
