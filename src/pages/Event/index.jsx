import Navbar from "../../components/Navigation/Navbar";
import FooterComponent from "../../components/Footer/Footer";
import ProfileAlertEo from "../../components/Card/ProfileAlertEo";
import data from "../../json/dummy.json";
import { createContext } from "react";
import RegisteredEvent from "./RegisteredEvent";
import UpcomingEvent from "./UpcomingEvent";

export const EventContext = createContext();

const Event = () => {
  const userData = data.user.event;

  return (
    <EventContext.Provider value={{ userData }}>
      <Navbar isSeller={false} />
      <main className="flex flex-col mx-8">
        <div className="flex items-center justify-center my-6">
          <ProfileAlertEo />
        </div>
        <RegisteredEvent />
        <UpcomingEvent />
      </main>
      <FooterComponent />
    </EventContext.Provider>
  );
};

export default Event;
