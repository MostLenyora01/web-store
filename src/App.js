// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage"; // Import LandingPage once
import StorePage from "./components/StorePage";
import CartPage from "./components/CartPage";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Routes>
        {/* Set LandingPage as the default route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
};

export default App;
