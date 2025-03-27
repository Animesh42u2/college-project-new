import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
      <div>
          <div className="text-center text-2xl pt-10 text-gray-500">
              <p>
                  CONTACT <span className="text-gray-700 font-semibold">US</span>
              </p>
          </div>
          <div className="my-10 flex flex-col justify-center md:flex-row mb-28 gap-10 text-sm">
              <img
                  className="w-full md:max-w-[360px] "
                  src={assets.contact_image}
                  alt=""
              />
              <div className="flex flex-col justify-center items-start gap-6">
                  <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
                  <p className="text-gray-500">
                      Kushabhadra
                      Patia, Bhubaneswar
                      <br /> Odisha, India – 751024
                  </p>
                  <p className="text-gray-500">
                      Tel: +91 9170019029 <br />
                      Email: ANKITSINGH1757@GMAIL.COM
                  </p>
                  <p className="font-semibold text-lg text-gray-600">
                      CAREERS AT KIMS
                  </p>
                  <p className="text-gray-500">
                      Learn more about our teams and job openings.
                  </p>
                  <a href="https://pbmh.ac.in/career.aspx" target="_blank" rel="noopener noreferrer">
                      <button className='border border-black px-8 py-4 text-black rounded-xl text-sm hover:bg-black hover:text-white transition-all duration-300'>
                          Explore Jobs
                      </button>
                  </a>

              </div>
          </div>
      </div>
  );
}

export default Contact
