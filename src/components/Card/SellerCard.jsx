import { Card, Avatar, Button } from "flowbite-react";
import { CustomTheme } from "../../themes/theme";
import { useState } from "react";
import ModalDetailSeller from "../Modals/ModalDetailSeller";

const SellerCard = ({ img, avatar, name, city, desc }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Card theme={CustomTheme.card}>
      <div className="flex items-center">
        <Avatar img={avatar} theme={CustomTheme.avatar} size={"base"} rounded />
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
        <Button color="failure">Tolak</Button>
        <Button color="success">Terima</Button>
      </div>
      <ModalDetailSeller
        openModal={openModal}
        setOpenModal={setOpenModal}
        avatar={avatar}
        city={city}
        img={img}
        name={name}
        desc={desc}
      />
    </Card>
  );
};

export default SellerCard;
