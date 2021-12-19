import React, { useState, useEffect } from "react";
import "./Fishes.css";
import {BsArrowLeft} from 'react-icons/bs';
import { Link } from "react-router-dom";

const Fishes = () => {
  const [fishes, setFishes] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-gorge-33805.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setFishes(data));
  }, []);
  return (
  <>
  <h1 class="text-5xl text-blue-900 my-5 fs-bold">Our Fishes</h1>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    {fishes.map(fish => 
        
          
           
    <div class="rounded overflow-hidden shadow-lg bg-indigo-900">
        {/* <div> */}
            <a class="card1" href="/">
            <img class="fish-img w-5/6 mx-auto" src={fish.image} alt="fish"/>

              <div class="content">
                <h3>{fish.name}</h3>
                <p class="small">
                  Card description with lots of great facts and interesting
                  details.
                </p>
              </div>
              <div class="corner" href="#">
                  <span ><BsArrowLeft class="fw-bold fs-2xl"/></span>
              </div> 
              
            </a>
        {/* </div> */}
      <div class="px-6 py-4">
        <div class="font-bold text-white text-xl mb-2">{fish.name}</div>
        <p class='fs-3xl fw-bold text-white'>${fish.price}</p>
        {/* <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p> */}
      </div>
      <div class="px-6 pt-4 pb-2">
        <Link to={`/products/${fish._id}`}>
          <button class="p-3  bg-pink-500 rounded-full text-white fs-2xl ">Buy Now</button>
        </Link>
      </div>
    </div>
         
      
    )}

    </div>
    </>
  );
};

export default Fishes;
