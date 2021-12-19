import React from "react";

const Blogs = () => {
  return (
    <>
    <h1 class='text-indigo-900 fw-bold my-12 text-6xl '>Latest News and Blogs</h1>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full h-54" src="https://i.ibb.co/LgNFssd/news1.png" alt="Mountain" />
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block  px-3 py-1 text-sm font-semibold text-black-500 mr-2 mb-2">
           admin
          </span>
          <span class="inline-block  px-3 py-1 text-sm font-semibold text-black-500 mr-2 mb-2">
            9 oct,2021
          </span>
        </div>
        <div class="px-6 py-4">
          <h3 class="text-white ">
           How to acclimate tropical fish to your tank
          </h3>
          <p class="text-green-400">
          Most people will tell you that it takes about 15 minutes for fish to acclimate to an aquarium. While this is partially true, it takes at least an hour for a new fish to adjust entirely to a new environment. Float the bag in the aquarium until the water reaches the same temperature as that in the aquarium.
          </p>
        </div>
     
        <button class=" p-3 rounded-full mb-3 bg-sky-600 hover:bg-pink-700 ...">Read more</button>
      </div>
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full h-54" src="https://i.ibb.co/nrqf7QC/news2.png" alt="River" />
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2">
          By admin
          </span>
          <span class="inline-block px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2">
            06 Nov,2021
          </span>
    
        </div>
        <div class="px-6 py-4">
          <h3 class="text-white">
            Lifespan of fresh water aqurium fishes
          </h3>
          <p class="text-green-400">
          Aquarium fish should live anywhere from three to seven years, or longer. See more aquarium pictures. New hobbyists who have had problems keeping fish alive for even a few months are always shocked to find out that the normal life span of the typical aquarium fish is measured not in months but in years.
          </p>
        </div>
        
        <button class=" p-3 rounded-full mb-3 bg-sky-600 hover:bg-pink-700 ...">Read more</button>
      </div>

      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full h-54" src="https://i.ibb.co/t4GC2g9/new4.png" alt="Forest" />
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block  px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2">
            By admin
          </span>
          <span class="inline-block  px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2">
           11 Dec,2021
          </span>
        </div>
        <div class="px-6 py-4">
          <h3 class="text-white">
          Guide to keeping fresh water sword tails
          </h3>
          <p class="text-green-400">
          Although these fish are not big, they are active and need plenty of swimming space. A single swordtail needs at least 15 gallons. As they prefer being in groups, each additional fish needs roughly 5-6 gallons of water to keep them comfortable.
          </p>
        </div>
       
        <button class=" p-3 rounded-full mb-3 bg-sky-600 hover:bg-pink-700 ...">Read more</button>
      </div>
    </div>
    </> 
  );
};




export default Blogs;
