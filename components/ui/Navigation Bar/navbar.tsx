import React from 'react'
import Image
 from 'next/image'
import { WalletComponent } from '@/components/pages/Authentication/Wallet/connect'

function NavigationBar() {
  return (
      <div className="z-10 fixed top-0 left-0 w-full nav flex justify-between py-4 bg-opacity-70 backdrop-blur-md border-gray-200 px-4 md:px-20 lg:px-40">
        {/* Logo */}
        <div className="logo">
          <Image
            src="/images/MediSync.png"
            quality={100}
            width={174}
            height={40}
            alt="Logo"
            className="max-w-full h-auto"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="navbtn flex justify-between items-center text-[20px] font-bold text-[#13505B] w-full md:w-1/2 lg:w-1/3">
          <button className="hover:text-blue-500 transition duration-300">
            Home
          </button>
          <button className="hover:text-blue-500 transition duration-300">
            Features
          </button>
          <button className="hover:text-blue-500 transition duration-300">
            About Us
          </button>
          {/* <button
            className="rounded-full bg-[#13505b] text-[#FCFFFD] text-sm px-7 h-9 hover:bg-[#0f3d46] transition duration-300 font-medium"
            type="button"
          >
            Login
          </button> */}

          {/* eth wallet */}
          <WalletComponent />
          {/* <Hardhat> */}
        </div>
      </div>
  )
}

export default NavigationBar
