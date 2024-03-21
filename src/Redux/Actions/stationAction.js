export const SET_STATION_CODE = "SET_STATION_CODE";

export const setStationCodeforTrain = (stationCode) => ({
  type: SET_STATION_CODE,
  payload: stationCode,
});
