import { combineReducers } from "redux";

import game from "./game";
import statistics from "./statistics";

export default combineReducers({
  game,
  statistics
});
