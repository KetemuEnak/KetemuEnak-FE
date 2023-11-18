import "./style.css";
import { useNavigate } from "react-router-dom";
// import carImage from "../../../image/img_car.png";
import backgroundImageBanner from "../../../image/bg_banner.jpg";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-banner-all">
        <div id="overlay"></div>
        <section className="overlay-section">
          <div className="text" style={{ width: 1320 }}>
            <h1 style={{ fontSize: "40px", fontWeight: "650" }}>
              Temukan Event Bazaar & Festival Kuliner <br /> yang ada di Seluruh
              Indonesia.
            </h1>
            <h6
              style={{
                fontSize: 16,
                fontWeight: "bolders",
                marginBottom: 20,
                marginTop: 20,
              }}>
              Selamat datang di Ketemu Enak. <br /> Yuk, Jadi Pahlwan UMKM.
              Dukung UMKM Kuliner di seluruh Indonesia.
            </h6>
            <div id="button-container-banner">
              <button
                onClick={() => {
                  return navigate("/list-event");
                }}
                className="cari-event-button">
                Mulai Cari Event
              </button>
            </div>
          </div>
        </section>
        {/* <div className="bg">
          <div id="overlay"></div>
          <img className="bg-banner" src={backgroundImageBanner} alt=""></img>
          <div className="text" style={{ width: 1320 }}>
            <h1>
              Temukan Event Bazaar & Festival Kuliner <br /> yang ada di Seluruh
              Indonesia.
            </h1>
            <h6
              style={{
                fontSize: 14,
                fontWeight: "bolders",
                marginBottom: 16,
              }}
            >
              Selamat datang di Ketemu Enak. <br /> Yuk, Jadi Pahlwan UMKM.
              Dukung UMKM Kuliner di seluruh Indonesia.
            </h6>
            <div id="button-container-banner">
              <button
                onClick={() => {
                  return navigate("/search");
                }}
                className="cari-event-button"
              >
                Mulai Cari Event
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Banner;
