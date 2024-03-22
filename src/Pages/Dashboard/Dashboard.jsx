// import { useState } from "react";
// import "./dashboard.css";
// import delicioustext from "../../Assets/delicioustext.png";
// import { Link } from "react-router-dom";
// import items from "../../Assets/home (2).png";
// import groupIcon from "../../Assets/Person.png";
// import adds from "../../Assets/adds.png";
// import ImageSlider from "./ImageSlider";
// import IRCTCPartner from "../IRCTC partner/IRCTCPartner";
// import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
// import UpComingFood from "../IRCTC partner/UpcomingOrder";
// import Footer from "./../../Common-Components/Footer.jsx";
// import CustomSelect from "../Otherpages/TrainSelectInput.jsx";
// import BordingModal from "./BordingModal.jsx";

// function Dashboard() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeButton, setActiveButton] = useState("pnr");
//   // const [trainNumber, setTrainNumber] = useState("");
//   const [PnrNumber, setPnrNumber] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // const navigate = useNavigate();
//   const handleButtonClick = (buttonName) => {
//     setActiveButton(buttonName);
//   };

//   const phoneNumber = "9771231434";
//   const redirectToWhatsApp = (e) => {
//     e.preventDefault();
//     // Construct the WhatsApp URL
//     const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

//     // Redirect the user to WhatsApp
//     window.location.href = whatsappUrl;
//   };
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleInputChange = (e) => {
//     e.preventDefault();
//     setPnrNumber(e.target.value);
//   };

//   // const handleSubmit = () => {
//   //   if (trainNumber) {
//   //     navigate(`/order-food/${trainNumber}`);
//   //   }
//   // };
//   return (
//     <div>
//       <div className="uppermain1">
//         <div className="d-flex items-center justify-around px-4 py-0 sm:p-12 ">
//           <img className="w-2/4 sm:w-2/5" src={delicioustext} alt="Delicious" />
//           <img className="w-1/2 sm:w-1/4" src={items} alt="tasty" />
//         </div>
//       </div>
//       <div className="backcolor">
//         <h1 className="text-center font-bold pt-4 sm:pb-4 pb-0 ">
//           Order Food on Train Online
//         </h1>
//         <div className="backcolor">
//           <div className="pt-2">
//             <div className="mx-auto flex justify-around p-2 pt-2 box-shadow w-11/12 sm:w-2/4">
//               <button
//                 className={` options ${activeButton === "pnr" ? "active" : ""}`}
//                 onClick={() => handleButtonClick("pnr")}
//               >
//                 Search By PNR
//               </button>
//               <button
//                 className={` options ${
//                   activeButton === "train" ? "active" : ""
//                 }`}
//                 onClick={() => handleButtonClick("train")}
//               >
//                 Search By TRAIN
//               </button>
//               <button
//                 className={` options ${
//                   activeButton === "whatsapp" ? "active" : ""
//                 }`}
//                 onClick={() => handleButtonClick("whatsapp")}
//               >
//                 WhatsApp
//               </button>
//             </div>
//           </div>
//           <div className="mt-3  flex justify-center">
//             {activeButton === "pnr" && (
//               <>
//                 <form className="d-flex flex-row items-center w-11/12 sm:w-2/5 justify-between">
//                   <input
//                     placeholder="Enter PNR Number"
//                     value={PnrNumber}
//                     className="inputpnr w-full"
//                     required
//                     onChange={handleInputChange}
//                     type="text"
//                   />
//                   <button
//                     type="submit"
//                     className="button1 my-4"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setIsModalOpen(true);
//                     }}
//                   >
//                     Submit
//                   </button>
//                 </form>
//                 {isModalOpen && <BordingModal pnr={PnrNumber} />}
//               </>
//             )}
//             {activeButton === "train" && (
//               /* Dropdown menu with all train numbers */
//               // <form
//               //   onSubmit={handleSubmitTrainNumber}
//               //   className="d-flex flex-row items-center w-10/12 sm:w-2/5 justify-between"
//               // >
//               //   <input
//               //     type="text"
//               //     list="trainNumbers"
//               //     placeholder="Train Number"
//               //     value={trainNumber}
//               //     className="inputpnr mx-auto w-full"
//               //     required
//               //     onChange={handleTrainNumberChange}
//               //   />
//               //   <datalist id="trainNumbers">
//               //     {trainNumbersArray.map((trainNumber, index) => (
//               //       <option key={index} value={trainNumber} />
//               //     ))}
//               //   </datalist>
//               //   <button type="submit" className="button1 sm:my-0 my-4">
//               //     Submit
//               //   </button>
//               // </form>
//               <CustomSelect />
//             )}
//             {/* Add similar conditional rendering for other buttons */}
//             {activeButton === "whatsapp" && (
//               <form className="d-flex flex-row items-center w-11/12 sm:w-2/5 justify-between">
//                 {/* <input
//                   placeholder="Whatsapp Number"
//                   className="inputpnr  mx-auto w-full"
//                   type="number"
//                   value={9771231434}
//                   required
//                 /> */}
//                 <p
//                   className="inputpnr  mx-auto w-full my-4"
//                   onClick={redirectToWhatsApp}
//                 >
//                   9771231434
//                 </p>
//                 {/* <button
//                   onClick={redirectToWhatsApp}
//                   className="button1 sm:my-0 my-4"
//                 >
//                   Submit
//                 </button> */}
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//       <IRCTCPartner />

//       <div className="pt-5 ">
//         <Link
//           to="/book-group-order"
//           className="no-underline"
//           style={{ textDecoration: "none !important" }}
//         >
//           <div className=" d-flex justify-content-between gap-2 p-3 w-11/12 pt-2 group-ordering mx-auto ">
//             <div className="d-flex justify-content-around sm:gap-5 gap-1 align-items-center sm:px-10 px-1">
//               <img src={groupIcon} className="p-2" alt="" />
//               <div className="">
//                 <h3 className="text-left sm:text-2xl text-lg text-black font-bold  ">
//                   Group food ordering in train
//                 </h3>
//                 <h6 className="text-justify sm:text-xl text-sm text-black font-semibold ">
//                   Travelling in a group of 10 or more
//                 </h6>
//               </div>
//             </div>
//             <div className="d-flex align-items-center ">
//               {" "}
//               <IoIosArrowForward className="text-gray-500 text-xl" />
//             </div>
//           </div>
//         </Link>
//       </div>

//       <div className="my-5">
//         <ImageSlider deviceType="desktop" images={adds} />
//       </div>

//       <div>
//         <h1 className="text-center text-black font-bold text-3xl uppercase my-3 py-2 px-2">
//           Latest Order
//         </h1>
//         <div className="">
//           <UpComingFood />
//         </div>
//       </div>
//       <div className="relative my-10">
//         <button
//           className="inline-flex max-w-fit items-center justify-center w-full px-4 py-2 bg-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
//           onClick={toggleDropdown}
//         >
//           Explore More <IoIosArrowDown className="ml-1" />
//         </button>
//         {isOpen && (
//           <div className="absolute mx-auto w-90 top-0 mt-2 -translate-y-full w-full px-4 py-2 bg-gray-300 rounded-md shadow-lg z-10">
//             <p className="text-gray-800">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//               reprehenderit in voluptate velit esse cillum dolore eu fugiat
//               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//               sunt in culpa qui officia deserunt mollit anim id est laborum.
//               {/* Add more text here */}
//             </p>
//           </div>
//         )}
//       </div>

//       <div>
//         <button className="button1 px-5 mb-4 ">Sign up as Partner</button>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default Dashboard;
import { useEffect, useState } from "react";
import "./dashboard.css";
import delicioustext from "../../Assets/delicioustext.png";
import { Link, useNavigate } from "react-router-dom";
import items from "../../Assets/home (2).png";
import groupIcon from "../../Assets/Person.png";
import adds from "../../Assets/adds.png";
import ImageSlider from "./ImageSlider";
import IRCTCPartner from "../IRCTC partner/IRCTCPartner";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import UpComingFood from "../IRCTC partner/UpcomingOrder";
import Footer from "./../../Common-Components/Footer.jsx";
import CustomSelect from "../Otherpages/TrainSelectInput.jsx";
import { toast } from "react-toastify";
import { GetTrainNameList } from "../Otherpages/service/GetTrainName.jsx";
import { getTrainByPnr } from "./Services/dashboardServices.jsx";
import Loader from "../Otherpages/Loader.jsx";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("pnr");
  const [trainDetails, setTrainDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getAllTrainlist();
  }, []);
  const navigate = useNavigate();

  const getAllTrainlist = async () => {
    const limit = 1000;
    const page = 0;
    const train_number = 1;

    try {
      // Perform a search based on the input value
      const response = await GetTrainNameList(train_number, limit, page);
      console.log("response for train list", response?.data.data);
      const trainValue = response?.data.data;
      // if (trainValue.length === 0) {
      //   toast.error("invalid train number");
      //   return;
      // }
      setTrainDetails(trainValue);
      console.log("Train Value", trainValue);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  // const handleInputChange = (e) => {
  //   const value = e.target.value;
  //   setTrainNumber(value);
  //   // Filter trains based on train number
  //   if (value.trim() === "") {
  //     setFilteredTrains(trains);
  //   } else {
  //     const filtered = trains.filter((train) =>
  //       train.train_number.includes(value)
  //     );
  //     setFilteredTrains(filtered);
  //   }
  // };

  const [pnr, setPNR] = useState("");

  const pnrRegex = /^\d{10}$/;

  const handleInputChange = (e) => {
    const { value } = e.target;
    setPNR(value);
  };

  const traindetailsByPnr = async () => {
    setLoading(true);
    try {
      // Perform a search based on the input value
      const response = await getTrainByPnr(pnr);
      const trainDetail = response?.data.data.resp;
      if (!trainDetail) {
        toast.error("Invalid PNR Number");
        return;
      }
      const serializedData = JSON.stringify(trainDetail);
      console.log("response for train detail by pnr", trainDetail);
      sessionStorage.setItem("traindetaildatabypnr", serializedData);
      navigate(`/order-food/${pnr}`);
    } catch (error) {
      console.error("Error searching:", error);
      toast.error("no restaurant found");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pnrRegex.test(pnr)) {
      console.log("Valid PNR:", pnr);
      traindetailsByPnr();
    } else {
      // PNR is not valid, display toast message
      toast.error("Invalid PNR. Please enter a valid 10-digit PNR number.");
    }
  };

  // const navigate = useNavigate();
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const phoneNumber = "9771231434";
  const redirectToWhatsApp = (e) => {
    e.preventDefault();
    // Construct the WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    // Redirect the user to WhatsApp
    window.location.href = whatsappUrl;
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {loading && <Loader />}
      <div className="uppermain1">
        <div className="d-flex items-center justify-around px-4 py-0 sm:p-12 ">
          <img className="w-2/4 sm:w-2/5" src={delicioustext} alt="Delicious" />
          <img className="w-1/2 sm:w-1/4" src={items} alt="tasty" />
        </div>
      </div>
      <div className="backcolor">
        <h1 className="text-center font-bold pt-4 sm:pb-4 pb-0 ">
          Order Food on Train Online
        </h1>
        <div className="backcolor">
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
              <>
                <form
                  className="w-11/12 sm:w-2/5 mx-auto flex flex-col items-center"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-row items-center justify-center w-full">
                    <input
                      className="inputpnr w-full"
                      type="text"
                      value={pnr}
                      onChange={handleInputChange}
                      placeholder="Enter PNR number"
                    />
                    <button type="submit" className="button1 my-4">
                      Submit
                    </button>
                  </div>
                </form>
              </>
            )}
            {activeButton === "train" && (
              <CustomSelect allTrainDetails={trainDetails} />
            )}
            {/* Add similar conditional rendering for other buttons */}
            {activeButton === "whatsapp" && (
              <form className="d-flex flex-row items-center w-11/12 sm:w-2/5 justify-between">
                <p
                  className="inputpnr  mx-auto w-full my-4"
                  onClick={redirectToWhatsApp}
                >
                  9771231434
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
      <IRCTCPartner />

      <div className="pt-5 ">
        <Link
          to="/book-group-order"
          className="no-underline"
          style={{ textDecoration: "none !important" }}
        >
          <div className=" d-flex justify-content-between gap-2 p-3 w-11/12 pt-2 group-ordering mx-auto ">
            <div className="d-flex justify-content-around sm:gap-5 gap-1 align-items-center sm:px-10 px-1">
              <img src={groupIcon} className="p-2" alt="" />
              <div className="">
                <h3 className="text-left sm:text-2xl text-lg text-black font-bold  ">
                  Group food ordering in train
                </h3>
                <h6 className="text-justify sm:text-xl text-sm text-black font-semibold ">
                  Travelling in a group of 10 or more
                </h6>
              </div>
            </div>
            <div className="d-flex align-items-center ">
              {" "}
              <IoIosArrowForward className="text-gray-500 text-xl" />
            </div>
          </div>
        </Link>
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

      {/* <div>
        <button className="button1 px-5 mb-4 ">Sign up as Partner</button>
      </div> */}

      <Footer />
    </div>
  );
}

export default Dashboard;
