import "./App.css";
import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Notes from "./Components/Notes";
import PageNotFound from "./Components/PageNotFound";
import About from "./Components/About";
import { NoteContextProvider } from "./Context/Notes/NoteContextProvider";
import { ThemeContextProvider } from "./Context/Theme/ThemeContextProvider";
import { Routes, Route } from "react-router-dom";
import Alert from "./Components/Alert";

function App() {
  return (
    <>
      <NoteContextProvider>
        <ThemeContextProvider>
          <Navbar title="NoteList" />
          <Alert />
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ThemeContextProvider>
        <Footer />
      </NoteContextProvider>
    </>
  );
}

export default App;
