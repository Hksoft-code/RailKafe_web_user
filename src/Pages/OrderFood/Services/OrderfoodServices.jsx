import axiosInstance from "../../../api-config/axiosinstance";

const getStationsByTrainNumber = async (train_number) => {
  try {
    const resp = await axiosInstance.get(
      `/getStationsByTrainNumber?train_number=${train_number}`
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

const getResturantsByTrain = async (trainNumber, selectedStationCode1) => {
  try {
    console.log("paramstrain", trainNumber, selectedStationCode1);
    const resp = await axiosInstance.get("/getResturantsByTrain", {
      params: {
        train_number: trainNumber,
        station_code: selectedStationCode1,
      },
    });
    console.log("params", selectedStationCode1, trainNumber);
    console.log("response is ", resp);
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

const getResturantsByPnr = async (pnr) => {
  try {
    console.log("pnr is here", pnr);
    const resp = await axiosInstance.get("/getResturantsByPnr", {
      params: {
        pnr: pnr,
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

export { getStationsByTrainNumber, getResturantsByTrain, getResturantsByPnr };
