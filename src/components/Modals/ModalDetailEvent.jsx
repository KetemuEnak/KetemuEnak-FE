import { Button, Modal, Tooltip } from "flowbite-react";
import { BsEnvelopePaper, BsCalendar3 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import ConvertDate from "../../utils/ConvertDate";
import { CustomTheme } from "../../themes/theme";

const ModalDetailEvent = ({
  openModal,
  setOpenModal,
  img,
  title,
  applyBefore,
  eventDate,
  location,
  desc,
  isApplied,
}) => {
  return (
    <Modal
      dismissible
      show={openModal === true}
      onClose={() => setOpenModal(false)}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <div className="flex flex-col px-10 w-full">
          <img src={img} alt="" className="w-96 mb-5 self-center rounded-lg" />
          <div className="flex flex-wrap gap-x-5 mb-7 justify-center">
            <Tooltip content="Batas Tanggal Pendaftaran" placement="bottom">
              <div className="flex gap-x-1 items-center content-center">
                <BsEnvelopePaper />
                <p className="font-normal text-gray-700">
                  {ConvertDate(applyBefore)}
                </p>
              </div>
            </Tooltip>
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
                <p className="font-normal text-gray-700">{location}</p>
              </div>
            </Tooltip>
          </div>
          <p className="font-normal text-gray-700 text-justify">{desc}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          disabled={isApplied}
          onClick={() => setOpenModal(false)}
          theme={CustomTheme.button}
          color="primary">
          {isApplied ? "Terdaftar" : "Daftar"}
        </Button>
        <Button color="gray" onClick={() => setOpenModal(false)}>
          Batal
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDetailEvent;
