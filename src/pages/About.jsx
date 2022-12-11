import React from "react";
import { about, css, html, js, node, react, tailwind } from "../assets/img";

const About = () => {
  return (
    <div className="w-full bg-bgColor mb-12" name="about">
      <div className="flex flex-col max-w-[1200px] md:h-screen mx-auto">
        <div className="text-center px-5 py-[30px] space-y-[20px]">
          <div className="mx-auto">
            <h1 className="text-primary text-[32px]">ABOUT</h1>
          </div>
          <div className="flex flex-col md:flex-row max-w-[800px] w-full h-[700px] md:h-[500px] bg-zinc-50 mx-auto justify-between overflow-hidden rounded-lg">
            <div className="bg-black flex-1 h-[50%] md:h-full w-full overflow-hidden relative">
              <img
                src={about}
                alt="image"
                className="absolute top-[-50px] md:top-0 bg-cover md:h-[500px] w-full"
              />
            </div>
            <div className="bg-bgColor bg-opacity-90 h-full w-full flex-1 flex flex-col items-start justify-center  ">
              <div className="h-full w-full flex-1 flex flex-col items-start justify-center p-6 space-y-5">
                <p>Name: Jamel Mahusay</p>
                <p>Age: 21 year old</p>
                <p>Gender: Female</p>
                <p>School: Sorsogon State University</p>
                <p>Course: BSIT</p>
                <p>Language: English, Tagalog</p>
                <p>Country: Philippines</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-ful flex flex-col justify-center items-center">
          <div className="text-center space-y-[20px]">
            <h1 className="text-primary text-[32px]">SKILLS</h1>
            <p>There are the technologies I’m currently using and learning: </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center w-full gap-[50px] py-[20px] max-w-[1000px]">
            <div className="flex justify-center items-center">
              <img
                src={html}
                alt="HTML logo"
                title="HTML"
                className="w-[100px] hover:scale-105 duration-300 ease-in-out"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={css}
                alt="CSS logo"
                title="CSS"
                className="w-[100px] hover:scale-105 duration-300 ease-in-out"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={js}
                alt="JavaScript logo"
                title="JavaScript"
                className="w-[100px] hover:scale-105 duration-300 ease-in-out"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={tailwind}
                alt="Tailwind CSS logo"
                title="Tailwind CSS"
                className="w-[100px] hover:scale-105 duration-300 ease-in-out"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={react}
                alt="React JS logo"
                title="React JS"
                className="w-[100px] hover:scale-105 duration-300 ease-in-out"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={node}
                alt="NodeJS logo"
                title="NodeJS"
                className="w-[100px] hover:scale-105 duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
