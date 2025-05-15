
import LoginPage from "@/components/pages/login"
import LandingPage from "@/components/pages/Landing Page/page";

import Image from "next/image";

export default function Home() {
return(
  <main className="w-full">
      <LandingPage />
      {/* UI lang to*/}
      <LoginPage /> 
  </main>
);
}
