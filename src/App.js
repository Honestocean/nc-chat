import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Home from "./components/Home";
import ChatPage from "./components/ChatPage";

class App extends Component {

  state= {
    loggedInUser : "guestUser"
  }

  render() {

   const {loggedInUser} = this.state

    return (
      <div className="App">
        <Header />
        <Router>
          <Home path="/" />
          <ChatPage path="/chat" loggedInUser={loggedInUser}/>
        </Router>
      </div>
    );
  }
}

export default App;