import React from "react";
import Navbar from "./pages/Navbar.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPages from "./pages/SearchPages.jsx";
import Home from "./pages/Home.jsx"

//import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route path="/search" element={<SearchPages />} />
        </Routes>
      </BrowserRouter>
      <Home/>
    </div>
  );
}

export default App;
