import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpcomingEvent from "./pages/Event";
import PotentialSeller from "./pages/Seller";
import GuestNavbar from "./components/Navigation/GuestNavbar";
import HomePage from "./pages/HomePage";
import DetailEvent from "./pages/DetailPage";
import ProfilePage from "./pages/ProfilePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import FormSignIn from "./pages/LoginPage/login";
import FormSignInEo from "./pages/LoginPageEo/login";
import FormSignUpEo from "./pages/SignUpPage/FormSignUpEo";
import FormSignUp from "./pages/SignUpPage/FormSignUp";
import CreateEvent from "./pages/CreateEvent";
import ProfileForm from "./pages/CreateProfile";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<FormSignIn />} />
        <Route path="/signin-eo" element={<FormSignInEo />} />
        <Route path="/signup-eo" element={<FormSignUpEo />} />
        <Route path="/signup-seller" element={<FormSignUp />} />
        <Route path="/seller" element={<UpcomingEvent />} />
        <Route path="/event" element={<PotentialSeller />} />
        <Route path="/list-event" element={<HomePage />} />
        <Route path="/detail/:eventId" element={<DetailEvent />} />
        <Route path="/profile/:profileId" element={<ProfilePage />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/create-profile" element={<ProfileForm />} />
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
