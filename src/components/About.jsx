import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const skillBox = ["HTML", "JS", "CSS","Nodejs","ExpressJs","MongoDB","Foot"];

function About() {
  useEffect(() => {
    // Animation for SKILLS section
    gsap.from(".Skills h1", {
      rotateY: -90,
      x: 50,
      color: "#000",
      stagger: {
        amount: 0.3,
      },
      scrollTrigger: {
        trigger: ".Skills",
        scrub: 1,
        start: "top 50%",
        end: "bottom 50%",
      },
    });

    // Animation for skill boxes
    gsap.utils.toArray(".Box").forEach((box) => {
      gsap.to(box, {
        backgroundColor: "black",
        width: "100%",
        scrollTrigger: {
          trigger: box,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="Container flex flex-col relative bg-black p-5">
      <h1 className="text-8xl StaticR">ABOUT ME</h1>
      <p className="text-3xl Open md:text-5xl overflow-hidden leading-tight mt-10 xl:text-7xl">
        I am a highly motivated full-stack web developer with a strong
        background in designing, developing, and maintaining dynamic,
        responsive, and feature-rich web applications. With expertise in modern
        front-end frameworks, back-end technologies, and database management, I
        excel at creating seamless user experiences and efficient, scalable
        solutions tailored to meet diverse client needs.
      </p>
      <h1 className="text-8xl StaticR mt-20">SKILLS</h1>
      <div className="px-5 StaticB mt-20 text-8xl xl:text-9xl flex flex-col Skills items-center justify-center overflow-hidden">
        <h1 className="m-0">SKILL</h1>
        <h1 className="m-0">IS</h1>
        <h1 className="m-0">WHAT</h1>
        <h1 className="m-0">MATTER</h1>
        <h1 className="m-0">END</h1>
        <h1 className="m-0">OF DAY</h1>
      </div>
      <div className="mt-20">
        {skillBox.map((skill, index) => (
          <div
            key={index}
            className="h-[15vh] Boxes border-t border-b relative flex items-center px-5"
          >
            <div className="absolute Box top-0 z-0 left-0 bg-white w-0 h-full"></div>
            <p className="text-5xl uppercase z-[20] StaticB">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
