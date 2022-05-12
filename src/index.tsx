import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InboxComponent } from "./Components/InboxComponent";
import DeletedComponent from "./Components/DeletedComponent";
import SentEmailComponent from "./Components/SentEmailComponent";
import DraftEmailComponent from "./Components/DraftEmailComponent";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/inboxPage" element={<InboxComponent />}></Route>
        <Route path="/deletePage" element={<DeletedComponent />}></Route>
        <Route path="/sentPage" element={<SentEmailComponent />}></Route>
        <Route path="/draftPage" element={<DraftEmailComponent />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
