import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from './components/Sidebar'

import { Home } from './pages/Home';
import { Search } from './pages/Search';

import { Footer } from "./components/Footer";

import { useEffect, useState } from "react";

function App() {

  // Selected Song
  const [selectedSong, setSelectedSong] = useState<string>("");

/*  useEffect(() => {
    //Trigger Footer
    alert("selectedSong"+selectedSong)
   } , [selectedSong])
*/
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home onSelection={(songId) => setSelectedSong(selectedSong)} />} />
          <Route path='/search' element={<Search />} />
        </Routes>
        <Footer selectedSong={selectedSong}/>
      </Router>
    </>
  );
}

export default App;
