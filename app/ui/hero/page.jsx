import React from "react";
import Navbar from "../navbar/page";

export default function Hero() {
  return (
    <div className="bg-white w-full">
      <div className="max-w-[1440px] mx-auto px-[4%] ">
        <Navbar />
        <div className="sm:h-[35vh] flex items-center ">
          <div className="grid sm:grid-cols-12 grid-cols-1 w-full">
            <div className="col-span-9">yy</div>
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
      </div>
    </div>
  );
}
