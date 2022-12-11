import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";

function Contact() {
  return (
    <div name="contact" className="w-full md:h-screen mb-[200px]">
      <div className="w-full py-[50px] px-[30px] max-w-[1200px] mx-auto">
        <div className="mx-auto text-center mb-[40px]">
          <h1 className="text-primary text-[32px]">CONTACT</h1>
        </div>
        <div className="flex gap-10 w-full">
          <div className="space-y-5 hidden lg:flex flex-col">
            <span className="flex gap-2 items-center text-[18px]">
              <FaMapMarkerAlt /> Quezon, Bulan Sorsogon
            </span>
            <span className="flex gap-2 items-center text-[18px]">
              <FaPhoneAlt /> +6391234567
            </span>
            <span className="flex gap-2 items-center text-[18px]">
              <FaEnvelope /> jamelmahusay355@gmail.com
            </span>
            <span className="flex gap-2 items-center text-[18px]">
              <FaFacebook /> Jamel Mahusay
            </span>
          </div>
          <form action="" className="w-full space-y-5 text-white max-w-[800px]">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea
              name=""
              id=""
              rows="10"
              placeholder="Kindly type your message here..."
              className="w-full rounded-[10px] bg-primary bg-opacity-50"
            />
            <button
              type="submit"
              className="bg-primary rounded-[8px] text-white text-[18px] px-[28px] py-[16px] mt-[30px] hover:bg-opacity-80"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
