import React from 'react';
import CountUp from 'react-countup';
import {BiPlanet} from 'react-icons/bi';
import {GiCirclingFish} from 'react-icons/gi';
import {RiCactusLine} from 'react-icons/ri';

const Offer = () => {
    return (
       <div class=" bg-indigo-800 p-5 my-12 ">
            <div class=' justify-evenly mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 '>
            <div class='my-3 p-5 mx-auto w-56' style={{border:'5px solid skyblue',margin:"50px auto", borderRadius:'50%'}}>
                <BiPlanet class='text-white text-8xl mx-auto'/>
                <h2 class='text-white text-3xl'>Clients</h2>
                <CountUp
                style={{fontSize:'20px',color:"white"}}
                class='text-5xl'
                start={0}
                end={5000}
                duration={20}
                /> 
            </div>
            <div class='my-3 p-5 mx-auto w-56' style={{border:'5px solid skyblue',margin:"50px auto", borderRadius:'50%'}}>

                <GiCirclingFish class='text-white text-8xl mx-auto'/>
                <h2 class='text-white text-2xl'>Healthy Fishes</h2>
                <CountUp
                style={{fontSize:'20px',color:"white"}}
                start={0}
                end={45620}
                duration={20}
                /> 
            </div>
                <div class='my-3 p-5 mx-auto w-56' style={{border:'5px solid skyblue',margin:"50px auto", borderRadius:'50%'}}>
                <RiCactusLine class='text-white text-8xl mx-auto'/>
                <h2 class='text-white text-3xl'>Aquriums</h2>
                <CountUp
                style={{fontSize:'20px',color:"white"}}
                start={0}
                end={2000}
                duration={20}
                /> 
            </div>
        </div>
       </div>
    );
};

export default Offer;