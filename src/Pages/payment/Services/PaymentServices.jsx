import axiosInstance from "../../../api-config/axiosinstance";

const placeOrder = async (payload) => {
  try {
    const resp = await axiosInstance.get("/placeOrder", payload);
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

export { placeOrder };
