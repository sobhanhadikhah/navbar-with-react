import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './Home_pages/Home';
import Navbar from './Navbar';
import Pricing from './Home_pages/pricing';
import About from './Home_pages/About'
const App = ()=>{
  let path = window.location.pathname;
  let component   
     switch(path){
      case "/":
        component = <Home/>
        break
      case "/pricing":
          component  = <Pricing/>
        break
      case "/About":
        component = <About/>
        break
      default:
        component = <Home/>
        break
    }

    
    return(
      <div>
        <Navbar/>
        <div className='container' >
        {component}

        </div>
      </div>
    )
  
}

export default App;
