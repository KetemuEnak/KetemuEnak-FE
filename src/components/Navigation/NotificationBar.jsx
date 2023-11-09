import { useState } from "react";
import {
  BellIcon,
  XMarkIcon,
  EnvelopeOpenIcon,
} from "@heroicons/react/24/outline";
import "./index.css";

const NotificationBar = () => {
  const [isVissible, setIsVissible] = useState(false);

  return (
    <div
      className="relative flex items-center content-center h-full cursor-pointer px-1"
      onMouseEnter={() => setIsVissible(true)}
      onMouseLeave={() => setIsVissible(false)}>
      <BellIcon className="w-7 h-7 block text-gray-600 hover:text-gray-800" />
      <div
        className={`absolute right-0 top-[60px] w-80 bg-white  border border-gray-200 rounded-lg flex flex-col shadow-lg cursor-auto fade ${
          isVissible && "show"
        }`}>
        <div className="flex justify-between border-b border-gray-200 px-4 py-3">
          <h1 className="">Notification</h1>
          <XMarkIcon
            className="w-6 h-6 block cursor-pointer"
            onClick={() => setIsVissible(false)}
          />
        </div>
        <div className="flex flex-col items-center justify-items-center gap-y-5 py-8">
          <EnvelopeOpenIcon className="w-10 h-10 block text-gray-400" />
          <h3 className="text-gray-400">There are no notifications for you</h3>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;
