import React from "react";
import Navbar from "../navbar/page";
import hero from "@/public/hero.jpg";
export default function Hero() {
  return (
    <div className="bg-white w-full">
      <div className="max-w-[1440px] mx-auto px-[4%] ">
        <Navbar />
        <div className="sm:h-[25vh] pt-[5%]   flex items-center ">
          <div className="grid sm:grid-cols-12 grid-cols-1 w-full items-center">
            <div className="col-span-9">
              <div className="flex flex-col">
                <div>
                  <h1 className="sm:text-[65px] text-[40px] leading-[55px] ">
                    ARCHITECTURAL
                  </h1>
                </div>
                <div className="sm:flex hidden items-center gap-10">
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
                  <div className="flex  items-center gap-5">
                    <div className="">
                      <h4 className="text-right text-[10px] font-medium">
                        MODERN
                        <br />
                        BEACHFRONT
                        <br />
                        VILLAS
                      </h4>
                    </div>
                    <div>
                      <h1 className="  text-[40px] ">COSTAL</h1>
                    </div>
                  </div>
                  <div className="sm:pb-0 pb-[4%]">
                    <h1 className="  text-[40px] ">DESIGN</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 w-full">
              <div className="flex flex-col sm:gap-16 gap-7">
                <h5 className="text-xs">
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
        <div className="mt-[5%]">
          <div
            style={{
              // use the src property of the image object
              backgroundImage: `url(${hero.src})`,
              // other styles
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              borderRadius: "14px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
