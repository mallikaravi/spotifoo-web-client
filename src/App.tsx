import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Sidebar} from './components/Sidebar'

import Home from './pages/Home';
import Search from './pages/Search';

import { Footer } from "./components/Footer";

import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
