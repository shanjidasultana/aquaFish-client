import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerInitate } from '../../redux/action';

const SignUp= () => {
    
    const [state ,setStates]=useState({email:"",password:"",displayName:"",passwordConfirm:""})
    
    const {currentUser}= useSelector((state)=>state.user);

    const dispatch= useDispatch()
    const navigate=useNavigate();
    useEffect(()=>{
        if(currentUser){
            navigate('/');
        }
    },[currentUser,navigate])

    const handleSubmit =(e)=>{
        e.preventDefult();
        if(password !== passwordConfirm){
            return;
        }
        dispatch(registerInitate(email,password,displayName))
        setStates({email:"",displayName:"",password:"",passwordConfirm:""});
    }
    const handleChange=(e)=>{
        let {name,value} =e.target;
        setStates({...state,[name]:value})

    }
    const {email,password,displayName,passwordConfirm}=state;
    return (
        <div>
           <div class='bg-red-200 w-75'>
               <form  onSubmit={handleSubmit}>
                   <h1 > Sign Up </h1>
                   <div >
                       
                       <input  type="text"   placeholder='User Name' name='displayName' value={displayName} onChange={handleChange}/><br/><br/>
                       <input  type="text"  placeholder='Email Address' name='email' value={email} onChange={handleChange}/><br/><br/>
                       <input type="password"   placeholder='Enter Password' name='password' value={password} onChange={handleChange} required/><br/><br/>
                       <input  type="password"   placeholder='ReCheck Password' name='passwordConfirm' value={passwordConfirm} onChange={handleChange}/><br/><br/>
                       <button type='submit'>Sign Up </button><br/>  
                        <p>Already have an account</p><br/>
                        <Link to='/login'>
                        <button type='button'>Login Here</button>
                        </Link>                                           
                   </div>
               </form>
           </div>
        </div>
    );
};

export default SignUp;