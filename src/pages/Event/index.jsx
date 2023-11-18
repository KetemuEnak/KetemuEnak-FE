import Navbar from "../../components/Navigation/Navbar";
import FooterComponent from "../../components/Footer/Footer";
import ProfileAlertEo from "../../components/Card/ProfileAlertEo";
import RegisteredEvent from "./RegisteredEvent";
import UpcomingEvent from "./UpcomingEvent";
import { useState, useReducer } from "react";

const Event = () => {
  const [registeredData, setRegisteredData] = useState([]);
  const [upcomingEvent, setUpcomingEvent] = useState([]);
  const [dataChanged, updateData] = useReducer((x) => x + 1, 0);
  const filteredData = upcomingEvent.filter((upcoming) => !registeredData.some((registered) => upcoming.id === registered.id));

  console.log(filteredData);

  return (
    <>
      <Navbar />
      <main className="flex flex-col mx-8">
        <div className="flex items-center justify-center my-6">
          <ProfileAlertEo />
        </div>
        <RegisteredEvent setRegisteredData={setRegisteredData} dataChanged={dataChanged} />
        <UpcomingEvent upcomingEvent={upcomingEvent} setUpcomingEvent={setUpcomingEvent} filteredData={filteredData} dataChanged={dataChanged} updateData={updateData} />
      </main>
      <FooterComponent />
    </>
  );
};

export default Event;
