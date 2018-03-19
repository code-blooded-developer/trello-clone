import initialState from "./initialState";
import { GET_NAME } from "../actions/actionTypes";

export default function name(state = initialState.name, action) {
  switch (action.type) {
    case GET_NAME:
      return "Mohanani";
    default:
      return state;
  }
}
