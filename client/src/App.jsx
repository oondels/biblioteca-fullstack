// import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header";
import BooksPage from "./components/pages/BooksPage";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
      </Routes>
    </>
  );
}

export default App;
