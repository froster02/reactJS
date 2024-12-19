import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("dark"); // check whether dark mode is enabled or not.
  const [page, setPage] = useState("home"); // state to track the current page

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} onPageChange={handlePageChange} />
      <div className="container my-3">
        {page === "home" && <TextForm heading="Enter the text below to analyze : " mode={mode} />}
        {page === "about" && <About />}
      </div>
    </>
  );
}

export default App;
