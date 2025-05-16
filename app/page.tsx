'use client'
import LoginPage from "@/components/pages/Authentication/login"
import DoctorDashboard from "@/components/pages/Doctor/page";
import LandingPage from "@/components/pages/Landing Page/page";
import Dashboard from "@/components/pages/Patient/Dashboard/page";
import PatientDashboard from "@/components/pages/Patient/page";
import Image from "next/image";

export default function Home() {
return(
  <main className="w-full">
      {/* <LandingPage /> */}
      {/* <LoginPage />  */}
      <PatientDashboard />
      {/* <DoctorDashboard /> */}
  </main>
);
}
