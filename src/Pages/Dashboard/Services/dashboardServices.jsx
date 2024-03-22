// import { toast } from "react-toastify";
import axiosInstance from "../../../api-config/axiosinstance";

const getTrainByPnr = async (Pnr) => {
  try {
    const resp = await axiosInstance.get("/getTrainDetailsByPnr", {
      params: {
        pnr: Pnr,
      },
    });
    console.log("response issssssssss", resp);
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

// const getTrainByPnr = async (Pnr) => {
//   try {
//     const resp = await axiosInstance.get("/getTrainDetailsByPnr", {
//       params: {
//         pnr: Pnr,
//       },
//     });
//     console.log("response is", resp);
//     const dataObject = resp;
//     return dataObject;
//   } catch (error) {
//     if (error.response) {
//       console.log("error is", error.response.data);

//       return error.response.data;
//     } else {
//       // Handle other types of errors
//     }
//     throw error;
//   }
// };

export { getTrainByPnr };
