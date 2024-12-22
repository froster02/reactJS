import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("dark"); // check whether dark mode is enabled or not.
  const [page, setPage] = useState("home"); // state to track the current page

  useEffect(() => {
    document.body.style.backgroundColor = mode === "light" ? "white" : "black";
    document.body.style.color = mode === "light" ? "black" : "white";
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => {
      let newMode;
      if (prevMode === "light") {
        newMode = "dark";
      } else {
        newMode = "light";
      }
      document.body.style.backgroundColor = newMode === "light" ? "white" : "black";
      document.body.style.color = newMode === "light" ? "black" : "white";
      return newMode;
    });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const titleBro = "reactJS";

  return (
    <>
      <Navbar title={titleBro} mode={mode} toggleMode={toggleMode} onPageChange={handlePageChange} />
      <div className="container my-3" style={{ color: mode === "dark" ? "white" : "black" }}>
        {page === "home" && <TextForm heading="Enter the text below to analyze : " mode={mode} />}
        {page === "about" && <About />}
      </div>
    </>
  );
}

export default App;
