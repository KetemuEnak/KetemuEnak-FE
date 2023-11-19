import EventCard from "../../components/Card/EventCard";
import { useEffect } from "react";
import useGetApi from "../../hooks/useGetApi";

const UpcomingEvent = ({
  filteredData,
  setUpcomingEvent,
  dataChanged,
  updateData,
  isProfileComplete,
}) => {
  const { apiResponse, isLoading, error } = useGetApi("events");

  useEffect(() => {
    if (apiResponse) {
      setUpcomingEvent(apiResponse);
    }
  }, [dataChanged, apiResponse]);

  return (
    <div className="flex flex-col mt-6 sm:mt-7 md:mt-8 lg:mt-9">
      <h1 className="mb-6 text-lg font-bold md:text-xl lg:text-2xl">
        Acara Mendatang
      </h1>
      {isLoading && (
        <p className="font-normal text-gray-700 text-center">Loading...</p>
      )}
      {!isLoading && filteredData.length === 0 ? (
        <p className="font-normal text-gray-700 text-center">
          Belum ada acara yang tersedia
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {filteredData
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
                url_website={event.url_website}
                updateData={updateData}
                isProfileComplete={isProfileComplete}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvent;
