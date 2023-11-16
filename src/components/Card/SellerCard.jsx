import { Card, Avatar, Button } from "flowbite-react";
import { CustomTheme } from "../../themes/theme";
import { useState } from "react";
import ModalDetailSeller from "../Modals/ModalDetailSeller";
import axios from "axios";
import { ApiUrl } from "../../config/ApiUrl";
import CekUrl from "../../utils/CekUrl";

const SellerCard = ({
  idEO,
  idEvent,
  idSeller,
  socmed_or_web_url,
  contact,
  img,
  avatar,
  name,
  city,
  desc,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const token = localStorage.getItem("token");

  const handleClickApprove = () => {
    axios
      .put(`${ApiUrl}/eo/${idEO}/event/${idEvent}/${idSeller}/approve`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  const handleClickReject = () => {
    axios
      .put(`${ApiUrl}/eo/${idEO}/event/${idEvent}/${idSeller}/reject`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  return (
    <Card theme={CustomTheme.card}>
      <div className="flex items-center">
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
      <p className="text-base text-gray-700 line-clamp-4 text-justify mb-3">
        {desc}
      </p>
      <div className="grid grid-cols-3 gap-x-3">
        <Button color="light" onClick={() => setOpenModal(true)}>
          Detail
        </Button>
        <Button color="failure" onClick={handleClickReject}>
          Tolak
        </Button>
        <Button color="success" onClick={handleClickApprove}>
          Terima
        </Button>
      </div>
      <ModalDetailSeller
        openModal={openModal}
        setOpenModal={setOpenModal}
        avatar={avatar}
        city={city}
        img={img}
        name={name}
        desc={desc}
        handleClickApprove={handleClickApprove}
        handleClickReject={handleClickReject}
        socmed_or_web_url={socmed_or_web_url}
        contact={contact}
      />
    </Card>
  );
};

export default SellerCard;
