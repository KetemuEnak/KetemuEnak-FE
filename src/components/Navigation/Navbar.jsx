import Searchbar from "./Searchbar";
import Profilebar from "./Profilebar";
import { useContext } from "react";
import { EventContext } from "../../pages/Event";
import { SellerContext } from "../../pages/Seller";

const Navbar = ({ isSeller }) => {
  const { userData } = useContext(isSeller ? SellerContext : EventContext);

  return (
    <header className="flex items-center content-center w-full h-20 md:h-24 lg:h-28">
      <nav className="flex items-center justify-between w-full h-16 px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-ke-brand">
          Ketemu Enak
        </h1>
        <div className="flex items-center h-full gap-x-2 sm:gap-x-3 md:gap-x-4 lg:gap-x-5">
          <Searchbar />
          <Profilebar avatar={userData.avatar} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
