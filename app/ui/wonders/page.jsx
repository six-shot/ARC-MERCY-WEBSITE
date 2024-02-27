"use client";
import React, { useEffect } from "react";

const CircularTextEffect = () => {
  useEffect(() => {
    const text = document.getElementById("text");
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
    const spans = document.querySelectorAll("span");
    spans.forEach((span, index) => {
      span.style.transform = `rotate(${(index + 1) * 18.5}deg)`;
    });
  }, []);

  return (
    <div>
      <div className=" h-screen w-full relative">
        <div className="max-w-[1440px] mx-auto px-[4%]  sm:py-[1%] flex gap-16  sm:gap-0 items-center w-full ">
          <div className="sm:w-[200px] w-[120px]  h-[20vh] flex justify-center items-center">
            <div className=" ">
              <div className="">
                <h1 id="text" className="sm:text-sm text-xs">
                  ARCHITCTURAL- DESIGN
                </h1>
              </div>
            </div>
          </div>
          <hr className="h-[2px] sm:w-[200px] w-full border-[1px] border-black" />
          <div className="sm:pl-[4%] sm:flex flex-col hidden">
            <h3 className="text-right text-[23px] font-medium leading-[28px]">
              DISCOVER THE ARCHITECTUAL
              <br /> ETCHED ALONG THE SHORELINES,WHERE DESIGNS
            </h3>
            <h3 className="text-[23px] font-medium">
              MEETS THE INFINITE BEAUTY OF THE SEA
            </h3>
          </div>
        </div>
        <div className=" sm:hidden flex flex-col px-[4%] -mt-4">
          <h3 className="text-center text-[18px] font-medium leading-[28px]">
            DISCOVER THE ARCHITECTUAL 
          </h3>
          <h3 className="text-[18px] font-medium">
            ETCHED ALONG THE SHORELINES, <br />
            WHERE DESIGNS MEETS THE INFINITE BEAUTY OF THE SEA
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CircularTextEffect;
