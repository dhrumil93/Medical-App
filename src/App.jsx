import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header.jsx";
import Home from "./pages/home.jsx";
import Showscore from "./components/score.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/services.jsx";
import Drprofile from "./pages/drprofile.jsx";
import Rating from "./pages/rating.jsx";
import Banner from "./components/banner.jsx";
import { BrowserRouter } from "react-router-dom";
import Location from "./pages/location.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Showscore />
      <About />
      <Services />
      <Drprofile />
      <Rating />
      <Banner />
      <Location />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
