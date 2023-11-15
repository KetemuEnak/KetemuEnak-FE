import Navbar from "../../components/Navigation/Navbar";
import FooterComponent from "../../components/Footer/Footer";
import ProfileAlertEo from "../../components/Card/ProfileAlertEo";
import EventCard from "../../components/Card/EventCard";
import data from "../../json/dummy.json";
import { createContext } from "react";
import { CustomTheme } from "../../themes/theme";

export const EventContext = createContext();

const UpcomingEvent = () => {
  const events = data.event;
  const userData = data.user.event;
  return (
    <EventContext.Provider value={{ userData }}>
      <Navbar isSeller={false} />
      <main className="flex flex-col mx-8">
        <div className="flex items-center justify-center my-6">
          <ProfileAlertEo />
        </div>
        <div className="flex flex-col mt-6">
          <h1 className="mb-6 text-lg font-bold md:text-xl lg:text-2xl">
            Acara Terdaftar           
          </h1>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
            {events
              .filter((event) => event.isApplied === true)
              .map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  img={event.img}
                  isApplied={event.isApplied}
                  applyBefore={event.applyBefore}
                  eventDate={event.eventDate}
                  location={event.location}
                  desc={event.desc}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col mt-6 sm:mt-7 md:mt-8 lg:mt-9">
          <h1 className="mb-6 text-lg font-bold md:text-xl lg:text-2xl">
            Acara Mendatang
          </h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {events
              .filter((event) => event.isApplied === false)
              .map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  img={event.img}
                  isApplied={event.isApplied}
                  applyBefore={event.applyBefore}
                  eventDate={event.eventDate}
                  location={event.location}
                  desc={event.desc}
                />
              ))}
          </div>
        </div>
      </main>
      <FooterComponent />
    </EventContext.Provider>
  );
};

export default UpcomingEvent;
