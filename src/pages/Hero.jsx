import { Typewriter } from "react-simple-typewriter";
import { profile } from "../assets/img";
import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <div className="w-full h-screen bg-bgColor mb-[50px]" name="home">
      <div className="mx-auto max-w-[1200px] w-full h-full flex justify-between items-center px-4 md:px-[30px]">
        <div className="w-full mx-auto border-red-100 rounded-[50px] md:flex-col lg:flex-row flex justify-center md:justify-between items-center px-[30px] py-[50px] lg:p-[60px] text-center lg:text-left">
          <div className="">
            <p className="text-[16px] lg:text-[50px] text-white">Hi, I'm</p>
            <h1 className="text-[36px] md:text-[50px] lg:text-[75px] text-textColor">
              <span className="font-bold text-white">Jamel Mahusay</span>
            </h1>
            <h2 className="text-[20px] lg:text-[36px]">
              <span className="text-white font-aurore">
                <Typewriter
                  words={["Your web developer"]}
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <button>
              <Link
                type="button"
                to="contact"
                spy={true}
                smooth={true}
                offset={-43}
                duration={300}
                delay={500}
                isDynamic={true}
                className="border-none bg-primary rounded-[8px] text-white text-[18px] px-[28px] py-[16px] mt-[30px] hover:bg-opacity-80"
              >
                Contact me
              </Link>
            </button>
          </div>

          <div className="hidden bg-white lg:flex gap-10 p-4 lg:flex-col rounded-[100%] w-[400px] h-[400px] overflow-hidden relative">
            <img
              src={profile}
              alt="profile picture"
              className="bg-cover absolute top-[-80px] left-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
