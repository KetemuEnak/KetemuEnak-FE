import { Card, Tooltip } from "flowbite-react";
import { BsCalendar3 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import ConvertDate from "../../utils/ConvertDate";
import CekUrl from "../../utils/CekUrl";
import EventImage from "../assets/image.png";

const EOEvent = ({ id, img, title, eventDate, location, desc, city }) => {
  return (
    <a href={`/event/${id}`}>
      <Card imgSrc={CekUrl(img) ? img : EventImage}>
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
      </Card>
    </a>
  );
};

export default EOEvent;
