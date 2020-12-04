import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Button } from "@material-ui/core"
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import { getMatches } from './api/Api';
import {Grid} from "@material-ui/core";



function App() {


const [matches, setMatches] = useState([]);



  useEffect(() => {
    getMatches()
    .then((data) => setMatches (data.matches))
    .catch((error) => alert("could not load data"));
  }, []);


  return (
    <div className="App">
      <Navbar />
     <h1>Welcome To My Live Cricket App</h1>
     
<MyCard></MyCard>
     
     
    </div>
  );
}

export default App;
