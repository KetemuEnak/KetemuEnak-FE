import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpcomingEvent from "./pages/Event";
import PotentialSeller from "./pages/Seller";
import GuestNavbar from "./components/Navigation/GuestNavbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/event" element={<UpcomingEvent />} />
        <Route path="/seller" element={<PotentialSeller />} />
      </Routes>
    </BrowserRouter>
  );
}

const Hello = () => {
  return (
    <>
      <GuestNavbar />
    </>
  );
};

export default App;
