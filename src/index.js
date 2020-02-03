import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./store/reducer";
import PriceTable from "./PriceTable";

const store = createStore(reducer);
const rootElement = document.getElementById("root");

ReactDOM.render(<PriceTable store={store} />, rootElement);
