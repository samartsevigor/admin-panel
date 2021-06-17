import React from 'react';
import Topbar from "./components/topbar";
import Sidebar from "./components/Sidebar";
import "./App.css"
import Home from "./components/pages/home";

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};

export default App;