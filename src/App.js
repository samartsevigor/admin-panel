import React from 'react';
import Topbar from "./components/topbar";
import Sidebar from "./components/Sidebar";
import "./App.css"
import Home from "./components/pages/home";
import UsersList from "./components/pages/usersList";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
       <Router>
         <Sidebar />
         <Switch>
           <Route exact path="/" component={() => <Home />}/>
           <Route exact path="/users" component={() => <UsersList />}/>
         </Switch>
       </Router>
      </div>
    </div>
  );
};

export default App;