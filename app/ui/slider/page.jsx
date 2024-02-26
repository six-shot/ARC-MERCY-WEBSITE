"use client";
import React, { useEffect, useState } from "react";
import one from "@/public/hero.jpg";
import two from "@/public/hero2.jpg";
import three from "@/public/hero3.jpg";
import Image from "next/image";

function ImageSlider() {
  const imgs = [
    { id: 0, value: one },
    { id: 1, value: two },
    { id: 2, value: three },
  ];
  const [wordData, setWordData] = useState(imgs[0]);

  const handleHover = (index) => {
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };

  return (
    <div className="w-full">
      <div
        style={{
          // use the src property of the image object
          backgroundImage: `url(${wordData.value.src})`,
          // other styles
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "55vh",
          padding: "3%",
          borderRadius: "14px",
          position: "relative",
          objectFit: "cover",
        }}
      >
        <div className="sm:flex hidden items-start flex-col">
          <div className="flex items-center gap-2">
            <div className="w-[40px] h-[40px] rounded-full border border-black flex justify-center items-center">
              <div className="w-[9px] h-[9px] bg-black rounded-full"></div>
            </div>
            <div className="">
              <h4 className="text-left text-xs font-medium leading-[15px]">
                PARKER ALLENTOWN
                <br />
                NEWMEXICO 3114
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-10  mt-[2%] w-full">
            <div className="border border-black    rounded-[50px] w-full  grid grid-cols-12  items-center">
              <div className="col-span-5 border-r-[1px] border-black h-full">
                <div className="flex items-center h-full px-5 py-1">
                  <h5 className="text-xm font-semibold">TRUSTED</h5>
                </div>
              </div>
              <div className="col-span-7">
                <div className="flex flex-col  py-1">
                  <h5 className=" text-sm font-semibold px-3 ">46 Views</h5>

                  <hr className=" border-black h-[1px]" />
                  <h5 className="text-sm font-semibold px-3 ">46 Views</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[90%] bottom-[7%]">
          <div className="flex justify-between items-center w-full">
            <div className=" flex justify-between items-center sm:w-[200px] w-[180px] h-[40px] bg-white px-2 pl-4 rounded-[50px]">
              <div className="flex gap-2 items-center">
                <h5 className="sm:text-sm text-xs font-medium">Book</h5>
                <h5 className="sm:text-sm text-xs font-medium">200$/day</h5>
              </div>
              <div className="sm:w-[30px] w-[25px] sm:h-[30px] h-[25px] rounded-full bg-black flex justify-center items-center">
                <div className="sm:w-[9px] w-[7px] sm:h-[9px] h-[7px] bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex">
              {imgs.map((data, i) => (
                <div className="" key={i}>
                  <div
                    className={wordData.id === i ? "" : ""}
                    onMouseEnter={() => handleHover(i)}
                    style={{ transition: "opacity 300ms ease-in-out" }}
                  >
                    <Image
                      src={data.value}
                      className="sm:w-[45px] sm:h-[45px] w-[35px] h-[35px] rounded-full border-[2px] border-white  "
                      alt="slide"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
