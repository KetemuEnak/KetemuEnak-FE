import EventCard from "../../components/Card/EventCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { ApiUrl } from "../../config/ApiUrl";

const RegisteredEvent = ({ setRegisteredData, dataChanged }) => {
  const [eventData, setEventData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      axios
        .get(`${ApiUrl}/seller/events`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setRegisteredData(response.data.data);
          setEventData(response.data.data);
        })
        .catch((error) => console.error(error))
        .finally(() => {
          setIsLoading(false);
        });
    };
    getData();
  }, [dataChanged]);

  return (
    <div className="flex flex-col mt-6 sm:mt-7 md:mt-8 lg:mt-9">
      <h1 className="mb-6 text-lg font-bold md:text-xl lg:text-2xl">Acara Terdaftar</h1>
      {isLoading && <p className="font-normal text-gray-700 text-center">Loading...</p>}
      {!isLoading && eventData.length === 0 ? (
        <p className="font-normal text-gray-700 text-center">Belum ada acara terdaftar</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {eventData
            .filter((event) => event.is_publish === true)
            .map((event) => (
              <EventCard isRegistered={true} key={event.id} title={event.title} img={event.img_url} eventDate={event.time} location={event.alamat} desc={event.description} city={event.city} url_website={event.url_website} />
            ))}
        </div>
      )}
    </div>
  );
};

export default RegisteredEvent;
