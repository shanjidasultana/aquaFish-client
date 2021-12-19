const cart =[];
const handleCart=(state=cart,action)=>{
    
    const product =action.payload;
    switch(action.type){
        case "ADDITEM":
            const exist= state.find((x)=>x._id===product._id);
            if(exist){
                return state.map((x)=>
                x._id === product._id ?{...x,qty:x.qty + 1 }: x
                )
            }else{
                const product=action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;

            case 'DELITEM':
                const exist1= state.find((x)=> x._id ===product._id);
                if(exist1.qty ===1){
                    return state.filter((x)=>x._id !== exist._id);

                }else{
                    return state.map((x)=>
                        x._id === product._id?{...x,qty:x.qty-1}:x
                        )
                };
            break;
            case 'INITEM':
                const exist2= state.find((x)=> x._id ===product._id);
                if(exist2.qty ===1){
                    return state.filter((x)=>x._id !== exist._id);

                }else{
                    return state.map((x)=>
                        x._id === product._id?{...x,qty:x.qty+1}:x
                        )
                };
            break;

            case "REMOVEITEM":
            const exist3= state.filter((x)=>x._id !==product._id);
                return exist3
            break;
           
    
        default:
            return state;
            break;   
    }
};

export default handleCart;