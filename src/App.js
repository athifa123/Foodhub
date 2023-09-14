import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./config";

/*
- Header 
        logo
        navitems
                -home 
                about 
                contact
                cart
-Body
        search
        restaurantList
                -reaturant card
                        image
                        name
                        cuisine
                        rating
-Footer
        copyright
        links




*/





const AppLayout = () =>{
        return(
                <> 
                <Header />
                <Body />
                <Footer />

                </>     
        );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
