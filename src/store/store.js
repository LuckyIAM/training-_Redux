import { createStore, combineReducers } from "redux";
import wordReducer from "./wordReducer";

const store = createStore(combineReducers({wordReducer}));

export default store;