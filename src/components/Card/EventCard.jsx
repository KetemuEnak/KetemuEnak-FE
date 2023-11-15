import { Card, Button, Tooltip } from "flowbite-react";
import { useState } from "react";
import { BsCalendar3 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import ModalDetailEvent from "../Modals/ModalDetailEvent";
import ConvertDate from "../../utils/ConvertDate";
import { CustomTheme } from "../../themes/theme";
import axios from "axios";
import { ApiUrl } from "../../config/ApiUrl";

const EventCard = ({
  id,
  isRegistered,
  img,
  title,
  eventDate,
  location,
  desc,
  city,
  updateData,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const token = localStorage.getItem("token");

  const handleClickDaftar = () => {
    axios
      .get(`${ApiUrl}/seller/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => updateData());
  };

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
              <a
                href={location}
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal text-gray-700">
                {city}
              </a>
            </div>
          </Tooltip>
        </div>
      </div>

      <p className="text-justify line-clamp-3">{desc}</p>

      <div className="grid justify-start grid-cols-2 gap-x-3">
        <Button color="light" onClick={() => setOpenModal(true)}>
          Detail
        </Button>
        {isRegistered ? (
          <Button disabled={true} theme={CustomTheme.button} color="primary">
            Terdaftar
          </Button>
        ) : (
          <Button
            theme={CustomTheme.button}
            color="primary"
            onClick={handleClickDaftar}>
            Daftar
          </Button>
        )}
      </div>
      <ModalDetailEvent
        handleClickDaftar={handleClickDaftar}
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
