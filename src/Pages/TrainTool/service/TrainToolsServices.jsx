import axiosInstance from "../../../api-config/axiosinstance";

const getCheckPnr = async (Pnr) => {
  try {
    const options = {
      method: "GET",
      url: 'https://pnr-status-indian-railway-pnr-check1.p.rapidapi.com/pnrno/8310214545',
      params: { pnr: Pnr },
      headers: {
        "X-RapidAPI-Key": "e218eea358mshdfebd47591b16f0p13ba3fjsn13b97f0db8ef",
        "X-RapidAPI-Host": "pnr-status-indian-railway.p.rapidapi.com",
      },
    };
    const resp = await axiosInstance.request(options);
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

export { getCheckPnr };
