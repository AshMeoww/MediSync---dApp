import React from "react";
import Image from "next/image";
import NavigationBar from "@/components/ui/Navigation Bar/navbar";
import { useState } from "react";
import { useRouter } from 'next/navigation';


export default function LoginPage() {
  const router = useRouter();
  const [activeUserTab, setActiveUserTab] = useState("patient"); // 'patient' or 'doctor'
  const [activeFormTab, setActiveFormTab] = useState("login"); // 'login' or 'signup'
  const [philsys, setPhilsys] = useState("123456789123");
  const [password, setPassword] = useState("************");
  const [remember, setRemember] = useState(false);

  const handleUserTabClick = (tab: React.SetStateAction<string>) => {
    setActiveUserTab(tab);
  };

  const handleFormTabClick = (tab: React.SetStateAction<string>) => {
    setActiveFormTab(tab);
  };

  // Add error handling for navigation
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      // Route to appropriate dashboard based on activeUserTab
      if (activeUserTab === 'doctor') {
        await router.push('/Doctor'); // Updated path
      } else {
        await router.push('/Patient'); // Updated path
      }
    } catch (error) {
      console.error('Navigation error:', error);
      // Handle error appropriately
    }
  };

  // Add error handling for skip verification
  const handleSkipVerification = async () => {
    try {
      // Route to appropriate dashboard based on activeUserTab
      if (activeUserTab === 'doctor') {
        await router.push('/Doctor'); // Updated path
      } else {
        await router.push('/Patient'); // Updated path
      }
    } catch (error) {
      console.error('Navigation error:', error);
      // Handle error appropriately
    }
  };

  return (
    <section>
      <NavigationBar />
      <section className="bg-[#f9f7f8] min-h-screen flex items-center justify-center p-6">
        <div className="relative max-w-3xl w-full bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.05)] p-10">
          <div className="absolute top-20 left-0 flex flex-col space-y-6">
            <button
              aria-label="Patient tab"
              onClick={() => handleUserTabClick("patient")}
              className={`rounded-tr-xl rounded-br-xl w-16 h-20 flex flex-col items-center justify-center gap-1 shadow-[0_0_20px_rgba(11,122,138,0.3)] ${
                activeUserTab === "patient"
                  ? "bg-[#0b7a8a]"
                  : "bg-white border border-transparent hover:border-[#0b7a8a] transition-colors"
              }`}
            >
              <i
                className={`fas fa-user-nurse text-3xl ${
                  activeUserTab === "patient"
                    ? "text-[#7ad1d9]"
                    : "text-[#0b7a8a]"
                }`}
              ></i>
              <span className={`text-xs font-medium ${
                activeUserTab === "patient" 
                  ? "text-white"
                  : "text-[#0b7a8a]"
              }`}>
                Patient
              </span>
            </button>
            <button
              aria-label="Doctor tab"
              onClick={() => handleUserTabClick("doctor")}
              className={`rounded-tr-xl rounded-br-xl w-16 h-20 flex flex-col items-center justify-center gap-1 shadow-[0_0_20px_rgba(11,122,138,0.3)] ${
                activeUserTab === "doctor"
                  ? "bg-[#0b7a8a]"
                  : "bg-white border border-transparent hover:border-[#0b7a8a] transition-colors"
              }`}
            >
              <i
                className={`fas fa-stethoscope text-3xl ${
                  activeUserTab === "doctor"
                    ? "text-[#7ad1d9]"
                    : "text-[#0b7a8a]"
                }`}
              ></i>
              <span className={`text-xs font-medium ${
                activeUserTab === "doctor"
                  ? "text-white" 
                  : "text-[#0b7a8a]"
              }`}>
                Doctor
              </span>
            </button>
          </div>

          <div className="max-w-xl mx-auto">
            <h1 className="text-5xl font-extrabold text-[#0b7a8a] text-center mb-2 capitalize">
              {activeUserTab}
            </h1>
            <p className="text-center text-xs text-[#4a4a4a] mb-8">
              Access your medical records from anywhere!
            </p>

            <div className="flex justify-center space-x-10 mb-8 text-lg font-semibold">
              <button
                onClick={() => handleFormTabClick("login")}
                aria-current={activeFormTab === "login" ? "page" : undefined}
                className={`pb-1 ${
                  activeFormTab === "login"
                    ? "text-[#0b7a8a] border-b-2 border-[#0b7a8a]"
                    : "text-[#9ca9aa]"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => handleFormTabClick("signup")}
                aria-current={activeFormTab === "signup" ? "page" : undefined}
                className={`pb-1 ${
                  activeFormTab === "signup"
                    ? "text-[#0b7a8a] border-b-2 border-[#0b7a8a]"
                    : "text-[#9ca9aa]"
                }`}
              >
                SignUp
              </button>
            </div>

            {activeFormTab === "login" ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                id="loginForm"
              >
                <div>
                  <label
                    htmlFor="philsys"
                    className="block mb-1 font-semibold text-[#0b7a8a]"
                  >
                    PhilSys Number:
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center text-[#0b7a8a] text-xl">
                      <i className="fas fa-user"></i>
                    </span>
                    <input
                      id="philsys"
                      name="philsys"
                      type="text"
                      value={philsys}
                      onChange={(e) => setPhilsys(e.target.value)}
                      className="w-full border border-[#0b7a8a] rounded-md py-3 pl-11 pr-4 text-[#4a4a4a] text-base focus:outline-none focus:ring-1 focus:ring-[#0b7a8a]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-1 font-semibold text-[#0b7a8a]"
                  >
                    Password:
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center text-[#0b7a8a] text-xl">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border border-[#0b7a8a] rounded-md py-3 pl-11 pr-4 text-[#4a4a4a] text-base focus:outline-none focus:ring-1 focus:ring-[#0b7a8a]"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="w-4 h-4 border border-[#0b7a8a] rounded-sm text-[#0b7a8a] focus:ring-0"
                  />
                  <label htmlFor="remember" className="text-[#0b7a8a] text-sm">
                    Remember me
                  </label>
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#5bc9d0] to-[#0b4a5a] text-white font-bold text-lg rounded-md px-16 py-3 shadow-md hover:shadow-lg transition-shadow"
                  >
                    Login
                  </button>
                </div>

                <p
                  onClick={() => alert("Forgot password clicked")}
                  className="text-center text-[#0b7a8a] text-xs mt-6 cursor-pointer select-none"
                >
                  Forgot password?
                </p>

                <p className="flex items-center justify-center text-left text-lg text-gray-600 mb-2">
                  For demonstration purposes:
                </p>
                <button
                  className="hover: flex items-center justify-center mx-auto rounded-full bg-[#13505b] text-[#FCFFFD] text-sm px-7 h-9 hover:bg-[#0f3d46] transition duration-300 font-medium"
                  type="button"
                  onClick={()=>{}}
                >
                  Skip Verification &amp; Connect Your Wallet Directly
                </button>
              </form>
            ) : (
              <div className="text-center text-[#0b7a8a] font-semibold">
                Signup form coming soon!
              </div>
            )}
          </div>
        </div>
      </section>
    </section>
  );
}
