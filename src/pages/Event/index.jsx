import Navbar from "../../components/Navigation/Navbar";
import FooterComponent from "../../components/Footer/Footer";
import ProfileAlertEo from "../../components/Card/ProfileAlertEo";
import RegisteredEvent from "./RegisteredEvent";
import UpcomingEvent from "./UpcomingEvent";
import { useState, useReducer, useEffect } from "react";
import axios from "axios";

const Event = () => {
  const [registeredData, setRegisteredData] = useState([]);
  const [upcomingEvent, setUpcomingEvent] = useState([]);
  const [dataChanged, updateData] = useReducer((x) => x + 1, 0);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const filteredData = upcomingEvent.filter(
    (upcoming) =>
      !registeredData.some((registered) => upcoming.id === registered.id)
  );

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/seller/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUserData(response.data.data);
      } catch (error) {
        console.error(error);
        return { response: null, data: null, error };
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const isProfileComplete = () => {
    if (
      userData.name &&
      userData.address &&
      userData.contact &&
      userData.description &&
      userData.img_url &&
      userData.socmed_or_web_url
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col mx-8">
        {!isProfileComplete() && (
          <div className="flex items-center justify-center my-6">
            <ProfileAlertEo />
          </div>
        )}
        <RegisteredEvent
          setRegisteredData={setRegisteredData}
          dataChanged={dataChanged}
        />
        <UpcomingEvent
          upcomingEvent={upcomingEvent}
          setUpcomingEvent={setUpcomingEvent}
          filteredData={filteredData}
          dataChanged={dataChanged}
          updateData={updateData}
          isProfileComplete={isProfileComplete}
        />
      </main>
      <FooterComponent />
    </>
  );
};

export default Event;
