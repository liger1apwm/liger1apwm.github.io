
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext } from 'react';

import Navbar from "./components/navbar"
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import AppContainer from './components/wordle-content/components/appContainer.js'

export const AppContext = createContext();


function App() {

  const user = "user";
  const [userName, setUserName] = useState(user);
  const [subject, setSubject] = useState("");
  

  return (
    <div className="App" >
      <Router>
      <AppContext.Provider value={{userName,setUserName,subject,setSubject}}> 
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} element={<Home/>} />
        <Route path='/wordle' exact component={AppContainer} element={<AppContainer/>} />
        {/* <Route path='/home' component={Cats} /> */}
        <Route path='/about' component={About} element={<About/>}/>
        <Route path='/contact' component={Contact} element={<Contact/>}/>
      </Routes>
      </AppContext.Provider>
      
    </Router>
    </div>
  );
}

export default App;
