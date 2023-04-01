/**
 * Application Entry point App.tsx
 * @author kedari.mahesh@gmail.com
 */
import React from "react";
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
import Footer from "./components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routing />
      <Footer />
    </>
  );
}
