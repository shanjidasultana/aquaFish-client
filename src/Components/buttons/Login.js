import React from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Login = () => {
    
    const [state ,setStates]=useState({email:"",password:""})
    const handleGoogleSignin= ()=>{

    };
    const handleSubmit =()=>{

    }
    const handleChange=()=>{

    }
    const {email,password}=state;
    return (
        <div>
           <div class='bg-red-200 w-75'>
               <form  onSubmit={handleSubmit}>
                   <h1 > Sign in </h1>
                   <div >
                       <button 
                    
                       type='button'
                       onClick={handleGoogleSignin}
                       > 
                           <span>
                               <i>Sign in with Google</i>
                           </span>
                       </button><br/>
                       <input  type="text" class='form-control'  placeholder='Email Address' name='email' value={email} onChange={handleChange}/><br/><br/>
                       <input type="password" class='form-control'  placeholder='Enter Password' name='password' value={password} onChange={handleChange} required/><br/><br/>
                        <button type='submit'>Sign In </button><br/><br/>   
                        <p>Don't have an account </p><br/><br/>
                        <Link to='/register'>
                        <button type='button'>Register Please</button>
                        </Link>                                           
                   </div>
               </form>
           </div>
        </div>
    );
};

export default Login;