import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getTrainByPnr } from "./Services/dashboardServices";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { getStationsByTrainNumber } from "../OrderFood/Services/OrderfoodServices";
import { useDispatch } from "react-redux";
import { setStationCodeforTrain } from "../../Redux/Actions/stationAction";
const BordingModal = ({ trainNum, toggleModal }) => {
  console.log(trainNum, "details of pnr");
  const [selectedStationCode, setSelectedStationCode] = useState("");
  const [TrainRoutes, setTrainRoutes] = useState([]);
  // const [boadingData, setBoadingData] = useState([]);
  const [stationData, setStationData] = useState([]);
  // const [hide, sethide] = useState(true);
  const [stationCode, setStationCode] = useState();
  const navigate = useNavigate();
  const todayy = new Date();
  const year = todayy.getFullYear();
  const month = String(todayy.getMonth() + 1).padStart(2, "0");
  const day = String(todayy.getDate()).padStart(2, "0");
  const todayDate = `${year}-${month}-${day}`;

  const [Datee, setDatee] = useState(todayDate);
  const dispatch = useDispatch();
  //   const handleInputClick = () => {
  //     setIsModalOpen(true);
  //   };
  useEffect(() => {
    GetTrainDetailsbyTrain();
    getStationByTrain_Number();
  }, []);

  const handleSetStationCode = () => {
    // Example of setting station code
    dispatch(setStationCodeforTrain(selectedStationCode));
  };

  const handleChange = (event) => {
    event.preventDefault();
    const Station_Code = event.target.value;
    setSelectedStationCode(Station_Code);
    // sendSelectedStationCode(Station_Code);
    console.log("Station Code", Station_Code);
  };

  const getStationByTrain_Number = async () => {
    try {
      const response = await getStationsByTrainNumber(trainNum);
      const dataForm = response?.data?.data;
      setStationCode(dataForm?.stations);
      console.log("station info response", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const GetTrainDetailsbyTrain = async () => {
    // e.preventDefault();
    try {
      const response = await getTrainByPnr(trainNum);
      const trainroute = response?.data.data.resp;
      const TrainFinalDetail = trainroute.trainRoutes;
      // setBoadingData(trainroute);
      setTrainRoutes(TrainFinalDetail);
      console.log("train info response 200", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = () => {
    const payload = {
      delivery_date_time: Datee,
      boarding_station: stationData?.station_code,
      delivery_station_code: selectedStationCode,
      dateof_journey: Datee,
      train_no: stationData?.train_number,
    };
    console.log("ggggggggggggggggggg", payload);
    sessionStorage.setItem("placeOrderdata", JSON.stringify(payload));
    handleSetStationCode();
    console.log("payload", sessionStorage.getItem("placeOrderdata"));
    if (trainNum) {
      navigate(`/order-food/${trainNum}`);
    }
  };
  console.log("trainRpoutessss", TrainRoutes, stationData);

  const today = new Date();

  // Format the date in YYYY-MM-DD format for the input field
  const formattedDate = today.toISOString().split("T")[0];
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-500 opacity-65"></div>
      <div className="bg-white rounded-lg p-8 z-10 sm:w-2/5 w-11/12 ">
        <ImCross className="mb-2 text-right ml-auto" onClick={toggleModal} />
        <form action="" className="">
          <div className="flex flex-col items-start w-full sm:mx-3 mx-auto">
            <label htmlFor="" className="font-semibold mb-1">
              Boarding Date:
            </label>
            <input
              type="date"
              name=""
              value={Datee}
              onChange={(e) => {
                setDatee(e.target.value);
              }}
              id=""
              min={formattedDate}
              className="p-1 rounded-md border-gray-300 w-full"
              style={{ border: "2px #d1d5db solid" }}
            />
          </div>
          <div className="flex flex-col items-start w-full sm:mx-3 mx-auto">
            <label htmlFor="" className="font-semibold mb-1">
              Boarding Station:
            </label>
            <select
              value={selectedStationCode}
              onChange={(event) => {
                handleChange(event);
                const selectedStation = stationCode.find(
                  (item) => item.station_code === event.target.value
                );
                if (selectedStation) {
                  setStationData(selectedStation);
                }
              }}
              name=""
              id=""
              className="border-2 py-1 rounded-md border-gray-300 w-full"
            >
              {stationCode && stationCode.length > 0 ? (
                stationCode.map((item, index) => (
                  <option key={index} value={item?.station_code}>
                    {item?.StationsInfo?.station_name}
                  </option>
                ))
              ) : (
                <option value="" disabled>
                  No stations available
                </option>
              )}
            </select>
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="button1 sm:my-0 w-10/12 my-4"
          >
            Done
          </button>
        </form>
      </div>
    </div>
  );
};
BordingModal.propTypes = {
  trainNum: PropTypes.string.isRequired, // Define prop-types validation
  toggleModal: PropTypes.func.isRequired,
};

export default BordingModal;
