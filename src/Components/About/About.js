import React from 'react';
import sample from '../../images/Fish - 51594.mp4'
const About = () => {
    return (
        <div class="lg:flex align-middle">
            <video class='videoTag w-1/2 h-full mx-9 my-9 border-8' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
           <div>
           <h1 class=" mt-6 mb-4 fw-bolder text-5xl"> ABOUT US</h1><br/><br/>
            <p class="text-yellow-400 fw-bold mr-4 ">After frequently being exceptionally disillusioned with our own fish encounters , we chose to do things right. Our enthusiasm for fish drove us to places known and obscure, and we discovered that an extraordinary assortment of value fish is accessible in case you're willing to endeavor.

We found and conveyed the choicest fish appropriate to your doorstep.

In the wake of including in excess of 45 aqua of fish, shellfish and the sky's the limit from there who want to  buy aqua fish  for decroration or may for as a hobby.



With fish entrenched, we have now directed our concentration toward aqcu fish food , aqurium ,aqurium decrore and some other things. Sourced from just extremely select providers, we convey to you the best healthy   fish product.</p>
           </div>
       
        </div>
    );
};

export default About;