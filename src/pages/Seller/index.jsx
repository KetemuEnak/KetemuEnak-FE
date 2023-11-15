import { createContext } from "react";
import Navbar from "../../components/Navigation/Navbar";
import FooterComponent from "../../components/Footer/Footer";
import ProfileAlert from "../../components/Card/ProfileAlert";
import SellerCard from "../../components/Card/SellerCard";
import data from "../../json/dummy.json";
import { Button } from "flowbite-react";
import { CustomTheme } from "../../themes/theme";

export const SellerContext = createContext();

const PotentialSeller = () => {
  const sellers = data.seller;
  const userData = data.user.seller;

  return (
    <SellerContext.Provider value={{ userData }}>
      <Navbar isSeller={true} />
      <main className="flex flex-col mx-8">
        <div className="flex items-center justify-center my-6">
          <ProfileAlert />
        </div>
        <Button
          size="sm"
          theme={CustomTheme.button}
          // onClick={}
          href="/create-event"
          style={{width:200, marginTop:10}}
          color={"primary"}>
          Tambahkan Event
        </Button>
        <div className="flex flex-col mt-6">
          <h1 className="mb-6 text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
            Potential Seller
          </h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sellers.map((seller) => (
              <SellerCard
                key={seller.id}
                avatar={seller.avatar}
                city={seller.city}
                img={seller.img}
                name={seller.name}
                desc={seller.desc}
              />
            ))}
          </div>
        </div>
      </main>
      <FooterComponent />
    </SellerContext.Provider>
  );
};

export default PotentialSeller;
