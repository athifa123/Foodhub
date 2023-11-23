import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { RouterProvider, createBrowserRouter , Outlet } from "react-router-dom";


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
                <Outlet/>

                </>     
        );
};


const appRouter = createBrowserRouter([
        {
                path: '/',
                element: <AppLayout/>,
                children : [
                        {
                                path: '/',
                                element : <Body/>,
                        },
                        {
                                path :'/about',
                                element: <About/>,
                        },
                        {
                                path : '/Contact',
                                element : <Contact/>,
                        },
                        {
                                path : '/restaurants/:resId',
                                element : <RestaurantMenu/> 
                        },
                        

                ],
                errorElement: <Error/>,
        },
        
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={appRouter}/>);
