import React from 'react'
import { FaBell } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { TbUsersPlus } from "react-icons/tb";

function AccessControl() {
  return (
    <div className=" ml- h-full flex flex-col p-10">
        
        <div className="text-3xl flex flex-row w-full justify-end space-x-4">
            <FaBell />
            <CiUser />
        </div>

        <div className="mt-5 flex flex-row justify-between">
          <div className="flex flex-col">
            <h1 className="text-4xl text-[#13505B] font-bold">Access Control </h1>
            <h1 className='font-medium mt-2'>Manage who can access your medical records</h1>
          </div>

          <div className="flex">
                      <button
                        className="flex items-center gap-x-4 rounded-lg bg-gradient-to-r from-[#0C7489] to-[#75DDDD] text-[#FCFFFD] text-xl lg:text-2xl px-5 lg:px-7 h-12 lg:h-16 w-fit hover:bg-[#0f3d46] transition duration-300 font-medium"
                        type="button"/*  */
                      >
                        <TbUsersPlus />
                        Grant New Access

                      </button>
            
          </div>
        </div>
    </div>
  )
}

export default AccessControl
