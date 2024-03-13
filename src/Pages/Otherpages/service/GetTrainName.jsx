import axiosInstance from "../../../api-config/axiosinstance";

const GetTrainNameList = async (trainNumber) => {
  try {
    const resp = await axiosInstance.get("/getTrains", {
      params: {
        train_number: trainNumber,
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

export { GetTrainNameList };
