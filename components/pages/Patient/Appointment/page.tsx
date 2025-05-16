import React from "react";
import { FaBell } from "react-icons/fa";
import { TbUsersPlus } from "react-icons/tb";
import { WalletComponent } from "../../Authentication/Wallet/connect";

function Appointment() {
  return (
    // Main content
    <section className="ml- h-full flex flex-col p-10">
       <div className="text-3xl flex flex-row w-full justify-end space-x-4">
        <FaBell />
        <WalletComponent />
      </div>

      <div className="mt-14 flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="text-4xl text-[#13505B] font-bold">Appointment </h1>
          <h1 className="font-medium mt-2">
            Manage all of your appointments.
          </h1>
        </div>
        <div className="flex">
          <button
            className="flex items-center gap-x-4 rounded-lg bg-[#13505B] text-[#FCFFFD] text-lg lg:text-2xl px-5 lg:px-7 h-12 lg:h-16 w-fit hover:bg-[#0f3d46] transition duration-300 font-medium"
            type="button"
          >
            <TbUsersPlus />
            Schedule Appointment
          </button>
        </div>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-[#5db6bb] font-semibold text-lg mb-6 mt-8">
        <div>Upcoming</div>
        <div>Finished</div>
        <div>Cancelled</div>
      </section>
    </section>
  );
}

export default Appointment;
