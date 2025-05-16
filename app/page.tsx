'use client'
import LoginPage from "@/components/pages/Authentication/page";
import DoctorDashboard from "@/components/pages/Doctor/page";
import LandingPage from "@/components/pages/Landing Page/page";
import Dashboard from "@/components/pages/Patient/Dashboard/page";
import PatientDashboard from "@/components/pages/Patient/page";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
const router = useRouter();

return(
  <main className="w-full">
      {/* <LandingPage /> */}
      {/* <LoginPage />  */}

      {/* Protected Routes */}
      <PatientDashboard />
      {/* <DoctorDashboard /> */}
  </main>
);
}
