import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "/src/components/assets/banner.png";
import Image from "/src/components/assets/image.png";
import isUrl from "../../utils/CekUrl";

import NavbarAll from "../PageComponent/NavbarAll";
import Footer from "../PageComponent/Footer";

function HomeContent() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isCity, setIsCity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const cities = ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[monthIndex];

    return `${day} ${month} ${year}`;
  };

  const fetchEvent = async () => {
    setIsLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/events`)
      .then((response) => {
        setEvents(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  const handleClick = (city) => {
    setIsCity(city);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const sortedEvents = [...events].sort((a, b) => new Date(a.time) - new Date(b.time));
  const filteredEvents = sortedEvents.filter((event) => (isCity ? event.city?.toLowerCase() === isCity?.toLowerCase() : "" || event.title?.toLowerCase().includes(searchTerm.toLowerCase())));

  return (
    <>
      <div className="my-14">
        <NavbarAll />
        <div className="flex flex-col items-center mx-4 md:mx-14 lg:mx-auto lg:py-0 mb-10 mt-5">
          <img className="max-h-[170px] md:max-h-[250px] xl:max-h-[350px] w-full md:w-screen xl:w-[1100px] rounded-3xl" src={Banner} alt="logo" />
        </div>
        <div className="md:mx-auto max-w-screen-xl lg:py-3">
          <div className="md:flex md:justify-between">
            <ul className="px-4 md:px-16 divide-y-2 divide-black">
              <li className="mb-4">
                <div className="flex flex-col sm:flex-row">
                  <div>
                    <h1 className="text-black text-3xl md:text-5xl text-left">Event List</h1>
                  </div>
                  <div className="mt-4 sm:mt-[25px] sm:ml-16 mb-[-5px]">
                    <button
                      type="button"
                      onClick={() => handleClick(setIsCity(""))}
                      className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-3 py-1 mr-2 "
                    >
                      All
                    </button>
                    {cities.map((city, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleClick(city)}
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-3 py-1 mr-2 "
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                  <div className="xl:ml-[110px] mt-4 sm:mt-[25px] sm:ml-16 mb-[-5px]">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      placeholder="Search events"
                      className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-3 py-1 mr-2 "
                    />
                  </div>
                </div>
              </li>
              <div className="overflow-auto hover:overflow-y-visible mb-16 xl:mb-0 max-h-[1300px]">
                {isLoading && (
                  <div className="flex flex-col items-center justify-center h-full mt-5">
                    <div>
                      <svg aria-hidden="true" class="inline w-10 h-10text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                )}
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event, index) => (
                    <li key={index}>
                      {event.is_publish && (
                        <div className="py-3 sm:py-6 border-b-2 border-b-black">
                          <div className="md:flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <img className="ml-4 w-32 h-32 md:w-52 md:h-52 rounded-md object-cover" src={isUrl(event.img_url) ? event.img_url : Image} alt="Image Event" />
                            </div>
                            <div className="min-w-0 text-left">
                              <div className="flex flex-col md:flex-row justify-between gap-y-1 md:w-[490px] xl:mr-14 xl:w-[900px] pointer-events-none">
                                <h2 className="text-2xl sm:mt-3 md:mt-0 ml-[-2px] md:text-3xl font-bold text-gray-900 dark:text-white">{event.title}</h2>
                                <span className="text-white bg-[#C98411] focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 focus:outline-none self-start">{event.city}</span>
                              </div>
                              <h2 className="text-ls font-semi-bold text-gray-900 dark:text-white">{formatDate(event.time)}</h2>
                              <p className="text-sm sm:my-3 md:my-0 xl:mr-14 md:mt-4 md:mb-6 text-gray-700 dark:text-gray-400 text-justify">
                                {event.description.length > 350 ? event.description.substring(0, 350) + "..." : event.description}
                              </p>
                              <Link reloadDocument to={`/events/${event.id}`}>
                                <span className="text-lg text-[#C98411] hover:text-[#F96B03]">Selengkapnya... </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center h-full mt-5">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">{!isLoading && "Tidak ada data"}</h2>
                    <p className="text-md md:text-lg text-gray-700 dark:text-gray-400 text-center">{!isLoading && "Maaf, kami tidak dapat menemukan event terkait."}</p>
                  </div>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-[#BCA37F] md:mt-[-100px]">
        <Footer />
      </div>
    </>
  );
}

export default HomeContent;
