import { Link, useLocation } from "react-router-dom";
import Img1 from "./../Assets/offer1 (3).jpg";
import Img2 from "./../Assets/offer1 (4).jpg";
import Img3 from "./../Assets/offer1 (5).jpg";
import TrainInfo from "./Otherpages/TrainInfo";
import { useEffect, useState } from "react";
import { getStationsByTrainNumber } from "./OrderFood/Services/OrderfoodServices";
const BoardingStation = ({ sendSelectedStationCode }) => {
  const [stationCode, setStationCode] = useState();
  const [selectedStationCode, setSelectedStationCode] = useState("");

  const handleChange = (event) => {
    const Station_Code = event.target.value;
    setSelectedStationCode(Station_Code);
    sendSelectedStationCode(Station_Code);
    console.log("Station Code", Station_Code);
  };
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const train_number = queryParams.get("train_number");
  console.log("train_number", train_number);

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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <section className="mb-24">
      <h2 className="text-center font-semibold my-2">
        {" "}
        Order Food in Exp {"trainNumber"}
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
                  {item?.Stations?.station_name}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
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
      <TrainInfo />
    </section>
  );
};

export default BoardingStation;
