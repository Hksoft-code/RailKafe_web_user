import axiosInstance from "../../../api-config/axiosinstance";

const FoodMenuDetails = async (rest_id) => {
  try {
    const resp = await axiosInstance.get("/getFoodMenuByResturantId", {
      params: {
        Rest_id: rest_id,
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

export { FoodMenuDetails };
