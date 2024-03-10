import axiosInstance from "../../../api-config/axiosinstance";

const getStationsByTrainNumber = async () => {
  try {
    const resp = await axiosInstance.get(
      "/getStationsByTrainNumber?train_number=18610"
    );
    console.log("response is", resp);
    const dataObject = resp;
    return dataObject;
  } catch (error) {
    if (error.response) {
      console.log("error is", error.response.data);

      return error.response.data;
    } else {
      // Handle other types of errors
    }
    throw error;
  }
};

const getResturantsByTrain = async (trainNumber, stationCode) => {
  try {
    const resp = await axiosInstance.get("/getResturantsByTrain", {
      params: {
        train_number: trainNumber,
        station_code: stationCode,
      },
    });
    console.log("params",stationCode,trainNumber);
    console.log("response is", resp);
    const dataObject = resp;
    return dataObject;
  } catch (error) {
    if (error.response) {
      console.log("error is", error.response.data);

      return error.response.data;
    } else {
      // Handle other types of errors
    }
    throw error;
  }
};

const getTrainDetailsByPnr = async (Pnr) => {
  try {
    const resp = await axiosInstance.get("/getTrainDetailsByPnr", {
      params: {
        pnr: Pnr,
      },
    });
    console.log("response is", resp);
    const dataObject = resp;
    return dataObject;
  } catch (error) {
    if (error.response) {
      console.log("error is", error.response.data);

      return error.response.data;
    } else {
      // Handle other types of errors
    }
    throw error;
  }
};

export { getStationsByTrainNumber, getResturantsByTrain, getTrainDetailsByPnr };
