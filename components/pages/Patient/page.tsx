import React from "react";
import SideNav from "@/components/ui/Navigation Bar/sidenav";
import AccessControl from "./Access Control/page";
import Dashboard from "./Dashboard/page";
import MedicalRecords from "./Medical Records/page";

function PatientDashboard() {
  return (
    <main className="flex h-screen overflow-hidden">
      <div>
        <SideNav />
      </div>

      <section className="flex-col flex-grow ml-[15em]">
        <section id="dashboard" className="flex-grow h-screen">
          <Dashboard />
        </section>

        <section id="accesscontrol" className="flex-grow h-screen ">
          <AccessControl />
        </section>

        <section id="medicalrecord" className="flex-grow h-screen">
          <MedicalRecords />
        </section>

      </section>
    </main>
  );
}

export default PatientDashboard;
