import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar"
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';


function App() {
  return (
    <div className="App" >
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} element={<Home/>} />
        {/* <Route path='/home' component={Cats} /> */}
        <Route path='/about' component={About} element={<About/>}/>
        <Route path='/contact' component={Contact} element={<Contact/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
