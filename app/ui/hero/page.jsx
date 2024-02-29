import React from "react";
import Navbar from "../navbar/page";
import hero from "@/public/hero.jpg";
import Image from "next/image";
import star from "@/public/star.png";
import ImageSlider from "../slider/page";
export default function Hero() {
  return (
    <div className="bg-white sm:h-screen w-full relative">
      <div className="max-w-[1440px] mx-auto px-[4%] ">
        <Navbar />
        <div className="sm:h-[25vh] pt-[5%]   flex items-center ">
          <div className="grid sm:grid-cols-12 grid-cols-1 w-full items-center">
            <div className="col-span-9">
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <h1 className="sm:text-[65px] text-[45px]  ">
                    ARCHITECTURAL
                  </h1>
                  <div className="sm:flex hidden">
                    <Image className="w-[60px]" src={star} alt="star" />
                  </div>
                </div>
                <div className="sm:flex hidden items-center gap-6 -mt-7">
                  <div className="">
                    <h4 className="text-right text-xs font-medium">
                      MODERN
                      <br />
                      BEACHFRONT
                      <br />
                      VILLAS
                    </h4>
                  </div>
                  <div className="">
                    <h1 className=" sm:text-[65px] text-[40px] ">
                      COSTAL DESIGN
                    </h1>
                  </div>
                </div>
                <div className="sm:hidden flex flex-col">
                  <div className="flex  items-center gap-5 sm:mt-0 -mt-[6%]">
                    <div className="">
                      <h4 className="text-right text-[10px] leading-[11px] font-medium">
                        MODERN
                        <br />
                        BEACHFRONT
                        <br />
                        VILLAS
                      </h4>
                    </div>
                    <div className="">
                      <h1 className="  text-[45px]  ">BUILDING</h1>
                    </div>
                  </div>
                  <div className="sm:pb-0 pb-[4%] flex items-center gap-4 sm:mt-0 -mt-[6%]">
                    <h1 className="  text-[45px] ">DESIGN</h1>

                    <Image className="w-[50px]" src={star} alt="star" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 w-full -mt-4">
              <div className="flex flex-col sm:gap-16 gap-4">
                <h5 className="text-sm">
                  Explore the symbiotic relationship{" "}
                  <br className="sm:flex hidden" />
                  between architecture and the coast
                </h5>
                <button className="w-full h-[40px] bg-black text-white text-xs rounded-[50px] px-5  flex justify-between items-center">
                  <h5>All catalog</h5>
                  <div className="w-[9px] h-[9px] bg-white rounded-full"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[2%] sm:mt-[10%] mt-[6%] sm:hidden flex justify-between gap-5 items-center">
          <div className="sm:hidden flex items-center flex-row">
            <div className="flex gap-2 items-center">
              <div className="w-[36px] h-[36px] rounded-full border border-black flex justify-center items-center">
                <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              </div>
              <div className="">
                <h4 className="text-left text-[10px] font-medium leading-[11px]">
                  PARKER
                  <br />
                  ALLENTOWN
                  <br />
                  NEWMEXICO
                  <br />
                  3114
                </h4>
              </div>
            </div>
          </div>
          <div className="border border-black    rounded-[50px] w-full  grid grid-cols-12  items-center">
            <div className="col-span-5 border-r-[1px] border-black h-full">
              <div className="flex items-center h-full px-3 py-1">
                <h5 className="text-sm font-semibold">TRUSTED</h5>
              </div>
            </div>
            <div className="col-span-7">
              <div className="flex flex-col  py-1">
                <h5 className=" text-[8px] font-semibold px-2 py-[2px]">
                  46 Views
                </h5>
                <div className="border border-b-black w-full"></div>
                <h5 className="text-[8px] font-semibold px-2 py-[2px]">
                  Discover the architectural
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[5%]">
          <ImageSlider />
        </div>
      </div>
      <div className="absolute w-[50px] bg-black-gradient " />
    </div>
  );
}
