import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../../../image/icon-close.png";

const NavbarAll = () => {
  const [sidebar, setSidebar] = useState(false);


  const showSidebar = () => {
    setSidebar((prev) => !prev);
  };

  const navigate = useNavigate();

  return (
    <div className="container-navbar flex justify-center">
        <nav
          className={`navbar navbar-expand-sm fixed top-0 w-full transition-all duration-500 ease-in-out bg-white backdrop-filter backdrop-saturate z-10 shadow-md`}
          style={{ paddingTop: 20, paddingBottom: 20 }}
        >
        <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
          <a
            className={`navbar-brand navbar-judul text-black pl-4 pr-4 rounded-2xl`}
            href="/"
            style={{marginLeft:40}}
          >
            Ketemu Enak
          </a>
          <button
            onClick={showSidebar}
            style={sidebar ? { visibility: "hidden" } : { visibility: "visible" }}
            className="navbar-toggler d-lg-none"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {sidebar && (
            <div className="container-sidebar">
              <div className="wrapper-sidebar">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item title-first">
                    <a
                      className="nav-link first-to-button title-sidebar"
                      href="/"
                    >
                      Ketemu Enak
                    </a>
                    <img onClick={showSidebar} src={CloseIcon} alt="" />
                  </li>
                  <li className="nav-item sidebar-funct">
                    <a className="nav-link" href="/signin">
                      Join as EO
                    </a>
                  </li>
                  <li className="nav-item sidebar-funct">
                    <a className="nav-link" href="/signin">
                      Join as seller
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <ul className={`navbar-nav flex text-black}`}>
            <li className="nav-item">
              <a
                className={`nav-link text-black}`}
                href="/signin-eo"
              >
                Join as EO
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link mx-3 text-black}`}
                href="/signin"
              >
                Join as Seller
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link  find-event-button-1"
                href="/list-event"
                style={{
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  backgroundColor: "#BCA37F" ,
                  color: "white" ,
                  marginRight:50
                }}
              >
                Find Event
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarAll;
