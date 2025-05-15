import React from "react";
import SideNav from "@/components/ui/Navigation Bar/sidenav";
import AccessControl from "./Access Control/page";

function PatientDashboard() {
  return (
    <main className="flex h-screen overflow-hidden">
      <div>
        <SideNav />
      </div>

      <section className="flex-col flex-grow ml-[15em]">
        <section id="accesscontrol" className="flex-grow h-screen "><AccessControl /></section>

      </section>
    </main>
  );
}

export default PatientDashboard;
