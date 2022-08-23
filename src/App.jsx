import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
const Home = lazy(() => import("./pages/home/home"));
const About = lazy(() => import("./pages/about/about"));
const ContactUs = lazy(() => import("./pages/contactUs/contactUs"));
const Technologies = lazy(() => import("./pages/technologies/technologies"));
const Services = lazy(() => import("./pages/services/services"));

function App() {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
