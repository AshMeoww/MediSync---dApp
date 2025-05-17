'use client'
import { useState, useEffect } from "react";
import LoginPage from "@/components/pages/Authentication/page";
import DoctorDashboard from "@/components/pages/Doctor/page";
import PatientDashboard from "@/components/pages/Patient/page";
import LandingPage from "@/components/pages/Landing Page/page";
import { useRouter, useSearchParams } from 'next/navigation';
import { AuthContext } from './auth-context';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentView, setCurrentView] = useState("landing");
  
  // Check URL parameters for routing
  useEffect(() => {
    const userType = searchParams.get('userType');
    if (userType === 'doctor') {
      setCurrentView("doctor");
    } else if (userType === 'patient') {
      setCurrentView("patient");
    } else if (userType === 'login') {
      setCurrentView("login");
    } else if (userType === 'logout') {
      setCurrentView("landing");
    }
  }, [searchParams]);

  // Logout function to be passed to components
  const logout = () => {
    setCurrentView("landing");
    router.push('/?userType=logout');
  };

  // Navigate to login page
  const navigateToLogin = () => {
    setCurrentView("login");
    router.push('/?userType=login');
  };

  return(
    <AuthContext.Provider value={{ logout, navigateToLogin }}>
      <main className="w-full">
        {currentView === "landing" && <LandingPage />}
        {currentView === "login" && <LoginPage />}
        {currentView === "doctor" && <DoctorDashboard />}
        {currentView === "patient" && <PatientDashboard />}
      </main>
    </AuthContext.Provider>
  );
}