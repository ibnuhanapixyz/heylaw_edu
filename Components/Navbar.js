import React from "react";
import Link from "next/Link";
export const Navbar = () => {
  return (
    <>
      <nav className="nav bg-white shadow-md">
        <div className="flex items-center justify-center h-full w-full gap-x-32">
          <div>
            <a>
              <img src="logo.svg" className="h-5 w-24" />
            </a>
          </div>

          <div className="text-grey">
            <ul className="flex items-center gap-x-10 ">
              <li className="hidden md:list-item ">
                <Link
                  href="#"
                  className="font-bold px-2 pb-3 border-b-2 border-transparent hover:border-green text-black"
                >
                  Home
                </Link>
              </li>
              <li className="hidden md:list-item ">
                <Link
                  href="#"
                  className=" font-bold px-2 pb-3 border-b-2 border-transparent hover:border-green text-black"
                >
                  FAQ
                </Link>
              </li>
              <li className="hidden md:list-item ">
                <Link
                  href="#"
                  className=" font-bold px-2 pb-3 border-b-2 border-transparent hover:border-green text-black"
                >
                  Tentang kami
                </Link>
              </li>
              <li className="hidden md:list-item ">
                <Link
                  href="#"
                  className=" font-bold px-2 pb-3 border-b-2 border-transparent hover:border-green text-black"
                >
                  BLog
                </Link>
              </li>
              <li className="hidden md:list-item ">
                <Link
                  href="#"
                  className=" font-bold px-2 pb-3 border-b-2 border-transparent hover:border-green text-black"
                >
                  Heylaw
                </Link>
              </li>
              <div className="">
                <link href="#" />
                <button className="px-5 py-2 rounded-md bg-green text-white">
                  Heylaw edu
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
