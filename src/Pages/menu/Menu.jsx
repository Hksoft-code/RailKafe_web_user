import { useEffect, useState } from "react";
import Food from "./../../Assets/items.png";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ImageSlider from "./../Dashboard/ImageSlider.jsx";
import "./menu.css";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import { useNavigate } from "react-router-dom";
import CustomPagination from "../Otherpages/CustomPagination.jsx";
import { FoodMenuDetails } from "./service/FoodMenu_Get.jsx";
import PropTypes from "prop-types";

const Menu = ({ resturant_id }) => {
  console.log("restauuuu", resturant_id);
  const [showAddToCartInfo, setShowAddToCartInfo] = useState(false);
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const pageSize = 5; // Number of items per page
  const [currentPageMap, setCurrentPageMap] = useState({ All: 1 });
  const [activeButton, setActiveButton] = useState("All");
  // console.log("restaurantdetails", restaurantDetails);
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
      const response = await FoodMenuDetails("SE69HQ");
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

  const handleMinusButtonClick = () => {
    // Logic to handle the click event for the "-" button
    setShowAddToCartInfo(false);
  };

  const handlePlusButtonClick = () => {
    // Logic to handle the click event for the "+" button
    setShowAddToCartInfo(true);
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
  return (
    <section className="mb-24">
      <h1 className="text-center font-bold text-black text-xl my-4 mx-auto">
        Feeders Kitchen
      </h1>
      <div className="w-fit d-flex flex-col items-start justify-center rounded-lg border border-gray-900 border-opacity-17 shadow-lg sm:px-32 py-2 mx-auto px-5">
        <p className="text-black font-semibold">
          <span className="text-[#de4d11] font-semibold ">
            Restaurant Name:
          </span>{" "}
          Feeders Kitchen{" "}
        </p>
        <p className="text-black font-semibold">
          <span className="text-[#de4d11] font-semibold ">Station Name:</span>{" "}
          JBY N2M Delhi{" "}
        </p>
        <p className="text-black font-semibold">
          <span className="text-[#de4d11] font-semibold ">Minimum Order:</span>{" "}
          ₹30
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
        {activeButton && (
          <div>
            {getCurrentContent().map((item, index) => (
              <div
                key={index}
                className="d-flex shadow-custom sm:flex-row flex-col-reverse items-start justify-evenly px-2 sm:w-10/12 sm:mx-auto custommargin  rounded-lg my-4 py-3"
              >
                <div className="d-flex px-3 sm:w-4/12 w-full flex-col items-start ">
                  <h4 className="text-black font-bold">{item.food_name}</h4>
                  <h4 className="text-black font-bold">
                    {item.selling_price} ₹
                  </h4>
                  <p className="text-justify font-semibold text-gray-400 ">
                    {item.food_discription}
                  </p>
                  <div
                    className="bg-[#DE4D11] w-fit  text-lg text-white d-flex items-center"
                    style={{ borderRadius: "2rem" }}
                  >
                    <button
                      className="bg-[#DE4D11] text-white font-semibold text-lg p-2"
                      style={{ borderRadius: "2rem 0rem 0rem 2rem" }}
                      onClick={handleMinusButtonClick}
                    >
                      -
                    </button>
                    <h6 className="mb-0 p-2">Add</h6>
                    <button
                      className="bg-[#DE4D11] text-white font-semibold text-lg p-2"
                      style={{ borderRadius: "0rem 2rem 2rem 0rem" }}
                      onClick={handlePlusButtonClick}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="d-flex items-start justify-between md:justify-end">
                  <img className="w-2/4 mb-2" src={Food} alt="Food" />
                  <Checkbox
                    style={{ color: "red" }}
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <CustomPagination
        currentPage={currentPageMap[activeButton] || 1}
        totalPages={getTotalPages()}
        onPageChange={handlePageChange}
      />
      {showAddToCartInfo && (
        <div className="bg-gradient-to-b from-green-500 to-green-600 px-8 py-6 mt-2 flex items-center justify-between fixed sm:w-3/4 w-full bottom-0 z-20 rounded-sm">
          <div>
            <h5 className="text-white font-bold">2 Items(s) Added</h5>
            <p className="text-gray-300 font-semibold mb-0">
              ₹340 plus taz items
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
  );
};
Menu.propTypes = {
  resturant_id: PropTypes.number.isRequired,
};

export default Menu;
