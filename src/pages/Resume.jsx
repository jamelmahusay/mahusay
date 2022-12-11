import React from "react";
import { FaBook, FaCalendarDay } from "react-icons/fa";

function Resume() {
  return (
    <div className="w-full bg-bgColor p-[15px] mb-12" name="resume">
      <div className="max-w-[1200px] mx-auto w-full h-full gap-2">
        <h1 className="text-primary text-[32px] text-center mb-5">RESUME</h1>
        <div className="w-full flex justify-center items-center mx-auto">
          <div className="bg-black rounded-[35px] py-8 mx-auto flex flex-col text-center items-start justify-center px-[45px] bg-opacity-30  text-[22px] space-y-9">
            <div className="flex justify-center items-center">
              <span className="justify-self-end mr-2">
                <FaCalendarDay />
              </span>
              <span className="mr-9">2008 - 2015</span>
              <span className="justify-self-start">
                Quezon Elementary School
                <br />
                Quezon, Bulan Sorsogon
              </span>
            </div>

            <div className="flex justify-center items-center">
              <span className="justify-self-end mr-2">
                <FaCalendarDay />
              </span>
              <span className="mr-9">2017 - 2018</span>
              <span className="justify-self-start ">
                Quezon National High School
                <br />
                Junior High School
              </span>
            </div>

            <div className="flex justify-center items-center">
              <span className="justify-self-end mr-2">
                <FaCalendarDay />
              </span>
              <span className="mr-9">2019 - 2020</span>
              <span className="justify-self-start">
                Quezon National High School
                <br />
                Senior High School
              </span>
            </div>

            <div className="flex justify-center items-center">
              <span className="justify-self-end mr-2">
                <FaCalendarDay />
              </span>
              <span className="mr-[78px]">Present</span>
              <span className="justify-self-start">
                Sorsogon State University
                <br />
                Bulan, Sorsogon
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
