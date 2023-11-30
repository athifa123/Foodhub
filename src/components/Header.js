 import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
 
 export const Logo = () => {
        return(
                <div >
                        <img  className="w-20" alt = "logo" src = "https://media.glassdoor.com/sqll/4216939/foodhub-squareLogo-1637094965794.png">      
                        </img>
        
                </div>

        );
        
};
 
 const Header = () => {
        const [btnNameReact, setbtnNameReact ]  = useState("Login");
        const onlineStatus = useOnlineStatus();
    return ( 
            <div className="flex justify-between bg-orange-100 shadow-lg m-2 sm:bg-yellow-50 lg:bg-green-50 ">
                    <Logo />
                    <div className="flex items-center">
                            <ul className="flex p-4 m-4"> 
                                        <li className="px-4"> Online Status : { onlineStatus  ? "Online" : "Offline" } </li>
                                    <li className="px-4"><Link to = '/'> Home</Link></li>
                                    <li className="px-4">  <Link to = '/about'> About Us </Link></li>
                                    <li className="px-4">  <Link to = '/contact'> Contact </Link> </li>
                                    <li className="px-4"><Link to = '/grocery'> Grocery </Link></li>
                                    <li className="px-4"> Cart</li>
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


