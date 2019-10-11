import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";


const store = createStore(rootReducer, applyMiddleware(thunk, logger))


ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>, 
document.getElementById("root"));
