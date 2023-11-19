import { Button, Modal, Tooltip } from "flowbite-react";
import { BsCalendar3 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import ConvertDate from "../../utils/ConvertDate";
import { CustomTheme } from "../../themes/theme";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import CekUrl from "../../utils/CekUrl";
import EventImage from "../assets/image.png";
import { useState } from "react";
import ModalProfileAlert from "./ModalProfileAlert";

const ModalDetailEvent = ({
  url_website,
  openModal,
  setOpenModal,
  img,
  title,
  eventDate,
  location,
  city,
  desc,
  isRegistered,
  handleClickDaftar,
  isProfileComplete,
}) => {
  const [openModalProfile, setOpenModalProfile] = useState(false);
  const handleClickProfile = () => {
    setOpenModal(false);
    setOpenModalProfile(true);
  };
  return (
    <>
      <Modal
        dismissible
        show={openModal === true}
        onClose={() => setOpenModal(false)}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <div className="flex flex-col px-10 w-full">
            <img
              src={CekUrl(img) ? img : EventImage}
              alt=""
              className="w-96 mb-5 self-center rounded-lg"
            />
            <div className="flex flex-wrap gap-x-5 mb-7 justify-center">
              <Tooltip content="Waktu Pelaksanaan" placement="bottom">
                <div className="flex gap-x-1 items-center content-center">
                  <BsCalendar3 />
                  <p className="font-normal text-gray-700">
                    {ConvertDate(eventDate)}
                  </p>
                </div>
              </Tooltip>
              <Tooltip content="Lokasi" placement="bottom">
                <div className="flex gap-x-1 items-center content-center">
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
              <div className="flex items-center content-center gap-x-2">
                <GlobeAltIcon className="w-5 h-5 block text-gray-700" />
                <a
                  href={url_website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal text-gray-700">
                  {url_website}
                </a>
              </div>
            </div>
            <p className="font-normal text-gray-700 text-justify">{desc}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {isRegistered ? (
            <Button disabled={true} theme={CustomTheme.button} color="primary">
              Terdaftar
            </Button>
          ) : (
            <Button
              theme={CustomTheme.button}
              color="primary"
              onClick={
                isProfileComplete() ? handleClickDaftar : handleClickProfile
              }>
              Daftar
            </Button>
          )}
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Batal
          </Button>
        </Modal.Footer>
      </Modal>
      <ModalProfileAlert
        setOpenModal={setOpenModalProfile}
        openModal={openModalProfile}
      />
    </>
  );
};

export default ModalDetailEvent;
