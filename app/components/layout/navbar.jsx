"use client";
import Link from 'next/link';
import { useState } from "react";

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <header className="border-b-1 relative z-20 w-full border-b border-[#EFEFEF] bg-[#fff] after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-[#EFEFEF] lg:border-[#EFEFEF] lg:backdrop-blur-sm lg:after:hidden font-dm-sans">
      <div className="section-container">
        <nav
          aria-label="main navigation"
          className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
          role="navigation"
        >
          <Link
            aria-label="Gradsea.io logo"
            aria-current="page"
            className="flex items-center py-4 lg:pr-8 text-2xl font-bold text-primary font-integralcf"
            href="/"
          >
            Gradsea.io
          </Link>
          <button
            className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${isToggleOpen
                ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                : ""
              }
              `}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-expanded={isToggleOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              ></span>
            </div>
          </button>

          <ul
            role="menubar"
            className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 gap-x-5 gap-y-3 lg:pt-0 lg:opacity-100 ${isToggleOpen
              ? "visible opacity-100 backdrop-blur-sm"
              : "invisible opacity-0"
              }`}
          >
            <li className="flex items-center">
              <Link
                role="menuitem"
                aria-current="page"
                aria-haspopup="false"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary focus:text-primary focus:outline-none focus-visible:outline-none xl:px-8"
                href="/"
              >
                <span>Marketplace</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                role="menuitem"
                aria-haspopup="false"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary focus:text-primary focus:outline-none focus-visible:outline-none xl:px-8"
                href="/"
              >
                <span>Resource</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                role="menuitem"
                aria-haspopup="false"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary focus:text-primary focus:outline-none focus-visible:outline-none xl:px-8"
                href="/"
              >
                <span>About</span>
              </Link>
            </li>
            <li className="flex items-center">
              <div
                className="flex items-center"
                href="/"
              >
                <div className="relative my-6">
                  <input
                    id="id-l16"
                    type="text"
                    placeholder="Search here"
                    className="relative w-full h-12 px-4 pr-12 transition-all border rounded-full outline-none peer border-[#EFEFEF] text-[#C0C0C0]  focus:border-primary focus:outline-none  focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-6 h-6 cursor-pointer top-3 right-4 stroke-[#757575] peer-disabled:cursor-not-allowed" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" aria-labelledby="title-9 description-9" role="graphics-symbol">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
              </div>
            </li>
            <li className="flex items-center py-4 lg:py-0">
              <button className="px-10 h-12 rounded-full bg-primary text-center text-xl font-medium text-white shadow-lg shadow-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:shadow-none transition-all">
                Upload
              </button>
            </li>
            <li className="flex items-center py-4 lg:py-0">
              <button
                className="group relative inline-flex items-center justify-start overflow-hidden px-5 h-12 w-fit border-2 border-primary rounded-full transition-all">
                <span className="-z-1 absolute left-0 top-0 h-0 w-0 bg-primary transition-all duration-500 ease-out group-hover:h-full group-hover:w-full" />
                <span className="z-10 w-full text-[15px] font-medium text-primary transition-colors duration-300 ease-in-out group-hover:text-white">
                  Connect Wallet
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};