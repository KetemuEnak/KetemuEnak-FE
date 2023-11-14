import React, { useState, useEffect } from "react";
import EventImage from "/src/components/assets/image.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import NavbarAll from "../PageComponent/NavbarAll";
import data from "/src/database/dummy.json";

function DetailContent() {
  const { eventId } = useParams();
  const event = data.events.find((event) => event.id === Number(eventId));

  // const [event, setEvent] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_API_URL}/${eventId}`)
  //     .then((response) => {
  //       setEvent(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, [eventId]);

  return (
    <div className="my-14 px-4 sm:px-6 lg:px-14">
      <NavbarAll />
      <div className="mx-auto max-w-screen-xl lg:py-3 mt-5">
        <div className="md:flex md:justify-center">
          <ul className="max-w-[900px] pr-4 divide-y divide-black dark:divide-gray-700">
            <li className="mb-4">
              <h1 className="text-black font-bold text-4xl ml-10">{event.event_name}</h1>
            </li>
            <div className="py-3 min max-h-[1300px]">
              <div className=" items-center space-x-4">
                <div className="bg-[#EAD7BB] flex flex-col items-center mx-4 sm:mx-6 min-w-0 md:min-w-[850px] md:mx-auto md:mb-6 lg:py-0 mb-10 md:h-[300px]">
                  <img className="h-full py-3 px-4" src={event.event_image || EventImage} alt="logo" />
                </div>
                <div className="min-w-0 text-start">
                  <table className=" table-auto ">
                    <tbody>
                      <tr>
                        <td className="text-ls pr-3 font-semi-bold align-text-top text-gray-900 dark:text-white">Tanggal</td>
                        <td className="align-text-top">:</td>
                        <td className="text-ls font-semi-bold align-text-top text-gray-900 dark:text-white">{event.date}</td>
                      </tr>
                      <tr>
                        <td className="text-ls font-semi-bold align-text-top text-gray-900 dark:text-white">Lokasi</td>
                        <td className="align-text-top">:</td>
                        <td className="text-ls font-semi-bold align-text-top text-gray-900 dark:text-white">
                          <a href={event.location} className="text-blue-700">
                            {event.location}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-ls font-semi-bold align-text-top text-gray-900 dark:text-white">Tiket</td>
                        <td className="align-text-top">:</td>
                        <td className="text-ls font-semi-bold align-text-top text-gray-900 dark:text-white">{event.ticket_price}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className=" text-sm mt-3 mb-3 md:mt-4 md:mb-6 text-gray-700 dark:text-gray-400 text-justify whitespace-pre-line">{event.description}</p>
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
  );
}

export default DetailContent;
