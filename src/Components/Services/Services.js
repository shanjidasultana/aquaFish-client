import React from 'react';
import {GrVmMaintenance} from 'react-icons/gr';
import {GiTropicalFish,GiHealthPotion} from 'react-icons/gi';
import {FaConfluence} from 'react-icons/fa';
import bg from './../../images/bg1.jpg';
const Services = () => {
    return (
        <div style={{background:`url(${bg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',mixBlendMode:'screen'}}>

            <div>
                <h1 class='text-4xl fw-bold my-4'>Our services</h1>
                <h3 class='text-2xl fw-bold my-4'>WHAT ARE YOU LOOKING FOR?</h3>
                <p class='w-1/2 text-white mx-auto my-4 '>We offer a full line of professional aquarium services. Not only can we help to set up your aquarium, but we'll also design & configure it as well.</p>
            </div>
            <div>
            <div  class="grid grid-cols-4 gap-4 mx-auto ">
                <div >
                    <img src="" alt="" />
                    <GrVmMaintenance class='mx-auto my-3 text-white border p-4 hover:bg-blue-400 rounded-full text-8xl rounnded'/>
                    <h2 class='text-2xl mx-3 text-blue-900 fw-bold'>Maintenance</h2>
                    <p class='text-black my-3 '>AquaPro offers aquarium cleaning or regularly scheduled professional maintenance.</p>
                </div>
                <div class="...">
                     <img src="" alt="" />
                     <GiTropicalFish class='mx-auto my-3 text-white border p-4 hover:bg-blue-400 rounded-full text-8xl rounnded'/>
                    <h2 class='text-2xl mx-3 text-blue-900 fw-bold'>Aqurium design & supply</h2>
                    <p class='text-black my-3 '>AquaPro has installed many types of aquariums in both commercial and residential locations.</p>
                </div>
                <div class="...">
                     <img src="" alt="" />
                     <GiHealthPotion class='mx-auto my-3 text-white border p-4 hover:bg-blue-400 rounded-full text-8xl rounnded'/>
                    <h2 class='text-2xl mx-3 text-blue-900 fw-bold'> Service</h2>
                    <p class='text-black my-3 '>AquaPro can provide you with a fast accurate diagnosis. We will discuss with you the best course of action.</p>
                </div>
                <div class="...">
                    <img src="" alt="" />
                 
                   <FaConfluence class='mx-auto my-3 text-white border p-4 hover:bg-blue-400 rounded-full text-8xl rounnded'/>
                    <h2 class='text-2xl mx-3 text-blue-900 fw-bold'>onsultations</h2>
                    <p class='text-black my-3 '>Whether you are a beginner or if you have an expert level question, AquaPro can help!</p>
                </div>
               
            </div>
            </div>
        </div>
    );
};

export default Services;