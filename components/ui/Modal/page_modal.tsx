import React, { useState } from 'react'
import { PatientPR } from '../Sections/PatientPR';
import { PatientAA } from '../Sections/PatientAA';
import { FaXmark } from "react-icons/fa6";

interface PendingModalParam {
    isPendingVisible: boolean;
    PendingModalbtn: () => void;
}

interface ApprovedModalParam {
    isVisible: boolean;
    ApprovedModalbtn: () => void;
}

interface DeniedModalParam {
    isVisible: boolean;
    DeniedModalbtn: () => void;
}

export function PendingModal({isPendingVisible, PendingModalbtn }: PendingModalParam) {
  if (!isPendingVisible) return null;
  
  // State to track pending requests
  const [localPendingRequests, setLocalPendingRequests] = useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('pendingRequests') || '[]');
    }
    return [];
  });
    
  // Default request if none exist
  const defaultRequest = {
    doctor: {
      name: "Dr. Kenneth C. Hular",
      hospital: "M.V.S Medical Center", 
      requestDate: "2025-03-03",
      reason: "Check antibiotic prescriptions and intake for the past 5 years"
    },
    id: "default"
  };
  
  // Add default request if no requests exist
  const requests = localPendingRequests.length > 0 ? localPendingRequests : [defaultRequest];
  
  const handleApprove = (id: string) => {
    if (typeof window !== 'undefined') {
      const pendingRequests = JSON.parse(localStorage.getItem('pendingRequests') || '[]');
      const request = pendingRequests.find((req: any) => req.id === id);
      
      if (request) {
        // Remove from pending
        const updatedPending = pendingRequests.filter((req: any) => req.id !== id);
        localStorage.setItem('pendingRequests', JSON.stringify(updatedPending));
        
        // Add to approved
        const approvedRequests = JSON.parse(localStorage.getItem('approvedRequests') || '[]');
        localStorage.setItem('approvedRequests', JSON.stringify([...approvedRequests, request]));
        
        // Update local state instead of reloading
        setLocalPendingRequests(updatedPending);
      }
    }
  };
  
  const handleDeny = (id: string) => {
    if (typeof window !== 'undefined') {
      const pendingRequests = JSON.parse(localStorage.getItem('pendingRequests') || '[]');
      const request = pendingRequests.find((req: any) => req.id === id);
      
      if (request) {
        // Remove from pending
        const updatedPending = pendingRequests.filter((req: any) => req.id !== id);
        localStorage.setItem('pendingRequests', JSON.stringify(updatedPending));
        
        // Add to denied
        const deniedRequests = JSON.parse(localStorage.getItem('deniedRequests') || '[]');
        localStorage.setItem('deniedRequests', JSON.stringify([...deniedRequests, request]));
        
        // Update local state instead of reloading
        setLocalPendingRequests(updatedPending);
      }
    }
  };
  
  return (
    <div className='h-full p-10'>
      {requests.map((request: any) => (
        <PatientPR 
          key={request.id}
          doctor={request.doctor}
          onApprove={() => handleApprove(request.id)}
          onDeny={() => handleDeny(request.id)}
        />
      ))}
    </div>
  )
}

export function ApprovedModal({isVisible, ApprovedModalbtn }: ApprovedModalParam) {
  if (!isVisible) return null;
  
  // State to track approved requests
  const [localApprovedRequests, setLocalApprovedRequests] = useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('approvedRequests') || '[]');
    }
    return [];
  });
  
  const handleRevokeAccess = (id: string) => {
    if (typeof window !== 'undefined') {
      const approvedRequests = JSON.parse(localStorage.getItem('approvedRequests') || '[]');
      const updatedApproved = approvedRequests.filter((req: any) => req.id !== id);
      localStorage.setItem('approvedRequests', JSON.stringify(updatedApproved));
      setLocalApprovedRequests(updatedApproved);
    }
  };
  
  return (
    <div className='h-full p-10'>
      {localApprovedRequests.length === 0 ? (
        <p>No approved access</p>
      ) : (
        localApprovedRequests.map((request: any) => (
          <div key={request.id} className="mt-5 border border-[#b4d1d8] flex flex-row p-10 bg-[#cedfe5] rounded-lg justify-around">
            
                  <div className="flex flex-col">
                    <h1 className="font-bold text-[#13505b] text-xl">
                      {request.doctor.name}
                    </h1>
                    <div className="flex items-center text-gray-500 text-sm">
                 
                      <p>{request.doctor.hospital}</p>
                    </div>
            
                    <p className="text-[#13505BB2] text-sm mt-5 font-medium">
                      Approved on: {new Date().toLocaleDateString()}
                    </p>
                  </div>

                       <div className="flex flex-col w-1/3 ">
          <p className="font-semibold text-sm text-[#4D4D4D]">
            Access Level: <span className="font-normal">Full</span>
          </p>
          <p className="font-semibold text-sm text-[#4D4D4D]">
            Duration: <span className="font-normal">1 week</span>
          </p>
          <p className="font-semibold text-sm text-[#4D4D4D] mt-5">Reason: </p>

          <p className="w-2/3 text-sm">
           {request.patient.condition}
          </p>
        </div>
            
                  <div className="flex flex-row items-center gap-4 ">
                    <button
                      type="button"
                      className="flex items-center gap-2 p-2 border border-[#999999] bg-[#c8d9dd] rounded-md"
                      onClick={() => handleRevokeAccess(request.id)}
                    >
                      <FaXmark />
                      Revoke Access
                    </button>
                  </div>
          </div>
        ))
      )}
    </div>
  )
}

export function DeniedModal({isVisible, DeniedModalbtn }: DeniedModalParam) {
  if (!isVisible) return null;
  
  // State to track denied requests
  const [localDeniedRequests, setLocalDeniedRequests] = useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('deniedRequests') || '[]');
    }
    return [];
  });
  
  return (
    <div className='h-full p-10'>
      <h2 className="text-xl font-bold mb-4">Denied Requests</h2>
      {localDeniedRequests.length === 0 ? (
        <p>No denied requests</p>
      ) : (
        localDeniedRequests.map((request: any) => (
          <div key={request.id} className="border border-red-200 p-4 mb-4 rounded-lg bg-red-50">
            <h3 className="font-bold">{request.doctor.name}</h3>
            <p>Hospital: {request.doctor.hospital}</p>
            <p>Patient: {request.patient.name}</p>
            <p>Condition: {request.patient.condition}</p>
            <p>Denied on: {new Date().toLocaleDateString()}</p>
          </div>
        ))
      )}
    </div>
  )
}