import React from "react";
import SideNav from "@/components/ui/Navigation Bar/sidenav";
import Dashboard from "./Dashboard/page";



function DoctorDashboard() {
  return (
    <main className="flex h-screen overflow-hidden">
      <div>
        <SideNav />
      </div>

      <section className="flex-col flex-grow ml-[15em]">
        <section id="dashboard" className="flex-grow h-screen">
          <Dashboard />
        </section>
      </section>
    </main>
  );
}

export default DoctorDashboard;