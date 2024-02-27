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
    <div className=" h-screen w-full relative">
      <div className="max-w-[1440px] mx-auto px-[4%] py-[3%] w-full ">
        <div className="w-[200px]   h-[20vh] flex justify-center items-center">
          <div className=" ">
            <div className="">
              <h1 id="text" className="sm:text-sm text-xs">
                ARCHITCTURAL- DESIGN
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularTextEffect;
