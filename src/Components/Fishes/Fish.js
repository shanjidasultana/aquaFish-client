import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/action';
import {addCart} from '../../redux/action';

const Fish = () => {
 const {productId}=useParams();
 const [fish ,setFish]=useState({});
 const dispatch= useDispatch();
 const addProduct=product=>{
     dispatch(addCart(product));
 }
 useEffect(()=>{
  fetch (`https://peaceful-gorge-33805.herokuapp.com/products/${productId}`)
  .then(res=> res.json())
  .then(data=>setFish(data))
 },[productId])
  
console.log(fish.name);
    
return (
  <div class="p-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
      <h2 class='text-green-400 fw-bold text-4xl ny-9 '>Fish Details</h2>
      <div>
          <img class=' border-8 border-lime-300 w-full mt-24' src={fish.image} alt="" />
      </div>
       <div class='mt-12'>
            <h2 class='text-sky-500 fw-bold text-4xl my-5 '>{fish.name}</h2>
            <p class=' text-yellow-400 fw-bolder text-3xl my-5 '>${fish.price}</p>
            <p class='text-green-400 space-y-6  fw-bold text-2xl my-5 '>{fish.details}</p>
           
                <button onClick={()=>addProduct(fish)} class='p-3 px-6 text-white bg-indigo-900 hover:bg-pink-500 fs-2xl fw-bold rounded-full mx-4 my-6'>Add to Cart</button>
           
            <Link to='/cart'>
                <button class='p-3 px-6 text-white bg-indigo-900 hover:bg-pink-500 fs-2xl fw-bold rounded-full mx-4 my-6'>Go to Cart</button>
            </Link>
       </div>

   </div>
    )
};

export default Fish;