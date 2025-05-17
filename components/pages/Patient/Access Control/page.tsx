import React from "react";
import { FaBell } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { TbUsersPlus } from "react-icons/tb";
import { useState, useEffect } from "react";
import {
  PendingModal,
  ApprovedModal,
  DeniedModal,
} from "@/components/ui/Modal/page_modal";
import { WalletComponent } from "../../Authentication/Wallet/connect";

function AccessControl() {
  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'denied'>('pending');
  const [pendingCount, setPendingCount] = useState(0);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Update pending count when component mounts or when refreshTrigger changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pendingRequests = JSON.parse(localStorage.getItem('pendingRequests') || '[]');
      setPendingCount(pendingRequests.length);
    }
  }, [refreshTrigger]);

  // Function to refresh the counts
  const refreshCounts = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  const handleTabChange = (tab: 'pending' | 'approved' | 'denied') => {
    setActiveTab(tab);
    refreshCounts();
  };

  return (
    <div className="ml- h-full flex flex-col p-10">
      <div className="text-3xl flex flex-row w-full justify-end space-x-4">
        <FaBell />
        <WalletComponent />
      </div>

      <div className="mt-14 flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="text-4xl text-[#13505B] font-bold">Access Control </h1>
          <h1 className="font-medium mt-2">
            Manage who can access your medical records
          </h1>
        </div>
        <div className="flex">
          <button
            className="flex items-center gap-x-2 rounded-lg bg-[#13505B] text-[#FCFFFD] text-base lg:text-lg px-4 lg:px-5 h-10 lg:h-12 w-fit hover:bg-[#0f3d46] transition duration-300 font-medium"
            type="button"
          >
            <TbUsersPlus />
            Grant New Access
          </button>
        </div>
      </div>

      <div className="mt-10 ">
        <div className="flex flex-row w-1/2 text-xl font-medium">
          <h1
            onClick={() => handleTabChange('pending')}
            className={`p-5 cursor-pointer ${
              activeTab === 'pending' 
                ? 'text-[#13505B] border-b-2 border-[#13505B] rounded-t-lg' 
                : 'text-gray-500 hover:text-[#13505B] hover:border-b-2 hover:border-gray-300'
            }`}
          >
            Pending Requests {pendingCount > 0 && <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">{pendingCount}</span>}
          </h1>
          <h1
            onClick={() => handleTabChange('approved')}
            className={`p-5 cursor-pointer ${
              activeTab === 'approved'
                ? 'text-[#13505B] border-b-2 border-[#13505B] rounded-t-lg'
                : 'text-gray-500 hover:text-[#13505B] hover:border-b-2 hover:border-gray-300'
            }`}
          >
            Approved Access
          </h1>
          <h1
            onClick={() => handleTabChange('denied')}
            className={`p-5 cursor-pointer ${
              activeTab === 'denied'
                ? 'text-[#13505B] border-b-2 border-[#13505B] rounded-t-lg'
                : 'text-gray-500 hover:text-[#13505B] hover:border-b-2 hover:border-gray-300'
            }`}
          >
            Denied Requests
          </h1>
        </div>

        <div className="p-4 shadow-lg">
          {activeTab === 'pending' && (
            <PendingModal 
              isPendingVisible={true} 
              PendingModalbtn={() => refreshCounts()} 
            />
          )}
          {activeTab === 'approved' && (
            <ApprovedModal 
              isVisible={true} 
              ApprovedModalbtn={() => refreshCounts()} 
            />
          )}
          {activeTab === 'denied' && (
            <DeniedModal 
              isVisible={true} 
              DeniedModalbtn={() => refreshCounts()} 
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AccessControl;