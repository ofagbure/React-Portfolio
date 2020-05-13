import React from 'react';
import logo from './lgo.webp';
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
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
    <Portfolio />
    <Contact />
    </div>
  );
}

export default App;
