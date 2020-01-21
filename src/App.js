import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Home from "./components/Home";
import ChatPage from "./components/ChatPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <ChatPage path="/chat" />
      </Router>
    </div>
  );
}

export default App;
