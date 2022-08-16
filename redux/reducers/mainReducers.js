import { combineReducers } from "redux";
import citiesReducers from "./citiesReducers"
import itinerariesReducers from "./itinerariesReducers";
import userReducers from "./userReducers"

const mainReducers = combineReducers({
    citiesReducers,
    itinerariesReducers,
    userReducers
})

export default mainReducers