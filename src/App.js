import {Routes,Route, BrowserRouter} from "react-router-dom";
import React,{useState} from 'react'
import './App.css';

import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import News from "./components/News";
import FinalFooter from "./components/FinalFooter";
function App() {
  const [mode,setMode] = useState('light')
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = ' #161616'           
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
      <BrowserRouter>
    <div className="App">
      <Navbar toggleMode={toggleMode} mode={mode}/>
      <Routes>
          <Route path="/" element={<Home  mode={mode}/> } />
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/news" element={<News mode={mode}/>}/>
      </Routes>
      <FinalFooter  mode={mode}/>
    </div>
      </BrowserRouter>
  );
}

export default App;
