import React from 'react';
import { Link } from 'react-router-dom';
// import emailjs from 'emailjs-com' 
import contact from '../../images/Fish - 38526.mp4';
import {FaFacebookSquare} from 'react-icons/fa'
import {BsWhatsapp,BsInstagram,BsMessenger} from 'react-icons/bs'
const Contact = () => {
    const sendEmail=e=>{
        e.preventDefault();
        // emailjs.sendForm('service_jdh6e0v',
        // 'template_ot0q4sj',e.target,
        // 'user_u4nfCULNqHd3iD3l3Reh3')
    }
    return (
        <div  class=' my-5'>
           <div class=" lg:flex">
              
               <div class="mx-auto">
               <h1 class="mx-auto  text-5xl my-4 text-red-400 fw-bolder ">Contact From</h1><br></br>
                <form  class="w-full" onSubmit={sendEmail}>
                    <label class=' fw-bold fs-2 fw-bolder text-3xl text-yellow-500'>Name</label><br/>
                    <input  class="w-full my-2 p-2 " type="text" name="name"/><br/>

                    <label class='fw-bold fs-2 fw-bolder text-3xl  text-yellow-500'>Email</label><br/>
                    <input  class="w-full  my-2 p-2 " type="email"  name="user_email"/><br/>

                    <label class=' fw-bold fs-2  fw-bolder text-3xl  text-yellow-500 '>Message</label><br/>
                    <textarea class=" w-full  my-2 p-2  "  name="message"  row="4"/><br/>

                    <input  class="text-2xl text-lime-100 rounded-md fw-bold  border-0 bg-red-800  my-2 py-3  w-full  fs-3 " type="submit" value="Send" />
                </form>

                <div>
                    <p class='fw-bolder text-black'>You can contact with us by </p>
                    <div class="flex ">
                        <Link to="/"><FaFacebookSquare  class="text-5xl fw-bolder text-blue-900 my-4 mx-4 "/></Link>
                        <Link to="/"><BsWhatsapp  class="text-5xl fw-bolder text-green-400 my-4 mx-4 "/></Link>
                        <Link to="/"><BsInstagram  class="text-5xl fw-bolder text-pink-800  my-4 mx-4  "/></Link>
                        <Link to="/"><BsMessenger  class="text-5xl fw-bolder text-blue-400 my-4 mx-4 "/></Link>
                    </div>
                </div> 
               </div>
               
               <video class='videoTag w-1/2 h-full  my-9 border-8 mx-auto' autoPlay loop muted>
                <source src={contact} type='video/mp4' />
               </video>
                
               
           </div>
        </div>
    );
};

export default Contact;
