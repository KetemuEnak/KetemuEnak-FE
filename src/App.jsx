import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </BrowserRouter>
  );
}

const Hello = () => {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default App;
