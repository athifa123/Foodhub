const IMG_CDN_URL =  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" ;

const RestaurantCard = ({name , cuisines , cloudinaryImageId , lastMileTravelString}) => {
  
    return (
            <div className="restaurantcard">
                    <img src ={IMG_CDN_URL
                     +cloudinaryImageId}></img>
                    <h4> {name} </h4>
                    <h5> {cuisines.join(", ")}</h5>
                    <h6> {lastMileTravelString}</h6>
            </div>

    );
};

export default RestaurantCard;