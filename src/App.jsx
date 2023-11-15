import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEvent from "./pages/CreateEvent";
import DetailEvent from "./pages/DetailPage";
import UpcomingEvent from "./pages/Event";
import GuestNavbar from "./components/Navigation/GuestNavbar";
import FormSignIn from "./pages/LoginPage/login";
import FormSignInEo from "./pages/LoginPageEo/login";
import FormSignUpEo from "./pages/SignUpPage/FormSignUpEo";
import FormSignUp from "./pages/SignUpPage/FormSignUp";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import NotFound from "./components/NotFound";
import PotentialSeller from "./pages/Seller";
import ProfilePage from "./pages/ProfilePage";
import ProfileForm from "./pages/CreateProfile";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<FormSignIn />} />
        <Route path="/signin-eo" element={<FormSignInEo />} />
        <Route path="/signup-eo" element={<FormSignUpEo />} />
        <Route path="/signup-seller" element={<FormSignUp />} />
        <Route path="/seller" element={<UpcomingEvent />} />
        <Route path="/event" element={<PotentialSeller />} />
        <Route path="/list-event" element={<HomePage />} />
        <Route path="/events/:eventId" element={<DetailEvent />} />
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
