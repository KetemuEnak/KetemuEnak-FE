import "./style.css";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer class="text-center text-lg-start">
      <section class="container-all-footer">
        <div class="container-footer text-center text-md-center mt-5">
          <div class="pt-4 wrapper-footer">
            <div class="address-footer mb-4">
              <ul class="list-unstyled mb-0 text-start">
                <li>Jalan Ketemu Enak, Surabaya</li>
                <li>ketemuenak@gmail.com</li>
                <li>081-221-223-442</li>
              </ul>
            </div>

            <div class="mb-4 text-start navbar-in-footer">
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="/signup-seller" class="text-dark">
                    Join as Seller
                  </a>
                </li>
                <li>
                  <a href="/signup-eo" class="text-dark">
                    Join as Eo
                  </a>
                </li>
              </ul>
            </div>

            <div class="contact-footer text-start">
              <ul class="list-unstyled mb-0">
                <li className="title-contact">Connect with us</li>
                <li>
                  <a href="https://www.facebook.com" class="text-dark">
                    <i class="fa fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com" class="text-dark">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="https://www.twitter.com" class="text-dark">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="https://www.gmail.com" class="text-dark">
                    <i class="fa fa-envelope"></i>
                  </a>
                  <a href="https://www.youtube.com" class="text-dark">
                    <i class="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="info-footer text-start">
              <ul class="list-unstyled mb-0">
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
