import NavbarLandingPage from "../../components/PageComponent/Navbar";
import Banner from "../../components/PageComponent/Banner";
import WhyUs from "../../components/PageComponent/WhyUs";
import Testimonial from "../../components/PageComponent/Testimonial";
import { Promotion, PromotionEO } from "../../components/PageComponent/Promotion";
import Question from "../../components/PageComponent/FAQ";
import Footer from "../../components/PageComponent/Footer";
// import "../../../App.css";
const LandingPage = () => {
  // const buttonContainer = document.getElementById('button-container-banner');
  // buttonContainer.innerHTML = `
  //     <button class="sewa-button">Mulai Sewa Mobil</button>
  // `
  return (
    <>
      <div className="container-all">
        <NavbarLandingPage />
        <Banner />
        {/* <Testimonial /> */}
        <Promotion />
        <PromotionEO />
        <WhyUs />
        <Question />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
