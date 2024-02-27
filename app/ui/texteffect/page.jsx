"use client";
import React, { useEffect } from "react";


const CircleText = () => {
 useEffect(() => {
     const text = document.querySelector(".text p");
     text.innerHTML = text.innerHTML
       .split("")
       .map(
         (char, i) => `
        <span style="transform:rotate(${i * 8.5}deg)">${char}</span>`
       )
       .join("");
 }, []);

  return (
    <div className="">
      <div class="circle">
        <div class="logo"></div>
        <div class="text">
          <p className="pp">Architectural Design</p>
        </div>
      </div>
  
    </div>
  );
};

export default CircleText;
