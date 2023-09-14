 export const Logo = () => {
        return(
                <div className="logoimg">
                        <img  alt = "logo" src = "https://media.glassdoor.com/sqll/4216939/foodhub-squareLogo-1637094965794.png">      
                        </img>
        
                </div>

        );
        
};
 
 const Header = () => {
    return (
            <div className="header-elements">
                    <Logo />
                    <div className="nav-items">
                            <ul>
                                    <li> Home</li>
                                    <li> About Us</li>
                                    <li> Contact</li>
                                    <li> Cart</li>
                            </ul>
                    </div>
            </div>
    );
};


export default Header;


