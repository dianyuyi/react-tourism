import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./context";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <React.Fragment>
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <AppProvider>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </AppProvider>
    </Router>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
