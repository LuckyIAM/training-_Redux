import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Main from "./Main"
import store from "./store/store";
import {Provider} from "react-redux";
ReactDOM.render(
	<Provider store ={store}>
		<Main/>
	</Provider>,
	document.querySelector("#root")
);
