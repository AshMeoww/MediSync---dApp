import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";

export function PatientPR() {
  return (
    <div className="border border-[#b4d1d8] flex flex-row p-10 bg-[#cedfe5] rounded-lg justify-around">
      <div className="flex flex-col">
        {/* Convert to props later */}
        <h1 className="font-bold text-[#13505b] text-xl">
          Dr. Kenneth C. Hular
        </h1>
        <div className="flex items-center text-gray-500 text-sm">
          <CiLocationOn />
          <p>M.V.S Medical Center</p>
        </div>

        {/* Convert to props */}
        <p className="text-[#13505BB2] text-sm mt-5 font-medium">
          Requested on 2025-03-03
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
          Check antibiotic prescriptions and intake for the past 5 years
        </p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <FaRegCircleXmark className="w-10 h-10 text-[#13505b]" />
        <FaRegCircleCheck className="w-10 h-10 text-[#13505b]" />
        
      </div>
    </div>
  );
}
