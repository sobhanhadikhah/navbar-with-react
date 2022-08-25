import React from "react";
import 'tachyons';
import './Navbar.css'

const Navbar = ()=>{
        
        return(
            <nav className="nav" >
                
                <a  href="/Home" className="sitetite" > Site Title </a>
                <ul>
                    <Custumlink href={`/pricing`} >Pricing</Custumlink>
                    <Custumlink href={`/About`} >About</Custumlink>

                    
                </ul>
            </nav>
        )
}
const Custumlink = ({href,children ,...props})=>{
    const path = window.location.pathname;

    return(
    <li className={path=== href ? "active": ""} >
        <a href={href} {...props}>
            {children}
        </a>
                        
    </li>
    )
    
}
export default Navbar;