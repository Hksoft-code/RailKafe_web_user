// import food from "./../../Assets/items.png";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
// import Img from "./../../Assets/items.png";
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
import { useDispatch, useSelector } from "react-redux";
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
  const [textMessage, setTestMessage] = useState("Train Number");

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
    "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg";
  const onImageError = (e) => {
    e.target.src = placeholderImage;
  };
  const stationCodeByTrainNumber = useSelector(
    (state) => state.station.stationCode
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const resultData = localStorage.getItem("trainNameNumber");
    setResultDataitem(resultData);
    // console.log("statttttttttttttttttttttttt", stationCodeByTrainNumber);
    if (trainNumber.toString().length > 6) {
      // console.log("working2", trainNumber > 6);
      setTestMessage("PNR Number");
      getRestaurantByPnr();
    } else {
      // console.log("working3");
      getRestaurantByTrain_Number(trainNumber, stationCodeByTrainNumber);
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
      // console.log("working1");
      const response = await getResturantsByTrain(
        trainNumber,
        stationCodeByTrainNumber
      );
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
    sessionStorage.removeItem("stationCodetakesfromBoardingStation");
    localStorage.removeItem("trainNameNumber");
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
  console.log(
    "details of train and station",
    trainNumber,
    stationCodeByTrainNumber
  );
  console.log("haha", resultDataitem);

  useEffect(() => {
    window.scrollTo(0, 0);
    getStationByTrain_Number();
  }, []);

  const getStationByTrain_Number = async () => {
    try {
      const response = await getStationsByTrainNumber(trainNumber);
      const dataForm = response?.data?.data;
      setStationCode(dataForm?.stations);
      console.log("station info response", response);
      console.log("stations name", stationCode);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log("ressssssssssssssssssssssssssssssssssssssssssss",restaurantList);
  // console.log("Stationsss", stationCode);
  // const today = new Date();

  // Format the date in YYYY-MM-DD format for the input field
  // const formattedDate = today.toISOString().split("T")[0];

  return (
    <>
      <>
        <section className="mb-10">
          <h1 className="text-center text-black font-bold text-xl my-3 mx-auto">
            {/* Order Food in Exp {trainNumber} */}
          </h1>
          {/*  */}
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
            <p>
              No restaurant found for the given {textMessage} {trainNumber}.
            </p>
          )}
          {/* <TrainInfo trainname=" Purushottam Exp" trainnumber={trainNumber} /> */}
        </section>
      </>

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
  );
}

export default OrderFood;
