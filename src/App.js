import React from "react";
import "./App.css";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import SearchPage from "./Component/SearchPage";
import RecommendedVideos from "./Component/RecommendedVideos";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Search from "@material-ui/icons/Search";

function App() {
  return (
    <div className="app">

      <Router>
        <Switch>
          <Route path="/search/:searchTerm">
          <Header/>
          <div className="app__page">
               <Sidebar/>
               <SearchPage/>
             </div>
          </Route>
          <Route path="/">
          <Header/>
             <div className="app__page">
               <Sidebar/>
               <RecommendedVideos/>
             </div>
          </Route>
        </Switch>
      </Router>


        
    </div>

  ); 
}

export default App;
