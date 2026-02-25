import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App=()=>{
  let apiKey=process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  
  
    return (
      
      <div>
        <Router basename="/NewsMonkey">
          <LoadingBar
        color="#f11946"
        progress={progress}/>
       <Navbar></Navbar>
        
       <Routes >
        <Route exact path="/" element={<News setProgress={setProgress} apikey={apiKey} key="general"  category ="general"></News>}> </Route>
        <Route exact path="/business" element={<News setProgress={setProgress} apikey={apiKey} key="business "  category ="business"></News>} ></Route>
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apiKey} key="entertainment "  category ="entertainment"></News>} ></Route>
        <Route exact path="/health" element={<News setProgress={setProgress} apikey={apiKey} key="health "  category ="health"></News>} ></Route>
        <Route exact path="/science" element={<News setProgress={setProgress} apikey={apiKey} key="science "  category ="science"></News>} ></Route>
        <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apiKey} key="sports "  category ="sports"></News>} ></Route>
        <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apiKey} key="technology "  category ="technology"></News>} ></Route>
       </Routes>
       
       </Router>
      </div>
      
    )
  
}

export default App;

