import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("dark");
  const [page, setPage] = useState("home");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

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
      if (newMode === "light") {
        showAlert("Light mode has been enabled", "success");
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
      } else {
        showAlert("Dark mode has been enabled", "success");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
      }
      return newMode;
    });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Navbar
        title="reactJS"
        mode={mode}
        toggleMode={toggleMode}
        onPageChange={handlePageChange}
      />
      <Alert alert={alert} />
      <div className="container my-3" style={{ color: mode === "dark" ? "white" : "black" }}>
        {page === "home" &&
          <TextForm
            heading="Enter the text below to analyze : "
            mode={mode}
            showAlert={showAlert}
          />
        }
        {page === "about" && <About mode={mode} />}
      </div>
    </>
  );
}

export default App;
