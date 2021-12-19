import React from "react";
// import { Link } from "react-router-dom";
import {RiFacebookCircleFill,RiWhatsappFill} from 'react-icons/ri'
import {GrInstagram} from 'react-icons/gr'
import {BsTwitter} from 'react-icons/bs'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div
        class="bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://image.freepik.com/free-photo/abstract-black-white-bokeh-background_1962-1324.jpg)",
        }}
      >
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div class="container mx-auto px-6 lg:px-10 py-12">
            <div class="lg:flex">
              <div class="w-full lg:w-2/3">
                <div class="lg:flex">
                  <div class="w-full mb-12 lg:mb-0 lg:w-1/2">
                    <h2
                      style={{ fontFamily: "'Baloo Tamma 2', cursive" }}
                      class="font-bold text-xl text-gray-100 mb-4"
                    >
                      AquaFish
                    </h2>
                    <p class="text-gray-400">
                      Drawing from a database of over 1000 services
                    </p>
                    <div class="flex mt-6">
                    <RiFacebookCircleFill class='text-blue-500 text-7xl mx-9'/>
                    <GrInstagram class='text-pink-500 text-6xl mx-9'/>
                    <BsTwitter class='text-blue-300 text-6xl mx-9'/>
                    <RiWhatsappFill class='text-green-500 text-6xl mx-9'/>
                    
                     
                    </div>
                  </div>
                  <div class="w-full lg:w-1/2 lg:flex lg:px-6 ">
                    <div class="w-full mb-6 lg:mb-0 lg:w-1/2">
                      <h2
                        style={{ fontFamily: "'Baloo Tamma 2', cursive" }}
                        class="font-bold text-gray-100 mb-4"
                      >
                        Useful Links
                      </h2>
                      <ul class="text-gray-50 text-sm">
                        <li class="pt-1 pb-2">
                            <a href="#"></a>
                          {/* <Link href="/">Home</Link> */}
                        </li>
                        <li class="pt-1 pb-2">
                          <a href="#">About us</a>
                        </li>
                        <li class="pt-1 pb-2">
                        <a href="#">services</a>
                        </li>
                        <li class="pt-1 pb-2">
                        <a href="#">Terms of Services</a>
                        </li>
                        <li class="pt-1 pb-2">
                          <a href="#">Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                    <div class="w-full mb-6 lg:mb-0 lg:w-1/2">
                      <h2
                        style={{ fontFamily: "'Baloo Tamma 2', cursive" }}
                        class="font-bold text-gray-100 mb-4"
                      >
                        Help
                      </h2>
                      <ul class="text-gray-50 text-sm">
                        <li class="pt-1 pb-2">
                        <a href="#">FAQ</a>
                        </li>
                        <li class="pt-1 pb-2">
                        <a href="#">Contact us</a>
                        </li>
                        <li class="pt-1 pb-2">
                        <a href="#">Cookie policy</a>
                        </li>
                        <li class="pt-1 pb-2">
                        <a href="#">Copyright policy</a>
                        </li>
                        <li class="pt-1 pb-2">
                        <a href="#">services by other users</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-1/3">
                <h2
                  class=" font-bold text-gray-100 mb-4"
                  style={{ fontFamily: "'Baloo Tamma 2', cursive" }}
                >
                  Our Newsletter
                </h2>
                <div class="text-gray-300 mb-8">
                  Subscribe our weely Newsletter to get regular updates about
                  our blogs.
                </div>
                <div class="flex">
                  <input
                    type="text"
                    class="rounded-l px-2 focus:outline-none"
                  />
                  <button
                    class="text-gray-200 rounded-r hover:bg-blue-500 px-4 py-2 focus:outline-none"
                    style={{ backgroundColor: "#dc0900" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer bottom --> */}
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <div class="container mx-auto px-6 lg:px-20 py-6">
            <div class="flex justify-center font-bold text-gray-300 mb-1">
              © 2021, All rights reserved.
            </div>
            <div class="flex font-light justify-center text-gray-500 text-sm">
              <p>
                Designed by <span class="font-bold">Shanjida sultana</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;