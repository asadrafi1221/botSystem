import React from 'react'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all';
import gsap from "gsap";
 

gsap.registerPlugin(ScrollTrigger)
function Quote() {
    
useGSAP(()=>{
    gsap.from(".Heading h1",{
        rotateY : -90,
        x : '-50',
        stagger : {
          amount  : 0.3,
        },
        scrollTrigger : {
          trigger : '.Heading',
          scrub : 1,
          start : 'top 50%',
          end : 'bottom 50%',
        }
      })
})

  return (
    <div className=' bg-black min-h-screen z-[9] relative pt-32'>
        <div className="px-5 StaticR  text-8xl xl:text-9xl flex flex-col Heading  items-center justify-center overflow-hidden  ">
          <h1 className=" m-0 ">
            HEY I
          </h1>
          <h1 className=" m-0">CREATE</h1>
          <h1 className=" m-0">AMAZING</h1>
          <h1 className="  m-0">USER</h1>
          <h1 className=" m-0">EXPERIENCE</h1>
        </div>
    </div>
  )
}

export default Quote