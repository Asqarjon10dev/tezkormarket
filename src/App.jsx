import React from 'react';
import "./App.css"
import {  Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./router/home/Home";
import SinglePage from "./router/singlePage/SinglePage";





function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singlepage" element={<SinglePage />} />
      </Routes>

    </div>
  )
}

export default App;