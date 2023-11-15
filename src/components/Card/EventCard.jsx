import { Card, Button, Tooltip } from "flowbite-react";
import { useState } from "react";
import { BsCalendar3 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import ModalDetailEvent from "../Modals/ModalDetailEvent";
import ConvertDate from "../../utils/ConvertDate";
import { CustomTheme } from "../../themes/theme";

const EventCard = ({
  isRegistered,
  img,
  title,
  eventDate,
  location,
  desc,
  city,
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Card imgSrc={img}>
      <div className="flex flex-col mb-1">
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 md:text-lg lg:text-xl">
          {title}
        </h5>
        <div className="grid grid-cols-1 gap-y-1 gap-x-5">
          <Tooltip content="Waktu Pelaksanaan" placement="bottom">
            <div className="flex items-center content-center gap-x-2">
              <BsCalendar3 />
              <p className="font-normal text-gray-700">
                {ConvertDate(eventDate)}
              </p>
            </div>
          </Tooltip>
          <Tooltip content="Lokasi" placement="bottom" className="col-span-2">
            <div className="flex items-center content-center gap-x-2">
              <IoLocationOutline />
              <p className="font-normal text-gray-700">
                {location}, {city}
              </p>
            </div>
          </Tooltip>
        </div>
      </div>

      <p className="text-justify line-clamp-3">{desc}</p>

      <div className="grid justify-start grid-cols-2 gap-x-3">
        <Button color="light" onClick={() => setOpenModal(true)}>
          Detail
        </Button>
        <Button
          disabled={isRegistered}
          theme={CustomTheme.button}
          color="primary">
          {isRegistered ? "Terdaftar" : "Daftar"}
        </Button>
      </div>
      <ModalDetailEvent
        openModal={openModal}
        setOpenModal={setOpenModal}
        title={title}
        img={img}
        isRegistered={isRegistered}
        eventDate={eventDate}
        location={location}
        desc={desc}
        city={city}
      />
    </Card>
  );
};

export default EventCard;
