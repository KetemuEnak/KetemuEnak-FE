import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "../../../image/icon-close.png";

const NavbarAll = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar((prev) => !prev);
  };

  const navigate = useNavigate();

  return (
    <div className="container-navbar flex justify-center">
      <nav className={`navbar navbar-expand-sm fixed top-0 w-full transition-all duration-500 ease-in-out bg-white backdrop-filter backdrop-saturate z-10 shadow-md`} style={{ paddingTop: 20, paddingBottom: 20 }}>
        <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
          <a className={`navbar-brand navbar-judul text-black pl-4 pr-4 rounded-2xl`} href="/" style={{ marginLeft: 40 }}>
            Ketemu Enak
          </a>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 mr-10 ml-1 text-sm text-black rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="mobile-menu-2"
            aria-expanded={sidebar}
            onClick={showSidebar}
          >
            <span className="sr-only">Open main menu</span>
            <svg className={`${sidebar ? "hidden" : "block"}  w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <svg className={`${sidebar ? "block" : "hidden"}  w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className={`${sidebar ? "block" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
            <div className="container-sidebar">
              <div className="wrapper-sidebar">
                <ul className="navbar-nav mr-auto">
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
                  <li className="nav-item">
                    <a
                      className="nav-link  find-event-button-1"
                      href="/list-event"
                      style={{
                        border: "none",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        backgroundColor: "#BCA37F",
                        color: "white",
                        marginRight: 50,
                      }}
                    >
                      Find Event
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarAll;
