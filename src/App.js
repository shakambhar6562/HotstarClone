import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/detail/:id" element={<Detail />} />
         
      </Routes>

      </Router>
  

     
    </div>
  );
}

export default App;
