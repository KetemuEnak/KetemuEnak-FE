import { Button, Modal, Avatar } from "flowbite-react";
import { CustomTheme } from "../../themes/theme";
import { GlobeAltIcon, PhoneIcon } from "@heroicons/react/24/outline";
import CekUrl from "../../utils/CekUrl";
import EventImage from "../assets/image.png";

const ModalDetailSeller = ({
  socmed_or_web_url,
  contact,
  openModal,
  setOpenModal,
  img,
  avatar,
  name,
  city,
  desc,
  handleClickApprove,
  handleClickReject,
}) => {
  return (
    <Modal
      dismissible
      show={openModal === true}
      onClose={() => setOpenModal(false)}>
      <Modal.Header>Detail</Modal.Header>
      <Modal.Body>
        <div className="flex flex-col px-10 w-full ">
          <img
            src={CekUrl(img) ? img : EventImage}
            alt=""
            className="w-96 mb-3 self-center rounded-lg"
          />
          <div className="flex items-center py-4 border-y border-solid border-gray-100 mb-3">
            <Avatar
              img={
                CekUrl(avatar)
                  ? avatar
                  : "https://www.flowbite-react.com/images/people/profile-picture-1.jpg"
              }
              theme={CustomTheme.avatar}
              size={"base"}
              rounded
            />
            <div className="flex flex-col ml-4">
              <h3 className="font-medium text-base">{name}</h3>
              <p className="text-gray-500 text-sm">{city}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 justify-center mb-3">
            <div className="flex items-center content-center gap-x-2">
              <GlobeAltIcon className="w-5 h-5 block text-gray-700" />
              <a
                href={socmed_or_web_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal text-gray-700">
                {socmed_or_web_url}
              </a>
            </div>
            <div className="flex items-center content-center gap-x-2">
              <PhoneIcon className="w-5 h-5 block text-gray-700" />
              <p className="font-normal text-gray-700">{contact}</p>
            </div>
          </div>
          <p className="font-normal text-gray-700 text-justify">{desc}</p>
        </div>
      </Modal.Body>
      <Modal.Footer theme={CustomTheme.modal.footer}>
        <Button color="gray" onClick={() => setOpenModal(false)}>
          Batal
        </Button>

        <div className="flex space-x-2">
          <Button color="failure" onClick={handleClickReject}>
            Tolak
          </Button>
          <Button color="success" onClick={handleClickApprove}>
            Terima
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDetailSeller;
