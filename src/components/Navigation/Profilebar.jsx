import { useState } from "react";
import { UserIcon, ArrowRightOnRectangleIcon, HomeIcon } from "@heroicons/react/24/outline";
import "./index.css";
import { Link } from "react-router-dom";

const Profilebar = ({ avatar }) => {
  const profileId = localStorage.getItem("id");
  const role = localStorage.getItem("role");

  const [isVissible, setIsVissible] = useState(false);
  const menu = [
    {
      id: 1,
      name: "Home",
      icon: <HomeIcon className="block h-6 mr-3" />,
    },
    {
      id: 2,
      name: "Profile",
      icon: <UserIcon className="block h-6 mr-3" />,
    },
    {
      id: 3,
      name: "Logout",
      icon: <ArrowRightOnRectangleIcon className="block w-6 h-6 mr-3 text-red-600" />,
    },
  ];

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <div className="relative flex items-center content-center h-full px-1 cursor-pointer" onMouseEnter={() => setIsVissible(true)} onMouseLeave={() => setIsVissible(false)}>
      <span className="border-2 border-primary border-solid rounded-full">
        <img className="w-8 h-8 border border-white border-solid rounded-full md:h-9 lg:h-10 md:w-9 lg:w-10" src={avatar} alt="" />
      </span>
      <div className={`absolute right-0 top-[60px] w-auto bg-white border border-gray-200 rounded-lg flex flex-col shadow-lg cursor-auto fade ${isVissible && "show"}`}>
        {menu.map((value) => (
          <Link
            to={
              (value.id === 1 && ((role === "eo" && "/event") || (role === "seller" && "/seller"))) || (value.id === 2 && `/profile/${profileId}`) || (value.id === 3 && ((role === "eo" && "/signin") || (role === "seller" && "/signin-eo")))
            }
            onClick={value.id === 3 && clearLocalStorage}
          >
            <div className={` flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer w-36`} key={value.id}>
              {value.icon}
              <p className={`text-sm flex-grow w-full ${value.id === 3 && "text-red-600"}`}>{value.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Profilebar;
