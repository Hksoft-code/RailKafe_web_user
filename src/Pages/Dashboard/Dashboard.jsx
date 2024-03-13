import { useState } from "react";
import "./dashboard.css";
import delicioustext from "../../Assets/delicioustext.png";
import { Link } from "react-router-dom";
import items from "../../Assets/home (2).png";
import groupIcon from "../../Assets/Person.png";
import adds from "../../Assets/adds.png";
import ImageSlider from "./ImageSlider";
import IRCTCPartner from "../IRCTC partner/IRCTCPartner";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import UpComingFood from "../IRCTC partner/UpcomingOrder";
import Footer from "./../../Common-Components/Footer.jsx";
import TrainSelectInput from "./../Otherpages/TrainSelectInput.jsx";
import { getTrainDetailsByPnr } from "../OrderFood/Services/OrderfoodServices.jsx";
function Dashboard() {
  // const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("pnr");
  const [pnr, setPnr] = useState("");
  // const [trainNumber, setTrainNumber] = useState("");
  // const navigate = useNavigate();

  // const handleTrainNumberChange = (event) => {
  //   setTrainNumber(event.target.value);
  // };

  // const handleSubmitTrainNumber = (event) => {
  //   event.preventDefault();
  //   navigate(`/order-food/${trainNumber}`);
  // };
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  const SearchValueByTrain = async (event) => {
    console.log("working");
    event.preventDefault();
    if (pnr >= 10) {
      console.log("pnrr working");
      async (pnr) => {
        try {
          // Perform a search based on the input value
          const response = await getTrainDetailsByPnr(pnr);
          console.log("response for train list by pnr", response?.data.data);
          const trainValue = response?.data.data;
          console.log("Train Value by pnr", trainValue);
          setPnr(trainValue?.train);
        } catch (error) {
          console.error("Error searching:", error);
        }
      };
    } else {
      alert("please submit correct pnr number");
    }
  };

  // const trainNumbersArray = ["12345", "67890", "24680", "13579", "98765"];
  console.log("pnr", pnr);
  return (
    <div>
      <div className="uppermain1">
        <div className="d-flex items-center justify-around px-4 py-0 sm:p-12 ">
          <img className="w-2/4 sm:w-2/5" src={delicioustext} alt="Delicious" />
          <img className="w-1/2 sm:w-1/4" src={items} alt="tasty" />
        </div>
      </div>
      <div className="backcolor">
        <h1 className="text-center font-bold py-4 ">
          Order Food on Train Online
        </h1>
        <div className="backcolor ">
          <div className="pt-2">
            <div className="mx-auto flex justify-around p-2 pt-2 box-shadow w-11/12 sm:w-2/4">
              <button
                className={` options ${activeButton === "pnr" ? "active" : ""}`}
                onClick={() => handleButtonClick("pnr")}
              >
                Search By PNR
              </button>
              <button
                className={` options ${
                  activeButton === "train" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("train")}
              >
                Search By TRAIN
              </button>
              <button
                className={` options ${
                  activeButton === "whatsapp" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("whatsapp")}
              >
                WhatsApp
              </button>
            </div>
          </div>
          <div className="mt-3  flex justify-center">
            {activeButton === "pnr" && (
              <form
                onSubmit={SearchValueByTrain}
                className="d-flex flex-row items-center w-10/12 sm:w-2/5 justify-between"
              >
                <input
                  placeholder="Enter PNR Number"
                  className="inputpnr mx-auto w-full"
                  type="text"
                  value={pnr}
                  onChange={(e) => setPnr(e.target.value)}
                  required
                />
                <button type="submit" className="button1 sm:my-0 my-4">
                  Submit
                </button>
              </form>
            )}
            {activeButton === "train" && (
              /* Dropdown menu with all train numbers */
              // <form
              //   onSubmit={handleSubmitTrainNumber}
              //   className="d-flex flex-row items-center w-10/12 sm:w-2/5 justify-between"
              // >
              //   <input
              //     type="text"
              //     list="trainNumbers"
              //     placeholder="Train Number"
              //     value={trainNumber}
              //     className="inputpnr mx-auto w-full"
              //     required
              //     onChange={handleTrainNumberChange}
              //   />
              //   <datalist id="trainNumbers">
              //     {trainNumbersArray.map((trainNumber, index) => (
              //       <option key={index} value={trainNumber} />
              //     ))}
              //   </datalist>
              //   <button type="submit" className="button1 sm:my-0 my-4">
              //     Submit
              //   </button>
              // </form>
              <TrainSelectInput />
            )}
            {/* Add similar conditional rendering for other buttons */}
            {activeButton === "whatsapp" && (
              <form
                onSubmit={"handleSubmit"}
                className="d-flex flex-row items-center w-10/12 sm:w-2/5 justify-between"
              >
                <input
                  placeholder="Whatsapp Number"
                  className="inputpnr  mx-auto w-full"
                  type="number"
                  required
                />
                <button type="submit" className="button1 sm:my-0 my-4">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <IRCTCPartner />

      <div className="pt-5 ">
        <div className=" d-flex justify-content-between gap-2 p-3 w-11/12 pt-2 group-ordering mx-auto">
          <div className="d-flex justify-content-around sm:gap-5 gap-1 align-items-center sm:px-10 px-1">
            <img src={groupIcon} className="p-2" alt="" />
            <div>
              <h3 className="text-left text-black font-bold ">
                Group food ordering in train
              </h3>
              <h6 className="text-justify text-black font-semibold">
                Travelling in a group of 10 or more
              </h6>
            </div>
          </div>
          <div className="d-flex align-items-center ">
            <Link to="/book-group-order">
              {" "}
              <IoIosArrowForward className="text-gray-500 text-xl" />
            </Link>
          </div>
        </div>
      </div>

      <div className="my-5">
        <ImageSlider deviceType="desktop" images={adds} />
      </div>

      <div>
        <h1 className="text-center text-black font-bold text-3xl uppercase my-3 py-2 px-2">
          Latest Order
        </h1>
        <div className="">
          <UpComingFood />
        </div>
      </div>
      <div className="relative my-10">
        <button
          className="inline-flex max-w-fit items-center justify-center w-full px-4 py-2 bg-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
          onClick={toggleDropdown}
        >
          Explore More <IoIosArrowDown className="ml-1" />
        </button>
        {isOpen && (
          <div className="absolute mx-auto w-90 top-0 mt-2 -translate-y-full w-full px-4 py-2 bg-gray-300 rounded-md shadow-lg z-10">
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              {/* Add more text here */}
            </p>
          </div>
        )}
      </div>

      <div>
        <button className="button1 px-5 mb-4 ">Sign up as Partner</button>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
