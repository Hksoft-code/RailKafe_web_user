import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getTrainByPnr } from "./Services/dashboardServices";
import { useNavigate } from "react-router-dom";
const BordingModal = ({ pnr }) => {
  console.log(pnr, "details of pnr");
  const [selectedStationCode, setSelectedStationCode] = useState("");
  const [TrainRoutes, setTrainRoutes] = useState([]);
  const [Datee, setDatee] = useState("");
  const [boadingData, setBoadingData] = useState([]);
  const navigate = useNavigate();

  //   const handleInputClick = () => {
  //     setIsModalOpen(true);
  //   };
  useEffect(() => {
    GetTrainDetailsPnr();
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    const Station_Code = event.target.value;
    setSelectedStationCode(Station_Code);
    // sendSelectedStationCode(Station_Code);
    console.log("Station Code", Station_Code);
  };

  const GetTrainDetailsPnr = async () => {
    // e.preventDefault();
    try {
      const response = await getTrainByPnr(pnr);
      const trainroute = response?.data.data.resp;
      const TrainFinalDetail = trainroute.trainRoutes;
      setBoadingData(trainroute);
      setTrainRoutes(TrainFinalDetail);
      console.log("train info response 200", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = () => {
    const payload = {
      delivery_date_time: Datee,
      boarding_station: boadingData?.boardingInfo?.stationName,
      delivery_station_code: Datee,
      dateof_journey: Datee,
      train_no: boadingData?.trainInfo?.trainNo,
    };
    console.log("ggggggggggggggggggg", payload);
    sessionStorage.setItem("placeOrderdata", JSON.stringify(payload));
    console.log("payload", sessionStorage.getItem("placeOrderdata"));
    navigate(`/order-food/${pnr}`);
  };
  console.log("trainRpoutessss", TrainRoutes);

  const today = new Date();

  // Format the date in YYYY-MM-DD format for the input field
  const formattedDate = today.toISOString().split("T")[0];
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-500 opacity-65"></div>
      <div className="bg-white rounded-lg p-8 z-10 sm:w-2/5 w-11/12 ">
        <form action="" className="">
          <div className="flex flex-col items-start w-full sm:mx-3 mx-auto">
            <label htmlFor="" className="font-semibold mb-1">
              Bording Date:
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
              Bording Station:
            </label>
            <select
              value={selectedStationCode}
              onChange={handleChange}
              name=""
              id=""
              className="border-2 py-1 rounded-md border-gray-300 w-full"
            >
              {TrainRoutes?.map((item, index) => (
                <option key={index} value={item?.stationCode}>
                  {item?.stationName}
                </option>
              ))}
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
  pnr: PropTypes.string.isRequired, // Define prop-types validation
};

export default BordingModal;
