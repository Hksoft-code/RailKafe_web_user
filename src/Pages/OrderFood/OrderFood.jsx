import food from "./../../Assets/items.png";
import { useLocation, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./orderfood.css";
import TrainInfo from "../Otherpages/TrainInfo";
import BoardingStation from "../BoardingStation";
import { useEffect, useState } from "react";
import { getResturantsByTrain } from "./Services/OrderfoodServices";

function OrderFood() {
  const [restaurantList, setRestaurantList] = useState();
  const [selectedStation, setselectedStation] = useState("");

  const { trainNumber } = useParams();
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const train_number = queryParams.get("train_number");
  console.log("train_number", trainNumber);

  const handleGetSelectedStation = (data) => {
    console.log("get Selected station Code", data);
    // Receive data from child component
    setselectedStation(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (selectedStation != null) {
      getRestaurantByTrain_Number(trainNumber, "RJY");
    }
  }, [selectedStation]);

  const getRestaurantByTrain_Number = async () => {
    try {
      const response = await getResturantsByTrain(trainNumber, "RJY");
      const restaurant = response?.data.data;
      setRestaurantList(restaurant?.resturants);
      console.log("restaurant info response", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const restaurants = {
  //   12345: [
  //     {
  //       name: "Feeder Kitchen",
  //       location: "New Delhi",
  //       cuisine: "North Indian, Fast Food, Chinese, Pizza",
  //     },
  //     {
  //       name: "Tasty Bites",
  //       location: "Mumbai",
  //       cuisine: "South Indian, Fast Food, Italian, Chinese",
  //     },
  //     {
  //       name: "Crispy Crunch",
  //       location: "Bangalore",
  //       cuisine: "Italian, Fast Food, Mexican, Thai",
  //     },
  //   ],
  //   67890: [
  //     {
  //       name: "Spice Paradise",
  //       location: "Hyderabad",
  //       cuisine: "Indian, Chinese, Continental",
  //     },
  //     {
  //       name: "Flavors of India",
  //       location: "Chennai",
  //       cuisine: "South Indian, North Indian, Seafood",
  //     },
  //   ],
  //   24680: [
  //     {
  //       name: "Green Garden",
  //       location: "Pune",
  //       cuisine: "Vegetarian, Indian, Chinese",
  //     },
  //   ],
  //   13579: [
  //     {
  //       name: "Ocean Delight",
  //       location: "Goa",
  //       cuisine: "Seafood, Goan, Continental",
  //     },
  //     {
  //       name: "Golden Grill",
  //       location: "Jaipur",
  //       cuisine: "Rajasthani, North Indian",
  //     },
  //   ],
  //   98765: [
  //     {
  //       name: "Dhaba Express",
  //       location: "Amritsar",
  //       cuisine: "Punjabi, North Indian",
  //     },
  //     {
  //       name: "Coastal Flavors",
  //       location: "Kochi",
  //       cuisine: "Kerala, Seafood, South Indian",
  //     },
  //   ],
  // };

  // const restaurant = restaurants[trainNumber];

  return (
    <>
      <BoardingStation sendSelectedStationCode={handleGetSelectedStation} />
      <section className="mb-24">
        <h1 className="text-center text-black font-bold text-xl my-3 mx-auto">
          Order Food in Exp {trainNumber}
        </h1>
        <div>
          {restaurantList && restaurantList.length > 0 && (
            <div className="d-flex my-3 mx-5 flex-col sm:flex-row justify-between items-center">
              <h3 className="font-semibold my-2">
                Restaurants at {restaurantList[0].location}
              </h3>
              <div className="bg-[#de4d11] shadow-custom w-fit h-auto rounded-lg my-2">
                <p className="text-white font-semibold text-base p-2 mb-0">
                  List of New Restaurants
                </p>
              </div>
            </div>
          )}
        </div>
        {restaurantList ? (
          restaurantList.map((restaurant, index) => (
            <div
              key={index}
              className="shadow-custom my-4 mt-8 p-3 rounded-lg mx-3"
            >
              <div className="flex justify-between items-start flex-col sm:flex-row md:mx-12">
                <div className="flex items-start">
                  <div className="p-3 bg-black w-fit h-auto rounded-lg mt-2 mr-5">
                    <img className="w-28" src={food} alt="" />
                  </div>
                  <div className="flex items-start flex-col">
                    <h2 className="mb-0 text-black font-bold sm:text-2xl text-xl">
                      {restaurant.name}
                    </h2>
                    <p className="mb-0 text-black font-semibold text-lg my-2">
                      Min Order: ₹17
                    </p>
                    <div className="d-flex items-center ">
                      <div className="d-flex bg-[#356D09FF] items-center p-2 mt-2 mr-2">
                        <p className="font-semibold text-white mb-0 mr-1">
                          4.0
                        </p>{" "}
                        <FaStar style={{ color: "gold" }} />
                      </div>
                      <p className="text-gray-500 mb-0">3.5k rating</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between sm:h-40 h-auto sm:w-fit w-full sm:flex-row">
                  <div className="bg-gray-300 w-fit h-auto rounded-lg">
                    <p className="text-green-800  font-bold text-base p-2 mb-0">
                      Veg
                    </p>
                  </div>
                </div>
              </div>
              <button className="py-2 bg-[#de4d11] text-white font-semibold text-lg sm:w-11/12 w-full my-4 rounded-full sm:mx-5 mx-auto">
                Order Now
              </button>
            </div>
          ))
        ) : (
          <p>No restaurant found for the given train number.</p>
        )}
        <TrainInfo trainname=" Purushottam Exp" trainnumber={trainNumber} />
      </section>
    </>
  );
}

export default OrderFood;
