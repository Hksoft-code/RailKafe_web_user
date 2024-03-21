// reducers/stationReducer.js
import { SET_STATION_CODE } from "../Actions/stationAction.js";

const initialState = {
  stationCode: null,
};

const stationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATION_CODE:
      return {
        ...state,
        stationCode: action.payload,
      };
    default:
      return state;
  }
};

export default stationReducer;
