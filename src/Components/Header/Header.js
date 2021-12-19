import React from 'react';
import { Link } from 'react-router-dom';
import logo from  '../../images/Fishlogo-removebg-preview.png';
import {FaCartArrowDown} from 'react-icons/fa'
import {FiLogIn} from 'react-icons/fi'
import {MdPermContactCalendar} from 'react-icons/md'
import { useSelector } from 'react-redux';
const Header = () => {
  const state= useSelector((state)=>state.handleCart)
    return (
      <nav class="nav flex flex-wrap  items-center justify-between px-4 bg-blue-900 ">
        <div class="flex flex-no-shrink items-center mr-6 py-3  text-grey-darkest">
          <img src={logo} alt="" class='w-32 mr-5' />
         
          <h2 class="font-bold text-blue-200 text-5xl  tracking-tight "><span style={{fontFamily:"cursive"}} >AquaFish</span></h2>
        </div>

        <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
          for="menu-btn"
        >
          <span class="navicon bg-grey-darkest flex items-center relative"></span>
        </label>

        <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
          <li class="border-t md:border-none">
            <Link
              to="/"
              class="block md:inline-block px-4 text-white py-3 no-underline  hover:text-grey-darker font-bold"
            >
              Home
            </Link>
          </li>

          <li class="border-t md:border-none">
            <Link
              to="/about"
              class="block md:inline-block px-4 text-white py-3 no-underline  hover:text-grey-darker font-bold"
            >
              About
            </Link>
          </li>

          <li class="border-t md:border-none">
            <Link
              to="/products"
              class="block md:inline-block px-4 py-3 no-underline font-bold text-white  hover:text-grey-darker"
            >
             Products
            </Link>
          </li>
          <li class="border-t md:border-none">
            <Link
              to="/contact"
              class="block font-bold md:inline-block px-4 py-3 no-underline text-white  hover:text-grey-darker"
            >
              contact
            </Link>
          </li>
          <li class="border-t md:border-none">
            <Link
              to="/blog"
              class="block md:inline-block font-bold px-4 py-3 no-underline text-white hover:text-grey-darker"
            >
               Blog
            </Link>
          </li>
        </ul>
        <div>
            {/* <Link
              to="/login"
              class="flex btn btn-pink md:inline-block px-4  font-bold py-3 no-underline text-white hover:text-grey-darker"
            >
             <FiLogIn class="mr-3 text-blue-200 fw-bold text-2xl fw-bold"/> Login
          

            </Link> */}

            <Link
              to="/register"
              class="btn btn-pink flex md:inline-block px-4 py-3 no-underline font-bold text-white hover:text-grey-darker"
            >
             <MdPermContactCalendar class="mr-3 text-blue-200 fw-bold text-2xl fw-bold"/>register
            </Link>
            <Link
              to="/cart"
              class="flex btn btn-pink md:inline-block px-4 py-3 no-underline font-bold text-white hover:text-grey-darker"
            >
             <FaCartArrowDown class="mr-3 text-blue-200 fw-bold text-2xl fw-bold"/>cart({state.length})
            </Link>
        </div>
      </nav>
    );
};

export default Header;