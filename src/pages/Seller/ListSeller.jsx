import { useEffect } from "react";
import Navbar from "../../components/Navigation/Navbar";
import FooterComponent from "../../components/Footer/Footer";
import ProfileAlert from "../../components/Card/ProfileAlert";
import SellerCard from "../../components/Card/SellerCard";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useGetApi from "../../hooks/useGetApi";

const ListSeller = () => {
  const { idEvent } = useParams();

  const id = localStorage.getItem("id");
  const [sellerData, setSellerData] = useState([]);
  const { apiResponse, isLoading, error } = useGetApi(
    `eo/${id}/event/${idEvent}/list_seller`
  );

  useEffect(() => {
    if (apiResponse) {
      setSellerData(apiResponse);
      console.log(apiResponse);
    }
  }, [apiResponse]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col mx-8">
        <div className="flex items-center justify-center my-6">
          <ProfileAlert />
        </div>

        <div className="flex flex-col mt-6">
          <h1 className="mb-6 text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
            Potential Seller
          </h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sellerData.map((seller) => (
              <SellerCard
                key={seller.id}
                idEO={id}
                idEvent={idEvent}
                idSeller={seller.id_Seller}
                avatar={seller.seller.img_url}
                city={seller.seller.city}
                img={seller.seller.img_url}
                name={seller.seller.name}
                desc={seller.seller.description}
                socmed_or_web_url={seller.seller.socmed_or_web_url}
                contact={seller.seller.contact}
              />
            ))}
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default ListSeller;
