import axiosInstance from "../../../api-config/axiosinstance";

const getTrainByTrain = async (trainNum) => {
  try {
    const resp = await axiosInstance.get("/getTrainDetailsByTrainNumber", {
      params: {
        trainNumber: trainNum,
      },
    });
    console.log("response is by train number", resp);
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

export { getTrainByTrain };
