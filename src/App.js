import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Information from "./Information";
import Footer from "./Footer";


function App() {

  return (
    <div className="app">
      <Header />
      <div className="app__body">
        {/*
        <Sidebar />
  */}
        <Information />
      </div>
      <div className="app__end">
        <Footer />
      </div>
    </div>
  );

}

export default App;