import React from "react";
import Quote from "./Quote";

function HeroPage() {
  return (
    <>
      <div className="p-5  relative md:p-10 xl:p-14 min-h-screen flex max-w-[100vw] overflow-hidden items-center justify-center StaticB  text-[11vw] md:text-[8.5vw]  flex-col  ">
        <div className="lg:mt-16 w-full">
        <div className="flex items-start  w-full leading-none ">
          <h1 className="">CREATIVE</h1>
        </div>
        <div className=" flex justify-end  w-full leading-none relative md:right-10 lg:right-14 xl:right-32">
          <h1>FRONTEND &</h1>
        </div>
        <div className=" flex items-start  w-full leading-none z-[10] relative md:left-20 lg:left-36">
          <h1 className="">BACKEND</h1>
        </div>
        <div className="flex justify-end  w-full leading-none">
          <h1>DEVEOLOPER</h1>
        </div></div>

       
      
      </div>
    </>
  );
}

export default HeroPage;
