// react 
import React from "react";
// css
import "./App.css";
// browserrouter 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import Header from './Component/Header';
// pages
import Home from "./pages/Home";
// About pages
import AboutUs from "./pages/About/AboutUs";
import Blog from "./pages/About/Blog"; 
import Contact from "./pages/About/Contact";
 
import StoreList from "./pages/store/StoreList";
import SingleShop from "./pages/store/SingleShop";
 
const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/Grocery-react/" element={<Home />} />
          
          <Route path="/StoreList" element={<StoreList />} />
          <Route path="/SingleShop" element={<SingleShop />} />
       
          {/* About pages */}
          <Route path="/Blog" element={<Blog />} /> 
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
         
      </Router>
    </div>
  );
};

export default App;
