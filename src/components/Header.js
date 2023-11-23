 import { useState } from "react";
import { Link } from "react-router-dom";
 
 export const Logo = () => {
        return(
                <div className="logoimg">
                        <img  alt = "logo" src = "https://media.glassdoor.com/sqll/4216939/foodhub-squareLogo-1637094965794.png">      
                        </img>
        
                </div>

        );
        
};
 
 const Header = () => {
        const [btnNameReact, setbtnNameReact ]  = useState("Login");
    return (
            <div className="header-elements">
                    <Logo />
                    <div className="nav-items">
                            <ul> 
                                    <li><Link to = '/'> Home</Link></li>
                                    <li>  <Link to = '/about'> About Us </Link></li>
                                    <li >  <Link to = '/contact'> Contact </Link> </li>
                                    <li> Cart</li>
                                    <button className="Loginbtn" onClick={() => {
                                         btnNameReact=== "Login" ? 
                                         setbtnNameReact ("Logout")
                                          : setbtnNameReact("Login");
                                         
                                          }}> {btnNameReact} </button>
                                    
                            </ul>
                    </div>
            </div>
    );
};


export default Header;


