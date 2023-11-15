import "./style.css";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="text-center text-lg-start">
      <section className="container-all-footer">
        <div className="container-footer text-center text-md-center mt-5">
          <div className="pt-4 wrapper-footer">
            <div className="address-footer mb-4">
              <ul className="list-unstyled mb-0 text-start">
                <li>Jalan Ketemu Enak, Surabaya</li>
                <li>ketemuenak@gmail.com</li>
                <li>081-221-223-442</li>
              </ul>
            </div>

            <div className="mb-4 text-start navbar-in-footer">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/signup-seller" className="text-dark">
                    Join as Seller
                  </a>
                </li>
                <li>
                  <a href="/signup-eo" className="text-dark">
                    Join as Eo
                  </a>
                </li>
              </ul>
            </div>

            <div className="contact-footer text-start">
              <ul className="list-unstyled mb-0">
                <li className="title-contact">Connect with us</li>
                <li>
                  <a href="https://www.facebook.com" className="text-dark">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com" className="text-dark">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="https://www.twitter.com" className="text-dark">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="https://www.gmail.com" className="text-dark">
                    <i className="fa fa-envelope"></i>
                  </a>
                  <a href="https://www.youtube.com" className="text-dark">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="info-footer text-start">
              <ul className="list-unstyled mb-0">
                <li className="title-contact">Copyright Ketemu Enak 2023</li>
                <li>
                  <a className="copyrights" href="/" style={{ color: "black", textDecoration: "none" }}>
                    Ketemu Enak
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
