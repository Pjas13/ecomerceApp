import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { initialState, reducer } from "./context/reducer";
import { StateProvider } from "./context/StateProvider";
import { UserContext } from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <UserContext>
        <App />
      </UserContext>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
