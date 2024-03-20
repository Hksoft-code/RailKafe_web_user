// import food from "./../../Assets/items.png";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Img from "./../../Assets/items.png";
import "./orderfood.css";
import NonVeg from "./../../Assets/nonveg.png";
import Veg from "./../../Assets/veg.png";
import Img1 from "./../../Assets/offer1 (3).jpg";
import Img2 from "./../../Assets/offer1 (4).jpg";
import Img3 from "./../../Assets/offer1 (5).jpg";
// import TrainInfo from "../Otherpages/TrainInfo";
// import BoardingStation from "../BoardingStation";
import { useEffect, useState } from "react";
import {
  getResturantsByPnr,
  getResturantsByTrain,
  getStationsByTrainNumber,
} from "./Services/OrderfoodServices";
import TrainInfo from "../Otherpages/TrainInfo";
import { useDispatch } from "react-redux";
import {
  setMinimumCost,
  setRestaurantName,
  setStationName,
} from "../../Redux/Actions/menuAction";

function OrderFood() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [restaurantList, setRestaurantList] = useState();
  const [StationName, setStationName1] = useState("");
  const [selectedStation, setselectedStation] = useState("");
  const [setshowrestaurant, setSetshowrestaurant] = useState(false);
  const [stationCode, setStationCode] = useState();
  const [selectedStationCode, setSelectedStationCode] = useState("");
  const [resultDataitem, setResultDataitem] = useState("");
  const { trainNumber } = useParams();

  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const train_number = queryParams.get("train_number");
  console.log("station and pnr", selectedStationCode, trainNumber);

  const handleGetSelectedStation = (data) => {
    console.log("get Selected station Code", data);
    // Receive data from child component
    setselectedStation(data);
  };

  const placeholderImage =
    "https://play-lh.googleusercontent.com/93TI5hqzUF7_i61dah3PexL9DktIgsExTutymOXUkd7hdjlSx1P-3ZE0T-uZ2bnF5MXq";
  const onImageError = (e) => {
    e.target.src = placeholderImage;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const resultData = localStorage.getItem("TrainNameNumber");
    localStorage.removeItem("TrainNameNumber");
    setResultDataitem(JSON.parse(resultData));
    if (trainNumber.toString().length > 6) {
      console.log("working2", trainNumber > 6);
      getRestaurantByPnr();
    } else {
      console.log("working3");
      getRestaurantByTrain_Number(trainNumber, "RJY");
    }
  }, [selectedStation]);

  const getRestaurantByPnr = async () => {
    try {
      const response = await getResturantsByPnr(trainNumber);
      const restaurant = response?.data.data;
      setRestaurantList(restaurant?.resturantDetails);
      console.log("restaurant info response by pnr", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getRestaurantByTrain_Number = async () => {
    try {
      console.log("working1");
      const response = await getResturantsByTrain(trainNumber, "RJY");
      const restaurant = response?.data.data;
      setRestaurantList(restaurant?.resturants);
      console.log("restaurant info response", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const HandleRestId = (e) => {
    navigate(`/menu/${e.resturant_id}`);
    sessionStorage.setItem("res_id", e.resturant_id);
    // navigate("/menu", {
    //   state: { restaurant_id: e.resturant_id },
    // });
    console.log("resturant iddddd", e.resturant_id);
  };

  const handleChange = (event) => {
    const Station_Code = event.target.value;
    setSelectedStationCode(Station_Code);
    setStationName1(Station_Code ? Station_Code : StationName);
    handleGetSelectedStation(Station_Code);
    console.log("Station Code", Station_Code);
    setSetshowrestaurant(!setshowrestaurant);
  };
  console.log(handleChange);
  console.log("details of train and station", trainNumber, selectedStation);
  console.log("haha", resultDataitem);

  useEffect(() => {
    window.scrollTo(0, 0);
    getStationByTrain_Number();
  }, []);

  const getStationByTrain_Number = async () => {
    try {
      const response = await getStationsByTrainNumber();
      const dataForm = response?.data?.data;
      setStationCode(dataForm?.stations);
      console.log("station info response", response);
      console.log("stations name", stationCode);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // console.log("Stationsss", stationCode);
  // const today = new Date();

  // Format the date in YYYY-MM-DD format for the input field
  // const formattedDate = today.toISOString().split("T")[0];

  return (
    <>
      {trainNumber.toString().length < 6 ? (
        <>
          {restaurantList && restaurantList.length > 0 && setshowrestaurant ? (
            <>
              <section className="mb-24">
                <h1 className="text-center text-black font-bold text-xl my-3 mx-auto">
                  {/* Order Food in Exp {trainNumber} */}
                </h1>
                <div>
                  {restaurantList && restaurantList.length > 0 && (
                    <div className="d-flex my-3 mx-5 flex-col sm:flex-row justify-between items-center">
                      <h3 className="font-semibold my-2">
                        Restaurants at{" "}
                        {stationCode[0].StationsInfo.station_name}
                      </h3>
                      {/* <div className="bg-[#de4d11] shadow-custom w-fit h-auto rounded-lg my-2">
                    <p className="text-white font-semibold text-base p-2 mb-0">
                      List of New Restaurants
                    </p>
                  </div> */}
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
                          <div className="p-3  w-fit h-auto rounded-lg mt-2 mr-5">
                            <img
                              className="w-28"
                              alt=""
                              src=""
                              onError={onImageError}
                            />
                          </div>
                          <div className="flex items-start flex-col">
                            <h2 className="mb-0 text-black font-bold sm:text-2xl text-xl text-left">
                              {restaurant.resturant_name}
                            </h2>
                            <p className="mb-0 text-black font-semibold text-lg my-2">
                              Min Order: {restaurant.min_order_value}
                            </p>
                            <div className="d-flex items-center ">
                              <div className="d-flex bg-[#356D09FF] items-center p-2 mt-2 mr-2">
                                <p className="font-semibold text-white mb-0 mr-1">
                                  {restaurant.rating}
                                </p>{" "}
                                <FaStar style={{ color: "gold" }} />
                              </div>
                              <p className="text-gray-500 mb-0">
                                {restaurant.rating_count} rating
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between sm:h-40 h-auto sm:w-fit w-full sm:flex-row">
                          <div className=" w-fit h-auto rounded-lg">
                            <p className=" mb-0">
                              {restaurant.food_type === "non-veg" ? (
                                <img className="w-10" src={NonVeg} alt="" />
                              ) : (
                                <img className="w-10" src={Veg} alt="" />
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          HandleRestId(restaurant);
                          dispatch(
                            setRestaurantName(restaurant.resturant_name)
                          );
                          dispatch(setMinimumCost(restaurant.min_order_value));
                          dispatch(setStationName(restaurant.StationName));
                        }}
                        className="py-2 bg-[#de4d11] text-white font-semibold text-lg sm:w-11/12 w-full my-4 rounded-full sm:mx-5 mx-auto"
                      >
                        Food Menu
                      </button>
                    </div>
                  ))
                ) : (
                  <p>No restaurant found for the given train number.</p>
                )}
                {/* <TrainInfo trainname=" Purushottam Exp" trainnumber={trainNumber} /> */}
              </section>
            </>
          ) : (
            <>
              <h2 className="text-center font-semibold my-2">
                {" "}
                Order Food in Exp {trainNumber}
              </h2>
              <div>
                <form
                  action=""
                  className="flex sm:flex-row flex-col justify-between shadow-lg rounded-lg p-2 my-4 w-11/12 mx-auto "
                >
                  <div className="flex flex-col items-start w-full sm:mx-3 mx-auto">
                    <label htmlFor="" className="font-semibold mb-1">
                      Bording Date:
                    </label>
                    <input
                      type="date"
                      name=""
                      id=""
                      min={"formattedDate"}
                      className="p-1 rounded-md border-gray-300 w-full"
                      style={{ border: "2px #d1d5db solid" }}
                    />
                  </div>
                  <div className="flex flex-col items-start w-full sm:mx-3 mx-auto">
                    <label htmlFor="" className="font-semibold mb-1">
                      Bording Station:
                    </label>
                    <select
                      value={selectedStationCode}
                      onChange={handleChange}
                      name=""
                      id=""
                      className="border-2 py-1 rounded-md border-gray-300 w-full"
                    >
                      {stationCode?.map((item, index) => (
                        <option key={index} value={item?.station_code}>
                          {item?.StationsInfo?.station_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </form>
                <div>No restaurant available</div>
              </div>
            </>
          )}
          <div>
            <section className="mb-24">
              <Link
                to="/best-offer"
                className="py-2  bg-[#DC3545] no-underline text-white my-3 w-11/12 mx-auto rounded-md block"
              >
                Check Out our Best Offer
              </Link>
              <div className="flex flex-row justify-evenly items-center">
                <img src={Img1} className="my-4 mx-1 w-1/4" alt="" />
                <img src={Img2} className="my-4 mx-1 w-1/4" alt="" />
                <img src={Img3} className="my-4 mx-1 w-1/4" alt="" />
              </div>
              <TrainInfo trainname={resultDataitem} />
            </section>
          </div>
        </>
      ) : (
        <>
          {restaurantList ? (
            restaurantList.map((restaurant, index) => (
              <div
                key={index}
                className="shadow-custom my-4 mt-8 p-3 rounded-lg mx-3"
              >
                <div className="flex justify-between items-start flex-col sm:flex-row md:mx-12">
                  <div className="flex items-start">
                    <div className="p-3 bg-black w-fit h-auto rounded-lg mt-2 mr-5">
                      <img className="w-28" src={Img} alt="" />
                    </div>
                    <div className="flex items-start flex-col">
                      <h2 className="mb-0 text-black font-bold sm:text-2xl text-xl text-left">
                        {restaurant.resturant_name}
                      </h2>
                      <p className="mb-0 text-black font-semibold text-lg my-2">
                        Min Order: {restaurant.min_order_value}
                      </p>
                      <div className="flex items-center">
                        <div className="bg-[#356D09FF] flex items-center p-2 mt-2 mr-2 rounded">
                          <p className="font-semibold text-white mb-0 mr-1">
                            {restaurant.rating}
                          </p>{" "}
                          <FaStar style={{ color: "gold" }} />
                        </div>
                        <p className="text-gray-500 mb-0">
                          {restaurant.rating_count} rating
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end sm:h-40 h-auto sm:w-fit w-full sm:flex-row">
                    <div className="w-fit h-auto rounded-lg">
                      <p className="mb-0">
                        {restaurant.food_type === "non-veg" ? (
                          <img className="w-10" src={NonVeg} alt="" />
                        ) : (
                          <img className="w-10" src={Veg} alt="" />
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    HandleRestId(restaurant);
                    dispatch(setRestaurantName(restaurant.resturant_name));
                    dispatch(setMinimumCost(restaurant.min_order_value));
                    dispatch(setStationName(restaurant.station_code));
                  }}
                  className="py-2 bg-[#de4d11] text-white font-semibold text-lg sm:w-11/12 w-full my-4 rounded-full sm:mx-5 mx-auto"
                >
                  Food Menu
                </button>
              </div>
            ))
          ) : (
            <p>No restaurant found for the given train number.</p>
          )}
          <div>
            <section className="mb-24">
              <Link
                to="/best-offer"
                className="py-2  bg-[#DC3545] no-underline text-white my-3 w-11/12 mx-auto rounded-md block"
              >
                Check Out our Best Offer
              </Link>
              <div className="flex flex-row justify-evenly items-center">
                <img src={Img1} className="my-4 mx-1 w-1/4" alt="" />
                <img src={Img2} className="my-4 mx-1 w-1/4" alt="" />
                <img src={Img3} className="my-4 mx-1 w-1/4" alt="" />
              </div>
              <TrainInfo trainname={resultDataitem} />
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default OrderFood;
