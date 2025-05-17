import React, { useState } from "react";
import SideNav from "@/components/ui/Navigation Bar/docsidenav";
import Dashboard from "./Dashboard/page";
import MedicalRecords from "./Medical Records/page";

function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard"); // "dashboard" or "records"

  return (
    <main className="flex h-screen overflow-hidden">
      <div>
        {/* onTabChange={(tab) => setActiveTab(tab)} */}
        <SideNav  />
      </div>

      <section className="flex-col flex-grow ml-[15em]">

          <section id="dashboard" className="flex-grow h-screen">
            <Dashboard />
          </section>

        

          <section id="medicalrecord" className="flex-grow h-screen">
            <MedicalRecords />
          </section>
  
      </section>
    </main>
  );
}

export default DoctorDashboard;