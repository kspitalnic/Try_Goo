import { combineReducers } from "redux";
import {authReducer} from "./auth";

// combine reducers
const rootReducer = combineReducers({
    user: authReducer
  });

  export default rootReducer;