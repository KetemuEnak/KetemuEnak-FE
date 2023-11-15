import EventCard from "../../components/Card/EventCard";
import { useState, useEffect } from "react";
import useGetApi from "../../hooks/useGetApi";

const RegisteredEvent = () => {
  const [eventData, setEventData] = useState([]);
  const { data, isLoading, error } = useGetApi("seller/events/");

  useEffect(() => {
    if (data) {
      // Lakukan sesuatu dengan data yang diperoleh dari API
      setEventData(data);
      console.log(eventData);
    }
  }, [data]);

  return (
    <div className="flex flex-col mt-6">
      <h1 className="mb-6 text-lg font-bold md:text-xl lg:text-2xl">
        Acara Terdaftar
      </h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
        {eventData
          .filter((event) => event.isApplied === true)
          .map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              img={event.img_url}
              eventDate={event.time}
              location={event.alamat}
              desc={event.description}
              city={event.city}
            />
          ))}
      </div>
    </div>
  );
};

export default RegisteredEvent;
