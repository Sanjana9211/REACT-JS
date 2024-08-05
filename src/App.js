import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react'
import Alert from './components/Alert';


function App() {

  const [mode,setMode]=useState('light');

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : type
    });
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#051d34';
      showAlert('Dark mode has been enabled',"sucess");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Dark mode has been enabled',"sucess");
    }
  }

  return (
    <>
    <Navbar title="TextUtils" aboutText='About' mode={mode} toggleMode={toggleMode}/>


    <Alert alert={alert}/>


    <div className="container my-3">
      <TextForm heading="Enter the text to analyze" mode={mode}/>
      {/* <About/> */}
    </div>
    
    </>
  );
}

export default App;
