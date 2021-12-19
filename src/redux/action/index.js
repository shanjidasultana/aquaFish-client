// for Add item to cart
import {auth} from '../../firebase';
import * as types from './actionType.js';

export const addCart= (product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}
// for delete item to cart
export const delCart= (product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}
export const inCart= (product)=>{
    return{
        type:"INITEM",
        payload:product
    }
}

export const removeFromCart = (product) => {
    return {
        type:"REMOVEITEM",
        payload:product
    }
}

export const registerStart=()=>{
    return{
        type:types.REGISTER_START,
    }
}    
export const registerSuccess=(user)=>{
    return{
        type:types.REGISTER_SUCCESS,
        payload:user
    }
}    

export const registerFail=(error)=>{
    return{
        type:types.REGISTER_FAIL,
        payload:error

    }

}
export const registerInitate=(displayName,email,password,)=>{
    return function (dispatch){
        dispatch(registerStart)
        auth.createUserWithEmailAndPassword(email,password).then(({user})=>{
            user.updateProfile({
                displayName
            })
            dispatch(registerSuccess(user))
        }).catch((error)=> dispatch(registerFail(error.message)))

       
        
    }
}