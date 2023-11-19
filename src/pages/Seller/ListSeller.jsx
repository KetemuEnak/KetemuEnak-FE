import { useEffect, useState, useReducer } from "react";
import Navbar from "../../components/Navigation/Navbar";
import FooterComponent from "../../components/Footer/Footer";
import ProfileAlert from "../../components/Card/ProfileAlert";
import SellerCard from "../../components/Card/SellerCard";
import { useParams } from "react-router-dom";
import useGetApi from "../../hooks/useGetApi";

const ListSeller = () => {
  const { idEvent } = useParams();
  const [dataChanged, updateData] = useReducer((x) => x + 1, 0);
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
  }, [dataChanged, apiResponse]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col mx-8">
        <div className="flex items-center justify-center my-6">
          <ProfileAlert />
        </div>

        <div className="flex flex-col mt-6">
          <h1 className="mb-6 text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
            Peserta Acara
          </h1>
          {isLoading && (
            <p className="font-normal text-gray-700 text-center py-5 my-5">
              Loading...
            </p>
          )}
          {!isLoading && sellerData.length === 0 ? (
            <p className="font-normal text-gray-700 text-center py-5 my-5">
              Belum ada seller yang anda setujui.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {sellerData
                .filter((seller) => seller.status === "accepted")
                .map((seller) => (
                  <SellerCard
                    key={seller.id}
                    idEO={id}
                    idEvent={idEvent}
                    idSeller={seller.id}
                    avatar={seller.seller.img_url}
                    city={seller.seller.city}
                    img={seller.seller.img_url}
                    name={seller.seller.name}
                    desc={seller.seller.description}
                    socmed_or_web_url={seller.seller.socmed_or_web_url}
                    contact={seller.seller.contact}
                    status={seller.status}
                    updateData={updateData}
                  />
                ))}
            </div>
          )}
        </div>
        <div className="flex flex-col mt-6">
          <h1 className="mb-6 text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
            Pendaftar Acara
          </h1>
          {isLoading && (
            <p className="font-normal text-gray-700 text-center py-5 my-5">
              Loading...
            </p>
          )}
          {!isLoading && sellerData.length === 0 && (
            <p className="font-normal text-gray-700 text-center py-5 my-5">
              Belum ada orang yang mendaftar pada acara ini.
            </p>
          )}
          {!isLoading &&
          sellerData.filter((seller) => seller.status === null).length === 0 ? (
            <p className="font-normal text-gray-700 text-center py-5 my-5">
              Belum ada orang yang mendaftar lagi pada acara ini.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {sellerData
                .filter((seller) => seller.status === null)
                .map((seller) => (
                  <SellerCard
                    key={seller.id}
                    idEO={id}
                    idEvent={idEvent}
                    idSeller={seller.id}
                    avatar={seller.seller.img_url}
                    city={seller.seller.city}
                    img={seller.seller.img_url}
                    name={seller.seller.name}
                    desc={seller.seller.description}
                    socmed_or_web_url={seller.seller.socmed_or_web_url}
                    contact={seller.seller.contact}
                    status={seller.status}
                    updateData={updateData}
                  />
                ))}
            </div>
          )}
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default ListSeller;
