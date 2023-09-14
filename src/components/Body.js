import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


function filterData(searchText, restaurants){
  const filterData = restaurants.filter( (restaurant) => 
  restaurant.data.name.includes(searchText)
  );
  return filterData;

}

const Body = () => {
  const [ restaurants, setRestaurants] = useState(restaurantList);
  const [ searchText , setSearchText] = useState();


  useEffect (() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch ("http://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0247291&lng=77.5947532&&page_type=DESKTOP_WEB_LISTING" , {mode:"cors"});
    
    const json = await data.json();
    console.log(json);
     setRestaurants(json?.data?.card[2]?.data?.data?.cards);

  }
  console.log("render");
  
    return ( restaurants.length ===0)  ? <Shimmer/> :
    (
      <>
      <div className="search-container">
        <input type ="text" 
        className="search-input" 
        placeholder="Search" 
        value = {searchText}
        onChange = { (e) => {
        setSearchText(e.target.value);
        }
      }
      />
      <button className="search-btn" onClick={ () =>{
        const data = filterData( searchText, restaurants );
        setRestaurants(data);

      }
       }
       >Search </button>

      </div>
            <div className="restaurant-list">
              {restaurants.map((restaurant) => {
                return (
                  <RestaurantCard {...restaurant.data}  key = { restaurant.data.id} />);
                  
                 })}
                  
                    </div>
                
                    </>            
    )
                }
  

export default Body;