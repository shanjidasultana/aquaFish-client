import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Login from './Components/buttons/Login';
import Register from './Components/buttons/Register';
// import SignUp from './Components/buttons/SignUp';
import Cart from './Components/Cart';
import Contact from './Components/Contact/Contact';
// import CartHome from './Components/carthome/CartHome';
import Fish from './Components/Fishes/Fish';
import Fishes from './Components/Fishes/Fishes';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';


function App() {
  return (
    <div class="App">
     <BrowserRouter>
            <Header></Header>
           <Routes>
             <Route path='/' exact element={<Home/>}></Route>
             {/* <Route path='/' exact element={<CartHome/>}></Route> */}
             <Route exact path='/products'  element={<Fishes/>}>
             </Route>
             <Route exact path='/products/:productId'  element={<Fish/>}>
             </Route>
             <Route path='/cart'  element={<Cart/>}></Route>
            {/* <Route path='/blog'  element={<Fish/>}></Route> */}
             <Route path='/about' element={<About/>}></Route> 
             <Route path='/login'  element={<Login/>}></Route>
             <Route path='/register'  element={<Register/>}></Route> 
             <Route path='/contact'  element={<Contact/>}></Route> 
           </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
