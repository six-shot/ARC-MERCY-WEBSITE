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
      <div className="max-w-[1440px] mx-auto px-[4%] py-[2%] w-full ">
        <div className="w-full  h-[20vh] flex justify-start pl-[6%]">
          <div className="">
            <h1 id="text" className="text-sm">ARCHITCTURAL- DESIGN</h1>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default CircularTextEffect;
