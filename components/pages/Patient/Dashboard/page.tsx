import React from "react";
import { FaBell } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { TbUsersPlus } from "react-icons/tb";
import { useState, useEffect } from "react";
import { RiProgress7Line } from "react-icons/ri";
import { WalletComponent } from "../../Authentication/Wallet/connect";

function Dashboard() {
    return (
        <div className="ml- h-full flex flex-col p-10">
            <div className="text-3xl flex flex-row w-full justify-end space-x-4">
            <FaBell />
            <WalletComponent />
            </div>

            <div className="mt-14 flex flex-row justify-between">
                <div className="flex flex-col">
                    <h1 className="text-4xl text-[#13505B] font-bold">Welcome back, Juan Dela Cruz! </h1>
                    <h1 className="font-medium mt-2">
                     MediSync is always here for your secure health experience.
                    </h1>
                </div>
            </div>

            {/* Profile Completion card */}
            <div className="bg-white shadow-md rounded-lg flex items-center justify-between px-6 py-4 w-full max-w-6xl mx-auto mt-6">
            {/* Left Circle (Progress) */}
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full border-4 border-teal-800 flex items-center justify-center text-sm font-semibold text-teal-800">
                        90%
                    </div>
    
                    {/* Text */}    
                    <div>
                        <h3 className="text-base font-semibold text-teal-800">Complete Your Profile</h3>
                        <p className="text-sm text-gray-500">You are a few steps away from completing your profile.</p>
                    </div>
                </div>

                {/* Button */}
                <button className="bg-teal-800 text-white px-4 py-2 rounded-md hover:bg-teal-800 transition duration-200">
                    Update Profile
                </button>
            </div>

            {/* Main content grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

            </section>
        </div>
        
    );
}

export default Dashboard;