import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
      <div className="bg-blue-900 text-white w-full p-4 sm:p-6 md:p-8 lg:p-10 rounded-b-xl">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_1fr_1fr] gap-10 text-sm">
          {/* Left */}
          <div className="text-center sm:text-left">
            <img className="mb-5 w-32 sm:w-40 mx-auto sm:mx-0" src={assets.Footer_Logo} alt="" />
            <p className="w-full max-w-lg text-gray-300 leading-6">
              KIMS is on a mission to make quality healthcare affordable and accessible for over a billion+ Indians. We believe in empowering our users with the most accurate, comprehensive, and curated information and care, enabling them to make better healthcare decisions.
            </p>
          </div>
          {/* Center */}
          <div className="text-center sm:text-left">
            <p className="text-lg sm:text-xl font-medium mb-4">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li onClick={() => navigate("/")} className="cursor-pointer hover:text-white">Home</li>
              <li onClick={() => navigate("/about")} className="cursor-pointer hover:text-white">About Us</li>
              <li onClick={() => navigate("/contact")} className="cursor-pointer hover:text-white">Contact Us</li>
              <li onClick={() => navigate("/")} className="cursor-pointer hover:text-white">Privacy Policy</li>
            </ul>
          </div>
          {/* Right */}
          <div className="text-center sm:text-left">
            <p className="text-lg sm:text-xl font-medium mb-4">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li>+91 9170019029</li>
              <li>+91 7735743584</li>
              <li className="break-words">ANKITSINGH1757@GMAIL.COM</li>
              <li className="break-words">MOHAPATRAANIMESH69@GMAIL.COM</li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-6 text-center">
          <hr className="border-gray-500 mb-4" />
          <p className="py-3 text-xs sm:text-sm text-gray-300">
            Copyright 2025 @ ANIMESH MOHAPATRA & ANKIT KUMAR SINGH - All Rights Reserved.
          </p>
        </div>
      </div>
  );
};

export default Footer;
