import React from 'react';
import logo from './lgo.webp';
import Home from "./pages/home";
import About from "./pages/about";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="">
      <header className="">
        <img src={logo} className="my-logo" alt="logo"/>
      </header>
    <Home />
    <About />
    </div>
  );
}

export default App;
