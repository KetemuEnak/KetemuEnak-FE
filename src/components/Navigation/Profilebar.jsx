import { useState } from "react";
import {
  UserIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import "./index.css";

const Profilebar = ({ avatar }) => {
  const [isVissible, setIsVissible] = useState(false);
  const menu = [
    {
      id: 1,
      name: "Edit Profile",
      icon: <UserIcon className="block h-6 mr-3" />,
    },
    {
      id: 2,
      name: "Logout",
      icon: (
        <ArrowRightOnRectangleIcon className="block w-6 h-6 mr-3 text-red-600" />
      ),
    },
  ];

  return (
    <div
      className="relative flex items-center content-center h-full px-1 cursor-pointer"
      onMouseEnter={() => setIsVissible(true)}
      onMouseLeave={() => setIsVissible(false)}>
      <span className="border-2 border-primary border-solid rounded-full">
        <img
          className="w-8 h-8 border border-white border-solid rounded-full md:h-9 lg:h-10 md:w-9 lg:w-10"
          src={avatar}
          alt=""
        />
      </span>
      <div
        className={`absolute right-0 top-[60px] w-auto bg-white border border-gray-200 rounded-lg flex flex-col shadow-lg cursor-auto fade ${
          isVissible && "show"
        }`}>
        {menu.map((value) => (
          <div
            className={` flex items-center px-3 py-4 hover:bg-gray-100 cursor-pointer w-36`}
            key={value.id}>
            {value.icon}
            <p
              className={`text-sm flex-grow w-full ${
                value.id === 2 && "text-red-600"
              }`}>
              {value.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profilebar;
