import React from "react";
import { FaBell } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
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
                    <h1 className="text-4xl text-[#13505B] font-bold">Welcome back, Dr. Ashley Nicole Santos </h1>
                    <h1 className="font-medium mt-2">
                     Manage meical records and appointments with MediSync.
                    </h1>
                </div>
            </div>

            {/* UI only, focus sa patients */}
        </div>
        
    );
}

export default Dashboard;