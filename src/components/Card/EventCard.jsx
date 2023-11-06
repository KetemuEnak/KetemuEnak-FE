import { Card, Button, Tooltip } from "flowbite-react";
import { useState } from "react";
import { BsCalendar3, BsEnvelopePaper } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import ModalDetailEvent from "../Modals/ModalDetailEvent";
import ConvertDate from "../../utils/ConvertDate";
import { CustomTheme } from "../../themes/theme";

const EventCard = ({
  img,
  title,
  applyBefore,
  eventDate,
  location,
  desc,
  isApplied,
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Card imgSrc={img}>
      <div className="flex flex-col mb-1">
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 md:text-lg lg:text-xl">
          {title}
        </h5>
        <div className="flex flex-wrap justify-between gap-y-1 gap-x-5">
          <Tooltip content="Batas Tanggal Pendaftaran" placement="bottom">
            <div className="flex items-center content-center gap-x-2">
              <BsEnvelopePaper />
              <p className="font-normal text-gray-700">
                {ConvertDate(applyBefore)}
              </p>
            </div>
          </Tooltip>
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
              <p className="font-normal text-gray-700">{location}</p>
            </div>
          </Tooltip>
        </div>
      </div>

      <p className="text-justify line-clamp-3">{desc}</p>

      <div className="grid justify-start grid-cols-2 gap-x-3">
        <Button color="light" onClick={() => setOpenModal(true)}>
          Detail
        </Button>
        <Button disabled={isApplied} theme={CustomTheme.button} color="primary">
          {isApplied ? "Terdaftar" : "Daftar"}
        </Button>
      </div>
      <ModalDetailEvent
        openModal={openModal}
        setOpenModal={setOpenModal}
        title={title}
        img={img}
        isApplied={isApplied}
        applyBefore={applyBefore}
        eventDate={eventDate}
        location={location}
        desc={desc}
      />
    </Card>
  );
};

export default EventCard;
