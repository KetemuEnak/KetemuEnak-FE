import React, { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "/src/components/assets/banner.png";
import EventImage from "/src/components/assets/image.png";

import NavbarAll from "../PageComponent/NavbarAll";

import data from "/src/database/dummy.json";

function HomeContent() {
  const [events, setEvents] = useState(data.events);

  const [isCity, setIsCity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const cities = ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"];

  // const fetchEvent = async () => {
  //   axios
  //     .get(`${import.meta.env.VITE_API_URL}`)
  //     .then((response) => {
  //       setEvents(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // };

  //   useEffect(() => {
  //     fetchEvent();
  //   }, []);

  const handleClick = (city) => {
    setIsCity(city);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEvents = events.filter((event) => (isCity ? event.city === isCity : "" || event.event_name.toLowerCase().includes(searchTerm.toLowerCase())));

  return (
    <div className="my-14">
      <NavbarAll/>
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
            <div className="overflow-hidden hover:overflow-y-visible max-h-[1300px]">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => (
                  <li key={index}>
                    <div className="py-3 sm:py-6 border-b-2 border-b-black">
                      <div className="md:flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img className="sm:ml-4 w-32 h-32 md:w-52 md:h-52 rounded-md" src={EventImage} alt="Image Event" />
                        </div>
                        <div className="min-w-0 text-left">
                          <div className="flex flex-col md:flex-row justify-between xl:mr-14 xl:w-[800px]">
                            <h2 className="text-2xl ml-[-2px] md:text-3xl font-bold text-gray-900 dark:text-white">{event.event_name}</h2>
                            <span className="text-white bg-[#C98411] focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 focus:outline-none self-start">{event.city}</span>
                          </div>
                          <h2 className="text-ls font-semi-bold text-gray-900 dark:text-white">{event.date}</h2>
                          <p className="text-sm xl:mr-14 md:mt-4 md:mb-6 text-gray-700 dark:text-gray-400 text-justify">{event.description.length > 350 ? event.description.substring(0, 350) + "..." : event.description}</p>
                          <Link reloadDocument to={`/detail/${event.id}`}>
                            <span className="text-lg text-[#C98411] hover:text-[#F96B03]">Selengkapnya... </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-full mt-5">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">Tidak ada data</h2>
                  <p className="text-md md:text-lg text-gray-700 dark:text-gray-400 text-center">Maaf, kami tidak dapat menemukan event terkait.</p>
                </div>
              )}
            </div>
          </ul>
        </div>
        {/* <ul className="flex justify-center mt-4">
          {pageNumbers.map((number) => (
            <li key={number} id={number} onClick={handleClick} className="mx-1 px-3 py-2 bg-gray-200 cursor-pointer">
              {number}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default HomeContent;
