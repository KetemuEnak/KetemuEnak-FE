import EventCard from "../../components/Card/EventCard";
import { useState, useEffect } from "react";
import useGetApi from "../../hooks/useGetApi";

const UpcomingEvent = () => {
  const [eventData, setEventData] = useState([]);
  const { apiResponse, isLoading, error } = useGetApi("events");

  useEffect(() => {
    if (apiResponse) {
      setEventData(apiResponse);
    }
  }, [apiResponse]);

  return (
    <div className="flex flex-col mt-6 sm:mt-7 md:mt-8 lg:mt-9">
      <h1 className="mb-6 text-lg font-bold md:text-xl lg:text-2xl">
        Acara Mendatang
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {eventData
          .filter((event) => event.is_publish === true)
          .map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
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

export default UpcomingEvent;
