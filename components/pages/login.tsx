import React from "react";
import Image from "next/image";

// not functional yet
function LoginPage() {
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

      <div className="flex-grow flex flex-col items-center justify-center px-6 text-center max-w-md mx-auto w-full">
        <h1 className="text-4xl lg:text-7xl font-bold bg-gradient-to-r from-[#0C7489] to-[#75DDDD] text-transparent bg-clip-text">
            Login with One Click
        </h1>
        <p className="text-xs text-gray-700 mb-4 select-none">
          Login as a:
        </p>

        {/* button for patient and doctor */}
        <div aria-label="Login role selection" className="inline-flex rounded-full shadow-md overflow-hidden mb-10 select-none" role="tablist">
          <button aria-selected="true" className="bg-gradient-to-r from-[#0C7489] to-[#75DDDD] text-white font-semibold px-6 py-2 rounded-l-full shadow-md focus:outline-none transition" id="patientBtn" role="tab" type="button">
          Patient
          </button>
          <button aria-selected="false" className="bg-gray-100 text-teal-600 font-semibold px-6 py-2 rounded-r-full focus:outline-none transition" id="doctorBtn" role="tab" type="button">
          Doctor
          </button>
        </div>
        <div className="bg-[#eaf4f4] rounded-xl shadow-lg p-8 w-64 flex flex-col items-center">
    
          {/* wallet connection not done */}
          <button className="bg-gradient-to-r from-[#0C7489] to-[#75DDDD] text-white font-semibold rounded-md px-6 py-3 w-full shadow-md hover:brightness-110 transition" type="button" id="connectWalletBtn">
          Connect Your Wallet
          </button>

        </div>
        <p className="text-sm text-teal-900 mt-8 select-none">
          Don’t have an account yet?
          <a className="underline" href="#">
          Sign Up
          </a>
        </p>
        
      </div>
    </div>
  );
}

export default LoginPage;
