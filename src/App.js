import About from "./components/About";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {

  const [mode , setMode] = useState("light");

  const [toggletext , setToggleText] = useState("Enable Dark Mode");

  // Alert Function
  const [alert , setAlert] = useState(null);

  const showalert = (message , type) => {
     setAlert({
       message : message,
       type : type
     })
     setTimeout(() => {
      setAlert(null)
     }, 1200);
   }

  const toggleMode = () => {
    if(mode==="light"){
      setMode("dark")
      setToggleText("Disable Dark Mode");
      document.body.style.backgroundColor = "#1e385f";
      showalert("Dark Mode Activated" , "success")
      
      setInterval(()=>{
        document.title = "SR - Dark Mode";
      } , 1500)

      setInterval(()=>{
        document.title = "Install - SR";
      } , 1000)

    }else{
      setMode("light");
      setToggleText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.title = "SR - Light Mode";
      showalert("Light Mode Activated" , "success")
    }
  }

  const SearchHandler = (event) =>{
    event.preventDefault();
    return(
      showalert("Search function not defined please ignore this feature" , "success")
    );
  }

  const modeset = (modecolor) => {
    document.body.style.backgroundColor = modecolor;
    showalert("Dark mode changed" , "success")
  }

  return(
    <>
      <Router>
        
        <NavBar title="SA" mode={mode} toggleMode={toggleMode} toggletext={toggletext} SearchHandler={SearchHandler} modeset={modeset}/>
        
        <Alert alert={alert}/>
        
        <div className="container my-3">
            <Routes>
              <Route exact path="/about" element={<About />} />
              <Route exact path="/home" element={<TextForm feedback="Word Analyser" mode={mode} showalert={showalert}/>} />
            </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;