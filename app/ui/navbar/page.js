"use client";
import React from "react";
import { IconContext } from "react-icons";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
export default function Navbar() {
  return (
    <header className="bg-white w-full">
      <div className="max-w-[1440px] mx-auto px-[4%] ">
        <div className="w-full h-[10vh] border-b-[1px] border-black flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-[22px]">MERCY</h4>
            <h4 className="text-[10px] leading-[11px] font-semibold">
              COSTAL <br />
              ARCHITECTURE
            </h4>
          </div>
          <div className="flex items-center gap-8">
            <div className="sm:flex hidden gap-6">
              <IconContext.Provider value={{ size: "20px", color: "black" }}>
                <MdOutlineLocationOn />
                <RiSearchLine />
              </IconContext.Provider>
            </div>
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-base">MENU</h4>
              <div className="w-[32px] h-[32px] flex justify-center items-center bg-black rounded-full">
                <IconContext.Provider value={{ size: "20px", color: "white" }}>
                  <IoIosMenu />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
