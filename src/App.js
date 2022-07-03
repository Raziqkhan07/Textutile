//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import TableComponent from './Components/TableComponent/TableComponent';

import Aleart from './Components/Aleart';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [aleart, setAleart] = useState(null)

const showAleart =(message,type)=>{
  setAleart({
    msg: message,
    type:type

  })
  setTimeout(() => {
    setAleart(null);
  }, 1200);
}


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAleart("Dark mode has been enable","success");
      document.title ='TextUtails-Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAleart("Ligth mode has been enable","success");
      document.title ='TextUtails-Light Mode';
    }
  }
 // localStorage.removeItem("details");
  let detail;
   
  if(localStorage.getItem("details")===null){
  
  detail=[
    {
      "slno":1,
      "name": "Raziq khan",
      "city": "Mamballi",
      "connection": "Avarage",
      "status": "Pending"
  },
  
    {
      "slno":2,
      "name": "Shilpa",
      "city": "Vizag",
      "connection": "Good",
      "status": "Pending"
    },
    {
      "slno":3,
      "name": "Lokesh",
      "city": "Bangalore",
      "connection": "Good",
      "status": "Approved"
    },
    {
      "slno":4,
      "name": "Shahabaz",
      "city": "Guntur",
      "connection": "Bad",
      "status": "Reject"
    },
    {
      "slno":5,
      "name": "Ashok",
      "city": "Gundraire",
      "connection": "Bad",
      "status": "Reject"
    }
]
}else{
 
 detail=JSON.parse(localStorage.getItem("details"));
}
  const [details,setdetails] = useState(detail);
  
  useEffect(()=>{
    localStorage.setItem("details",JSON.stringify(details));
  },[details]);

  const compnayname = 'jk';

  const saveHandler = (newrecord) => {
    setdetails([...details,newrecord]);
  }

  const OnDelete=(item)=>{
   setdetails(item);
   localStorage.setItem("details",JSON.stringify(details));
  }
  // return React.createElement('div',{},React.createElement('h1',{},'Welcome to'),React.createElement('p',{},'same'));
  // return React.createElement('div',{},'');
  // return React.createElement('h1',{},'welcome to');
  // return React.createElement('p',{},'same');
  //details={details}
  return<> <div>
    <Router>
   
    <Navbar title="Customer Management" mode={mode} toggleMode={toggleMode} />
    <Aleart aleart={aleart}/>
    <Switch  Routes>
          <Route exact path="/about">
          <About />
          </Route>
          <Route exact path="/">
          <TableComponent details={details} onSave={saveHandler} OnDelete={OnDelete} title={compnayname} name="sample name"/>
          </Route>
    </Switch>
    </Router>
     </div>
     </>
}

export default App;
