import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";

interface PendingRequestProps {
  doctor?: {
    name: string;
    hospital: string;
    requestDate: string;
    reason: string;
  };
  onApprove: () => void;
  onDeny: () => void;
}

export function PatientPR({ 
  doctor = {
    name: "Dr. Kenneth C. Hular",
    hospital: "M.V.S Medical Center",
    requestDate: "2025-03-03",
    reason: "Check antibiotic prescriptions and intake for the past 5 years"
  },
  onApprove,
  onDeny
}: PendingRequestProps) {
  return (
    <div className="border border-[#b4d1d8] flex flex-row p-10 bg-[#cedfe5] rounded-lg justify-around mb-4">
      <div className="flex flex-col">
        <h1 className="font-bold text-[#13505b] text-xl">
          {doctor.name}
        </h1>
        <div className="flex items-center text-gray-500 text-sm">
          <CiLocationOn />
          <p>{doctor.hospital}</p>
        </div>

        <p className="text-[#13505BB2] text-sm mt-5 font-medium">
          Requested on {doctor.requestDate}
        </p>
      </div>

      <div className="flex flex-col">
        <p className="font-semibold text-sm text-[#4D4D4D]">
          Access Level: <span className="font-normal">Full</span>
        </p>
        <p className="font-semibold text-sm text-[#4D4D4D]">
          Duration: <span className="font-normal">1 week</span>
        </p>
        <p className="font-semibold text-sm text-[#4D4D4D] mt-5">Reason: </p>

        <p className="w-2/3 text-sm">
          {doctor.reason}
        </p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <button onClick={onDeny} className="hover:opacity-80">
          <FaRegCircleXmark className="w-10 h-10 text-[#13505b]" />
        </button>
        <button onClick={onApprove} className="hover:opacity-80">
          <FaRegCircleCheck className="w-10 h-10 text-[#13505b]" />
        </button>
      </div>
    </div>
  );
}