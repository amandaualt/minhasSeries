import userReducer from "./userReducer";
import NewSerieForms from "./NewSerieForms";
import { combineReducers } from "redux";
import serieReducer from "./serieReducer";

export default combineReducers({
  user: userReducer,
  serieForm: NewSerieForms,
  listaSeries: serieReducer,
});
