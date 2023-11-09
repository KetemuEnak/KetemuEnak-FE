import { useNavigate } from "react-router-dom";
import checkIcon from "../../../image/img-check.png";
import serviceGirlImage from "../../../image/img_service.png";
import serviceEoImage from "../../../image/img_service_eo.png";
import "./style.css";

export const Promotion = () => {
  const navigate = useNavigate();

  return (
    <div id="bannerSection" className="container-promosi">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 image-promosi">
          <img src={serviceGirlImage} alt="Service Girl" />
        </div>
        <div className="w-full lg:w-1/2 text-our-service">
          <div className="container-our-service mb-5 lg:p-0">
            <h2 className="mb-8">
              Daftarkan <mark>Usahamu</mark> untuk Mengikuti Bazaar Kuliner!
            </h2>
            <p>
              Pameran dan Bazaar di pusat keramaian menjadi ajang promosi yang
              efektif. Pasalnya, event pameran dan bazaar selalu ramai dipadati
              pengunjung. Terdapat beberapa keuntungan yang dapat kalian
              dapatkan sebagian penjual ketika mendaftarkan usaha kalian ke
              dalam bazar kuliner.
            </p>
            <div className="top-services">
              <div className="eachServices mt-4">
                <img src={checkIcon} alt="Check Icon" className="mr-2" />
                <p>Meningkatkan Image dan Visibilitas Daganganmu</p>
              </div>
              <div className="eachServices mt-4">
                <img src={checkIcon} alt="Check Icon" className="mr-2" />
                <p>Menghasilkan Transaksi Selama Pameran dan bazaar</p>
              </div>
              <div className="eachServices mt-4">
                <img src={checkIcon} alt="Check Icon" className="mr-2" />
                <p>
                  Memperbaiki Efektifitas dan Efisiensi Berbagai Upaya Marketing
                </p>
              </div>
              <div id="button-container-banner" className="mt-5 lg:text-right">
                <button
                  onClick={() => navigate("/signup-seller")}
                  className="cari-event-button-promotion"
                >
                  Daftar sebagai Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PromotionEO = () => {
  const navigate = useNavigate();

  return (
    <div className="container-promosi setsize flex" id="bannerSection">
      <div className="w-full lg:w-1/2 text-our-service lg:order-1 eo-services">
        <div className="container-our-service mb-5 lg:px-0">
          <h2 className="mb-8">
            Daftarkan Dirimu sebagai <mark>Event Organizers</mark> untuk
            Menyelenggarakan Event Bazaar Kuliner!
          </h2>
          <p>
            Selamat datang di pintu gerbang ke dunia event bazaar yang tak
            terbatas! Kami mengundang para Event Organizer yang berbakat dan
            bersemangat untuk mendaftar di platform kami dan memberikan warna
            pada peta acara bazaar yang selalu berkembang.
          </p>
          <div className="top-services space-y-4">
            <div className="eachServices flex items-center">
              <img src={checkIcon} alt="" className="mr-2" />
              <p>Promosikan Event Anda</p>
            </div>
            <div className="eachServices flex items-center">
              <img src={checkIcon} alt="" className="mr-2" />
              <p>Meningkatkan Image dan Visibilitas Anda</p>
            </div>
            <div className="eachServices flex items-center">
              <img src={checkIcon} alt="" className="mr-2" />
              <p>Menghasilkan Transaksi Selama Pameran dan bazaar</p>
            </div>
            <div className="mt-5">
              <button
                onClick={() => navigate('/signup-eo')}
                className="cari-event-button-promotion"
              >
                Daftar sebagai EO
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 image-promosi lg:order-2">
        <img src={serviceEoImage} alt="" />
      </div>
    </div>
  );
};