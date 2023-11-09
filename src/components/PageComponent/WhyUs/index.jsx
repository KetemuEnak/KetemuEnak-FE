import "./style.css";
import completeIcon from "../../../image/icon_complete.png";
import priceIcon from "../../../image/icon_price.png";
import professionalIcon from "../../../image/icon_professional.png";
import timeIcon from "../../../image/icon_24hrs.png";
import { useState } from "react";

const WhyUs = () => {
  const [userSelected, isUserSelected] = useState("seller");

  return (
    <div className="container-whyus" id="whyUsSection">
      <div className="card-whyus">
        <div className="text-whyus mb-4">
          <h1 style={{fontFamily: 'Arial',
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "24px",
  lineHeight: "36px"}}>How to Join</h1>
          <h6>
            Untuk mendaftarkan dirimu sebagai seller ataupun EO ikuti langkah
            berikut.
          </h6>
        </div>
        <div className="card-select-user">
          <button
            onClick={() => isUserSelected("seller")}
            style={
              userSelected === "seller"
                ? { borderBottom: "3px solid black" }
                : { borderBottom: "3px solid rgba(0,0,0,0.1)" }
            }
          >
            Join As Seller
          </button>
          <button
            onClick={() => isUserSelected("eo")}
            style={
              userSelected === "seller"
                ? { borderBottom: "3px solid rgba(0,0,0,0.1)" }
                : { borderBottom: "3px solid black" }
            }
          >
            Join As EO
          </button>
        </div>
        <div className="user-tutorial-container">
          {userSelected === "seller" ? (
            <div
              className="user-seller"
              style={{ animation: "inAnimation ease-in 0.5s" }}
            >
              <div className="card-wrapper">
                <div className="isi-card mb-3">
                  <img src={completeIcon} alt="" className="mb-3" />
                  <h5 className="mb-3">Daftar Sebagai Seller</h5>
                  <h6>
                  Registrasi sebagai seller dengan mengisi informasi yang diperlukan.
                  </h6>
                </div>
                <div className="isi-card mb-3">
                  <img src={priceIcon} alt="" className="mb-3" />
                  <h5 className="mb-3">Login Sebagai Seller</h5>
                  <h6>
                  Masuk ke platform dengan akun seller yang sudah terdaftar.
                  </h6>
                </div>
                <div className="isi-card mb-3">
                  <img src={timeIcon} alt="" className="mb-3" />
                  <h5 className="mb-3">Lengkapi Profil</h5>
                  <h6>
                  Isi dan lengkapi profil seller dengan detail dan informasi yang diperlukan.
                  </h6>
                </div>
                <div className="isi-card mb-3">
                  <img src={professionalIcon} alt="" className="mb-3" />
                  <h5 className="mb-3">Daftarkan Toko-mu</h5>
                  <h6>
                  Daftarkan toko atau produk yang ingin dijual di platform.
                  </h6>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="user-eo"
              style={{ animation: "outAnimationEo ease-out 0.5s" }}
            >
              <div className="card-wrapper">
                <div className="isi-card mb-3">
                  <img src={priceIcon} alt="" className="mb-3" />
                  <h5 className="mb-3">Daftar Sebagai EO</h5>
                  <h6>
                  Registrasi sebagai EO dengan mengisi formulir pendaftaran yang tersedia.
                  </h6>
                </div>
                <div className="isi-card mb-3">
                  <img src={timeIcon} alt="" className="mb-3" />
                  <h5 className="mb-3">Login Sebagai EO</h5>
                  <h6>
                  Masuk ke platform dengan akun EO yang telah terdaftar sebelumnya.
                  </h6>
                </div>
                <div className="isi-card mb-3">
                  <img src={completeIcon} alt="" className="mb-3" />
                  <h5 className="mb-3">Lengkapi Profil</h5>
                  <h6>
                  Isi profil EO dengan informasi terkait perusahaan atau layanan yang ditawarkan.
                  </h6>
                </div>
                <div className="isi-card mb-3">
                  <img src={professionalIcon} alt="" className="mb-3" />
                  <h5 className="mb-3">Daftarkan Event</h5>
                  <h6>
                  Daftarkan event yang akan diadakan melalui platform, sertakan detail dan informasi terkait acara tersebut.
                  </h6>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
