import axios from "axios";
import React, { useState, useEffect } from "react";
import EventImage from "/src/components/assets/image.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import NavbarAll from "../PageComponent/NavbarAll";
import Footer from "../PageComponent/Footer";
import isUrl from "../../utils/CekUrl";

function DetailContent() {
  const { eventId } = useParams();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[monthIndex];

    return `${day} ${month} ${year}`;
  };

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  const [event, setEvent] = useState([]);
  const [notEvent, setNotEvent] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/events/${eventId}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setNotEvent(true);
      });
  }, [eventId]);

  if (notEvent) {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">Event Not Found</div>
        <button className="mt-5">
          <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0" />
            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              <Link to="/list-event">Go to Event List</Link>
            </span>
          </a>
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="my-14 px-4 sm:px-6 lg:px-14">
        <NavbarAll />
        <div className="mx-auto max-w-screen-xl lg:py-3 mt-5">
          <div className="md:flex md:justify-center">
            <ul className="max-w-[900px] pr-4 divide-y divide-black dark:divide-gray-700">
              <li className="mb-4">
                <h1 className="text-black font-bold text-4xl ml-10">{event.title}</h1>
              </li>
              <div className="py-3 ">
                <div className=" items-center space-x-4">
                  <div className="bg-[#EAD7BB] flex flex-col items-center mx-3 sm:mx-6 min-w-0 md:min-w-[850px] md:mx-auto md:mb-6 lg:py-0 mb-10 md:h-[300px]">
                    <img className="h-full py-3 px-4" src={isUrl(event.img_url) ? event.img_url : EventImage} alt="logo" />
                  </div>
                  <div className="min-w-0 text-start">
                    <div className="my-3 pointer-events-none">
                      <span className="text-white bg-[#C98411] focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 focus:outline-none self-start">{event.city}</span>
                    </div>
                    <table className=" table-auto ">
                      <tbody>
                        <tr>
                          <td className="text-ls pr-3 font-semi-bold align-text-top text-gray-900 dark:text-white">Tanggal</td>
                          <td className="align-text-top px-1">:</td>
                          <td className="text-ls font-semi-bold align-text-top text-gray-900 dark:text-white">{formatDate(event.time)}</td>
                        </tr>
                        <tr>
                          <td className="text-ls font-semi-bold align-text-top text-gray-900 dark:text-white">Tiket</td>
                          <td className="align-text-top px-1">:</td>
                          <td className="text-ls font-semi-bold align-text-top text-gray-900 dark:text-white">{rupiah(event.ticket_price)}</td>
                        </tr>
                        <tr>
                          <td className="text-ls font-semi-bold align-text-top text-gray-900 dark:text-white">Lokasi</td>
                          <td className="align-text-top px-1">:</td>
                          <td className="text-ls font-semi-bold align-text-top text-gray-900 dark:text-white">
                            <Link to={event.alamat} className="text-blue-700">
                              {event.alamat}
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-ls font-semi-bold align-text-top text-gray-900 dark:text-white">Website</td>
                          <td className="align-text-top px-1">:</td>
                          <td className="text-ls font-semi-bold align-text-top text-gray-900 dark:text-white">
                            <Link to={event.url_website} className="text-blue-700">
                              {event.url_website || " "}
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className=" text-sm mt-3 mb-3 md:mt-4 md:mb-6 md:mr-4 text-gray-700 dark:text-gray-400 text-justify whitespace-pre-line">{event.description}</p>
                    <div className="flex flex-col items-end">
                      <Link
                        to={"/list-event"}
                        className="text-gray-900 bg-gradient-to-r from-red-200 via-red-400 to-yellow-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Back to homepage
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-[#BCA37F] xl:mt-[-100px]">
        <Footer />
      </div>
    </>
  );
}

export default DetailContent;
