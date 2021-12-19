import React from 'react';
import banner from '../../images/baner.jpg'
const Banner = () => {
    return (
        <div>
            <img class='w-full h-70' src={banner} style={{backgrounSize:"cover"}} alt="" />
            <div class='md:absolute bottom-28 left-24'>
                <h1 class='text-6xl text-white my-8 fw-bold '>Welcome to our website</h1>
                <p class='w-4/6 text-2xl mx-auto text-white'>AquaFish is a professional aquarium maintenance and service company unlike any other. AquaFish offers a full line of professional aquarium services.We have various type of healthy aqurium fish</p>
                <button class=" p-3 rounded text-white text-xl mt-9  mx-8 bg-sky-600 hover:bg-pink-700 ...">Get started</button>
                <button class='border p-3 text-white text-xl mt-9  rounded hover:bg-pink-700 '>Read More</button>
            </div>
        </div>
    );
};

export default Banner;