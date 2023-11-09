import { Button, Modal, Avatar } from "flowbite-react";
import { CustomTheme } from "../../themes/theme";

const ModalDetailSeller = ({
  openModal,
  setOpenModal,
  img,
  avatar,
  name,
  city,
  desc,
}) => {
  return (
    <Modal
      dismissible
      show={openModal === true}
      onClose={() => setOpenModal(false)}>
      <Modal.Header>Detail</Modal.Header>
      <Modal.Body>
        <div className="flex flex-col px-10 w-full ">
          <img src={img} alt="" className="w-96 mb-5 self-center rounded-lg" />
          <div className="flex items-center py-4 border-y border-solid border-gray-100 mb-5">
            <Avatar
              img={avatar}
              theme={CustomTheme.avatar}
              size={"base"}
              rounded
            />
            <div className="flex flex-col ml-4">
              <h3 className="font-medium text-base">{name}</h3>
              <p className="text-gray-500 text-sm">{city}</p>
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
          <Button color="failure">Tolak</Button>
          <Button color="success">Terima</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDetailSeller;
