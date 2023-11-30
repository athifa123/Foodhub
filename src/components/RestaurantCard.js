const IMG_CDN_URL =  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" ;

const RestaurantCard = ({name , cuisines , cloudinaryImageId , lastMileTravelString}) => {
  
    return (
            <div className="m-4 p-4 w-[250px]  rounded-lg bg-gray-100 hover:bg-gray-300" >
                    <img  className= " rounded-lg" src ={IMG_CDN_URL
                     +cloudinaryImageId}></img>
                    <h4 className="font-bold py-4 text-lg"> {name} </h4>
                    <h5> {cuisines.join(", ")}</h5>
                    <h6> {lastMileTravelString}</h6>
            </div>

    );
};

export default RestaurantCard;