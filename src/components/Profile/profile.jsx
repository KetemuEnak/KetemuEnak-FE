import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Navbar from "../Navigation/Navbar";
import FooterComponent from "../Footer/Footer";

function Profile() {
  const defaultAvatar = "https://www.flowbite-react.com/images/people/profile-picture-1.jpg";
  const defaultBanner = "https://i.pinimg.com/564x/a2/82/e1/a282e1dd7d8ecac071e1e7f44a713c0b.jpg";

  const [profiles, setProfiles] = useState([]);
  const { profileId } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/eo/${profileId}`)
      .then((response) => {
        setProfiles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [profileId]);

  const profile = profiles[0];

  return (
    <>
      <Navbar />
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="md:flex gap-6">
          <aside className="bg-[#faf3eb] xl:min-w-[350px] md:max-w-[400px] rounded-xl p-8 shadow-lg self-start">
            <div className="flex justify-center">
              <img className="w-32 h-32 rounded-full" src={profile?.img_url || defaultAvatar} alt="Profile" />
            </div>
            <h1 className="text-2xl text-center font-semibold text-gray-900 mt-2">{profile?.name || profile?.email}</h1>
            <h2 className="text-xl text-center font-semibold text-[#C98411] mt-2">
              {profile?.role === "eo" && "Event Organizer"}
              {profile?.role === "seller" && "Seller"}
            </h2>

            <div className="text-left mt-8">
              <div className="mb-6">
                <p className="text-base text-gray-600 font-serif text-[18px]">Email</p>
                <p className=" text-black font-medium font-serif text-[18px]">{profile?.email}</p>
              </div>
              <div className="mb-6">
                <p className="text-base text-gray-600 font-serif text-[18px]">Address</p>
                <p className="text-base text-black font-medium font-serif text-[18px]">{profile?.address}</p>
              </div>
              <div className="mb-6">
                <p className="text-base text-gray-600 font-serif text-[18px]">Contact</p>
                <p className="text-base text-black font-medium font-serif text-[18px]">{profile?.contact}</p>
              </div>
              <div className="mb-6">
                <p className="text-base text-gray-600 font-serif text-[18px]">Social Media</p>
                <Link className="text-base text-black font-medium font-serif text-[18px]" to={profile?.socmed_or_web_url}>
                  {profile?.socmed_or_web_url !== null && profile?.socmed_or_web_url.length > 30 ? `${profile?.socmed_or_web_url.slice(0, 30)}...` : profile?.socmed_or_web_url}
                </Link>
              </div>
              <Link to={"/create-profile"}>
                <div className="text-end">
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                    Edit profile
                  </button>
                </div>
              </Link>
            </div>
          </aside>
          <div className="bg-[#faf3eb] max-w-[800px] md:max-w-full rounded-xl p-8 shadow-lg text-left self-start">
            <div className="bg-[#EAD7BB] flex flex-col items-center mx-3 sm:mx-6 min-w-0 md:min-w-[700px] md:mx-auto md:mb-6 lg:py-0 mb-10 md:h-[300px]">
              <img className="h-full py-3 px-4" src={profile?.banner || defaultBanner} alt="logo" />
            </div>
            <div className="mt-6">
              <h1 className="text-2xl font-bold text-gray-900">Description</h1>
              <p className="mt-2 text-base text-gray-500 break-words">{profile?.description}</p>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default Profile;
