import { useEffect, useState } from "react";
import Food from "./../../Assets/items.png";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ImageSlider from "./../Dashboard/ImageSlider.jsx";
import "./menu.css";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import { useNavigate, useParams } from "react-router-dom";
import CustomPagination from "../Otherpages/CustomPagination.jsx";
import { FoodMenuDetails } from "./service/FoodMenu_Get.jsx";
// import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { AddCart, RemoveFromCart } from "../../Redux/OrderSystem.js";

const Menu = () => {
  // const location = useLocation();
  const { rest_id } = useParams();

  // Access the state object from location
  // const { restaurant_id } = location.state;
  console.log("restauuuu", rest_id);
  const dispatch = useDispatch();
  const { cart, totalQuantity, totalPrice } = useSelector((item) => item.order);
  console.log("details of cart", cart);
  // const [showAddToCartInfo, setShowAddToCartInfo] = useState(false);
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const pageSize = 5; // Number of items per page
  const [currentPageMap, setCurrentPageMap] = useState({ All: 1 });
  const [activeButton, setActiveButton] = useState("All");

  const handleButtonClick = (name) => {
    setActiveButton(name);
    setCurrentPageMap((prevMap) => ({
      ...prevMap,
      [name]: 1, // Reset currentPage to 1 when a category button is clicked
    }));
  };

  // Calculate total number of pages based on pageSize and current category
  const getTotalPages = () => {
    const currentContent =
      buttonsData.find((btn) => btn.name === activeButton)?.content || [];
    return Math.ceil(currentContent.length / pageSize);
  };
  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = async () => {
    try {
      const response = await FoodMenuDetails(rest_id);
      // const restaurant = response?.data.data;
      console.log("restaurant info response", response?.data.data);
      setRestaurantDetails(response?.data.data.resturantDetails);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Get the current page's items based on pageSize and currentPage
  const getCurrentContent = () => {
    const currentContent =
      buttonsData.find((btn) => btn.name === activeButton)?.content || [];
    const startIndex = (currentPageMap[activeButton] - 1) * pageSize;
    const slicedContent = currentContent.slice(
      startIndex,
      startIndex + pageSize
    );

    // Map over the sliced content and add the restaurantDetails data
    const contentWithDetails = slicedContent.map((item) => {
      const restaurantDetail = restaurantDetails.find(
        (detail) => detail.id === item.id
      );
      return { ...item, ...restaurantDetail };
    });

    console.log("contentarray", contentWithDetails);
    return contentWithDetails;
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPageMap((prevMap) => ({
      ...prevMap,
      [activeButton]: pageNumber,
    }));
  };
  const navigate = useNavigate();
  const handlesubmit = () => {
    navigate("/payment");
  };

  const foodTypes = Array.from(
    new Set(restaurantDetails.map((item) => item.food_type))
  );

  // Create buttons data based on unique food types
  const buttonsData = [
    { name: "All", content: restaurantDetails },
    ...foodTypes.map((type) => ({
      name: type,
      content: restaurantDetails.filter((item) => item.food_type === type),
    })),
  ];
  const { restaurantName, stationName, minimumCost } = useSelector(
    (state) => state.menu
  );
  return (
    <>
      {restaurantDetails ? (
        <section className="mb-24">
          <h1 className="text-center font-bold text-black text-xl my-4 mx-auto">
            {restaurantName}
          </h1>
          <div className="w-fit d-flex flex-col items-start justify-center rounded-lg border border-gray-900 border-opacity-17 shadow-lg sm:px-32 py-2 mx-auto px-5">
            <p className="text-black font-semibold">
              <span className="text-[#de4d11] font-semibold ">
                Restaurant Name:
              </span>{" "}
              {restaurantName}{" "}
            </p>
            <p className="text-black font-semibold">
              <span className="text-[#de4d11] font-semibold ">
                Station Name:
              </span>{" "}
              {stationName}{" "}
            </p>
            <p className="text-black font-semibold">
              <span className="text-[#de4d11] font-semibold ">
                Minimum Order:
              </span>{" "}
              ₹{minimumCost}
            </p>
          </div>

          <div className="my-2">
            <ImageSlider />
          </div>

          <div>
            {buttonsData.map((button, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(button.name)}
                className={`buttons p-2 m-2 rounded-2xl ${
                  activeButton === button.name ? "active" : ""
                }`}
              >
                {button.name}
              </button>
            ))}

            {/* Show content based on the active button */}
            {activeButton ? (
              <div>
                {getCurrentContent().map((item, index) => (
                  <>
                    <div className="shadow-md px-2 py-2 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-lg leading-6 font-medium text-gray-900">
                            Veg mini thali
                          </div>
                          <div className="text-sm leading-6 font-medium text-gray-900">
                            In thalis
                          </div>
                          <div className="text-sm leading-6 font-medium text-gray-900">
                            220
                          </div>
                          <div className="text-sm leading-6 font-medium text-gray-900">
                            seasonal veg
                          </div>
                        </div>
                        <div className="mt-4 text-center">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPE1cY2FnbHeMJfA-7DhfTAA2EVmwpeEVygA&usqp=CAU"
                            alt=""
                            className="max-w-lg"
                          />
                          <button className="bg-pink-200 border-2 rounded-md -mt-10 pl-3 pr-3 border-pink-400">
                            ADD +
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            ) : (
              <>
                <p className="text-center">no food menu available now.</p>
              </>
            )}
          </div>
          <CustomPagination
            currentPage={currentPageMap[activeButton] || 1}
            totalPages={getTotalPages()}
            onPageChange={handlePageChange}
          />
          {totalQuantity > 0 && (
            <div className="bg-gradient-to-b from-green-500 to-green-600 px-8 py-6 mt-2 flex items-center justify-between fixed sm:w-3/4 w-full bottom-0 z-20 rounded-sm">
              <div>
                <h5 className="text-white font-bold">
                  {totalQuantity} Items(s) Added
                </h5>
                <p className="text-gray-300 font-semibold mb-0">
                  {totalPrice}₹ Total items price
                </p>
              </div>
              <button
                className=" text-gray-700 bg-white font-bold p-3 rounded-lg"
                onClick={handlesubmit}
              >
                View Cart
              </button>
            </div>
          )}
        </section>
      ) : (
        <p>No food menu found</p>
      )}
    </>
  );
};
export default Menu;
