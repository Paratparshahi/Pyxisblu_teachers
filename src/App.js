import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import {Dashboard} from './pages/Dashboard.jsx';
import {About} from './pages/About.jsx';
import {Analytics} from './pages/Analytics.jsx';
import {Comment} from './pages/Comment.jsx';
import {Product} from './pages/Product.jsx';
import {ProductList} from './pages/ProductList.jsx';
import Sidebar from './Component/Sidebar';
import { Schedule } from './Component/Schedule';
import './Component/Schedule.css'
import { Maining } from './Component/Maining';

function App() {

  return (
    <div className="App">
    
      <div className="row">
      <Sidebar>
        <Routes>
          <Route path="/" element={<Maining/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/comment" element={<Comment/>} />
          <Route path="/analytics" element={<Schedule/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/productList" element={<ProductList/>} />
        </Routes>
      </Sidebar>
      </div>
    </div>
  );
}

export default App;
