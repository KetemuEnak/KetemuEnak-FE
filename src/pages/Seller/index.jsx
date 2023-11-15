import { createContext } from "react";
import Navbar from "../../components/Navigation/Navbar";
import FooterComponent from "../../components/Footer/Footer";
import ProfileAlert from "../../components/Card/ProfileAlert";
import EOEvent from "../../components/Card/EOEvent";
import useGetApi from "../../hooks/useGetApi";
import { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { CustomTheme } from "../../themes/theme";

export const SellerContext = createContext();

const Seller = () => {
  const [eventData, setEventData] = useState([]);
  const id = localStorage.getItem("id");

  const { apiResponse, isLoading, error } = useGetApi(`eo/${id}/event`);

  useEffect(() => {
    if (apiResponse) {
      setEventData(apiResponse);
    }
  }, [apiResponse]);

  return (
    <>
      <Navbar isSeller={true} />
      <main className="flex flex-col mx-8">
        <div className="flex items-center justify-center my-6">
          <ProfileAlert />
        </div>
        <Button
          size="sm"
          theme={CustomTheme.button}
          // onClick={}
          href="/create-event"
          style={{ width: 200, marginTop: 10 }}
          color={"primary"}>
          Tambahkan Event
        </Button>
        <div className="flex flex-col mt-6 sm:mt-7 md:mt-8 lg:mt-9">
          <h1 className="mb-6 text-lg font-bold md:text-xl lg:text-2xl">
            Acara Saya
          </h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {eventData.map((event) => (
              <EOEvent
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
      </main>
      <FooterComponent />
    </>
  );
};

export default Seller;
