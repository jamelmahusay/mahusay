import React from "react";

export const Project = ({ image, alt, title, link }) => {
  return (
    <div className="relative max-h-[342px] max-w-[387px] h-full w-full rounded-[10px] overflow-hidden duration-300">
      <img src={image} alt={alt} className="object-cover w-full h-full" />
      <div className="absolute flex flex-col top-0 left-0 h-full w-full bg-opacity-0 group hover:bg-opacity-70 bg-primary items-center justify-center duration-300 hover:backdrop-blur-[5px] ease-in-out">
        <h1 className="text-white opacity-0 group-hover:opacity-100 duration-500 ease text-[22px]">
          {title}
        </h1>
        <a
          href={link}
          className="border-none bg-[#303030] bg-opacity-60 rounded-[8px] text-white text-[18px] px-[28px] py-[16px] mt-[30px] hover:bg-opacity-80 opacity-0 group-hover:opacity-100 duration-500"
        >
          Github Code
        </a>
      </div>
    </div>
  );
};
