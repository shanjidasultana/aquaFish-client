import React from 'react';
// import { FaProductHunt } from 'react-icons/fa';
import { useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { inCart,delCart, removeFromCart} from './../redux/action/index';



const Cart = () => {
    const state=useSelector(state=>state.handleCart)
    const dispatch= useDispatch();

    const handleDecreament =(cartItem)=>{
        dispatch(delCart(cartItem))
    }
  
    const handleIncreament=(cartItem)=>{
        dispatch(inCart(cartItem))
    }
    const handleClose=(cartItem)=>{
        dispatch(removeFromCart(cartItem))
    }
  
    const cartItems=(cartItem)=>{
       
        return(
            <div>
                <div class='my-9  '>
                    
                    <div class='flex space-x-1 w-3/4 mx-auto'>
                            <div class='border-2 border-sky-500 '>
                                <img src={cartItem.image} class='' alt="" width="200" height="180"/>
                           </div>
                            <div class='grid grid-cols-3 mt-6 text-white text-3xl fw-bold'>
                                <h3 class='text-sky-400 ml-6  text-2xl'>{cartItem.name}</h3>
                                <p class='text-yellow-400 text-3xl'>
                                    {cartItem.qty} * ${cartItem.price}=${cartItem.qty * cartItem.price}
                                </p>
                                <div class="flex space-evenly h-9">
                                    <button onClick={()=>handleDecreament (cartItem)} class="bg-black text-white text-xl  px-5 border   mx-auto">-</button>
                                    <input class="w-12  text-black align-middle text-2xl pl-4 mx-auto" placeholder={cartItem.qty}/>
                                    <button onClick={()=>handleIncreament (cartItem)} class="bg-black text-white text-xl   px-5   mx-auto border">+</button>
                                    <button  class="bg-red-800 text-white text-xl   px-5   mx-auto border" onClick={()=>handleClose(cartItem)}>
                                        X
                                    </button>
                                </div>                            
                            </div>

                    </div>
                </div>
            </div>
        )

    }
const emptyCart=()=>{
    <div>
        <h3 class='text-yellow-400 text-4xl fw-bold'>Your cart is empty</h3>
    </div>
}
const button=()=>{
    return(
        <div>
            <Link to='/'>
                <button class='bg-indigo-900 text-white p-4 my-5 '>
                    Proceed to Checkout
                </button>
            </Link>
        </div>
    )
}
    return (
      
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </> 
       
    )
}



export default Cart;