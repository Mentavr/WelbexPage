import React from "react";
import Main from "./components/mainPage/Main";
import Header from "./components/mainPage/Header";
import Footer from "./components/mainPage/Footer";
import "./css/App.css";
import Circles from "./components/common/Circles";


function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
      <Circles />
    </div>
  );
}

export default App;
