import { combineReducers } from "redux";
import authReducer from "./auth";
import visitorsReducer from './visitors'


export default combineReducers({
  auth: authReducer,
  visitors: visitorsReducer,
});