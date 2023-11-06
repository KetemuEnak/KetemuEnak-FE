import Dropdown from "../Dropdown";
import { DropdownBottom } from "../Dropdown";
import "./style.css";
const Question = () => {
  return (
    <div className="container-all-question" id="faqSection">
      <div className="container-question">
        <div className="wrapper-question">
          <div className="desc-question">
            <h2>Frequently Asked Question</h2>
            <h6>Pertanyaan seputar event bazaar kuliner</h6>
          </div>
          <div className="dropdown-question-page">
            <div className="dropdown-wrapper">
              <Dropdown
                faq="Apa itu Bazaar Kuliner?"
                answer="Bazaar kuliner adalah acara atau pasar khusus yang menampilkan beragam makanan dan minuman dari berbagai penjual. Ini adalah tempat yang sempurna untuk menjelajahi dan menikmati hidangan lezat dari seluruh dunia."
              />

              <Dropdown
                faq="Bagaimana Saya Bisa Berpartisipasi Sebagai Penjual di Bazaar Kuliner Ini?"
                answer="Untuk berpartisipasi sebagai penjual di bazaar kuliner kami, Anda perlu mendaftar dan mengisi formulir pendaftaran yang telah kami sediakan. Tim kami akan menghubungi Anda untuk proses selanjutnya."
              />

              <Dropdown
                faq="Berapa Biaya Partisipasi dan Standar Keuntungan yang Diharapkan?"
                answer="Biaya partisipasi bazaar kuliner dapat bervariasi tergantung pada ukuran stan dan popularitas acara. Mengenai keuntungan, ini dapat bervariasi, tetapi sebagian besar penjual melihat hasil yang positif, terutama jika mereka menawarkan hidangan yang unik dan lezat."
              />

              <Dropdown
                faq="Apakah Ada Persyaratan Khusus yang Harus Dipenuhi oleh Penjual Makanan?"
                answer="Ya, kami memiliki persyaratan kebersihan, keamanan, dan kualitas makanan yang harus dipatuhi oleh semua penjual makanan. Hal ini dilakukan untuk memastikan bahwa pengunjung dapat menikmati makanan dengan aman dan nyaman."
              />

              <DropdownBottom
                faq="Apakah Bazaar Kuliner Ini Memiliki Hiburan dan Aktivitas Tambahan?"
                answer="Ya, bazaar kuliner kami seringkali menawarkan hiburan tambahan, seperti pertunjukan musik langsung, lomba masak, dan zona bermain untuk anak-anak. Hal ini ditujukan untuk menciptakan pengalaman yang lebih menarik bagi seluruh keluarga."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
