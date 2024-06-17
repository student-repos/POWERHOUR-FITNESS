import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Trainers from "./components/Trainers/Trainers";
import Offers from "./components/Offers/Offers";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/JoinUs/Signup/Signup";
import Login from "./components/JoinUs/Login/Login";
import Pilates from "./components/Programs/pilates/Pilates";
import Yoga from "./components/Programs/yoga/Yoga";
import Cardio from "./components/Programs/cardio/Cardio";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Hero />
              <Programs />
              <Trainers />
              <Offers />
              <Testimonials />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/programs">
          <Route path="pilates" element={<Pilates />} />
          <Route path="yoga" element={<Yoga />} />
          <Route path="cardio" element={<Cardio />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
