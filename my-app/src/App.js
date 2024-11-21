import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter the text below to analyze : " />
        <button className="btn btn-primary">Convert to Upper Case</button>
      </div>
    </>
  );
}
export default App;
