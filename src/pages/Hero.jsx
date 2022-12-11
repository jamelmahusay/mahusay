import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaGithub } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="w-full h-screen bg-bgColor mb-[50px]" name="home">
      <div className="mx-auto max-w-[1200px] w-full h-full flex justify-between items-center px-4 md:px-[30px]">
        <div className="w-full mx-auto border-red-100 rounded-[50px] shadow-xl shadow-gray-400 md:flex-col lg:flex-row flex justify-center md:justify-between items-center px-[30px] py-[50px] lg:p-[60px] text-center lg:text-left">
          <div className="">
            <p className="text-[16px] lg:text-[50px] text-white">Hi, I'm</p>
            <h1 className="text-[36px] md:text-[50px] lg:text-[75px] text-textColor">
              <span className="font-bold text-white">James Mahusay</span>
            </h1>
            <h2 className="text-[20px] lg:text-[36px]">
              <span className="text-white font-allura">
                <Typewriter
                  words={["Your web developer"]}
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <button className="border bg-primary rounded-[8px] text-white text-[18px] px-[28px] py-[16px] mt-[30px] hover:bg-opacity-80">
              Contact me
            </button>
          </div>

          <div className="hidden md:flex gap-10 p-4 lg:flex-col">
            <a
              href="https://facebook.com"
              className="bg-bgColor rounded-full shadow-xl flex justify-center items-center w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] cursor-pointer hover:scale-105 ease-in-out duration-300 group"
            >
              <FaFacebook className="text-primary opacity-80 group-hover:opacity-100 text-[30px] lg:text-[42px]" />
            </a>
            <a
              href="https://github.com/the-name-romel"
              className="bg-bgColor rounded-full shadow-xl flex justify-center items-center w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] cursor-pointer hover:scale-105 ease-in-out duration-300 group"
            >
              <FaGithub className="text-primary opacity-80 group-hover:opacity-100 text-[30px] lg:text-[42px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
