import React from 'react';
import  {auth, googleAuthProvider} from '../../firebase';
import { useDispatch,useSelector } from 'react-redux';
import { setActiveUser,setUserLogOutState,selectUserEmail,selectUserName } from '../../redux/reducer/userSlice';
import {AiOutlineGooglePlus} from 'react-icons/ai'
import {BiLogOutCircle} from 'react-icons/bi'

const Register = () => {
    const dispatch= useDispatch()
    const userName= useSelector(selectUserName)
    const userEmail= useSelector(selectUserEmail)


    const handleSignIn=()=>{
        auth.signInWithPopup(googleAuthProvider).then((result)=>{
            dispatch(setActiveUser({
                userName:result.user.displayName,
                userEmail:result.user.email,
            }))
          
        })
    }
    const handleSignOut=()=>{
        auth.signOut().then(()=>{
            dispatch(setUserLogOutState())
        }).catch((err)=>alert(err.message))
    }
    return (
        <div>
            {
                userName?(
                    <button  class="   text-green-500   px-9 mt-9 rounded-full py-3 "onClick={handleSignOut}>
                        <BiLogOutCircle  class="fw-bolder  text-9xl mt-5   "/><span class="text-4xl text-red-700 ">signOut</span>
                    </button>
                ):(
                <button class="   text-yellow-500   px-9 mt-9 rounded-full py-3 " onClick={handleSignIn}>
                   <AiOutlineGooglePlus  class="fw-bolder  text-9xl mt-5    "/><span class="text-4xl text-blue-700 " >signIn</span>
                </button>)
            }
        </div>
    );
};

export default Register;