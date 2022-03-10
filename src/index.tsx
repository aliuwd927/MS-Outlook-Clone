import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LeftSection from './Components/LeftSection';
import MiddleSection from './Components/MiddleSection';
import RightSection from './Components/RightSection';
import { InboxComponent } from './Components/InboxComponent';
import DeletedComponent from './Components/DeletedComponent';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/inboxPage' element={<InboxComponent searchBarValue=''/>}></Route>
        <Route path="/deletePage" element={<DeletedComponent/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
