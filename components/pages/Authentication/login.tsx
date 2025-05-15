import React from "react";
import Image from "next/image";
import NavigationBar from "@/components/ui/Navigation Bar/navbar";
// not functional yet
function LoginPage() {
  return (
    <div className="parentbox rounded-b-lg bg-gradient-to-br from-[rgba(217,217,217,0)] to-[#DAFFEF] h-[calc(100vh-2.5rem)] mb-10 overflow-hidden">
      {/* Navbar */}
      <NavigationBar />

      <div className="relative top-30 flex-grow flex flex-col items-center justify-center px-6 text-center mx-auto w-full max-w-4xl">
        <h1 className="lg:text-6xl font-bold bg-gradient-to-r from-[#0C7489] to-[#75DDDD] text-transparent bg-clip-text mb-10 leading-tight">
            Login with One Click
        </h1>
        <p className="text-sm md:text-base text-gray-700 mb-6 select-none">
          Login as a:
        </p>

        {/* button for patient and doctor */}
        <div aria-label="Login role selection" className="inline-flex rounded-full shadow-lg overflow-hidden mb-12 select-none hover:shadow-xl transition-shadow" role="tablist">
          <button aria-selected="true" className="bg-gradient-to-r from-[#0C7489] to-[#75DDDD] text-white font-semibold px-8 py-3 rounded-l-full shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all hover:brightness-110" id="patientBtn" role="tab" type="button">
          Patient
          </button>
          <button aria-selected="false" className="bg-gray-100 text-teal-600 font-semibold px-8 py-3 rounded-r-full focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all hover:bg-gray-200" id="doctorBtn" role="tab" type="button">
          Doctor
          </button>
        </div>
        <div className="bg-[#eaf4f4] rounded-2xl shadow-xl p-10 w-full max-w-sm flex flex-col items-center backdrop-blur-sm bg-opacity-90">
    
          {/* wallet connection not done */}
          <button className="bg-gradient-to-r from-[#0C7489] to-[#75DDDD] text-white font-semibold rounded-xl px-8 py-4 w-full shadow-lg hover:brightness-110 hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-teal-400" type="button" id="connectWalletBtn">
          Connect Your Wallet
          </button>

        </div>
        <p className="text-sm md:text-base text-teal-900 mt-10 select-none">
          Don't have an account yet?{" "}
          <a className="underline hover:text-teal-600 transition-colors ml-1 font-medium" href="#">
          Sign Up
          </a>
        </p>
        
      </div>
     ;    </div>
  );
}

export default LoginPage;
