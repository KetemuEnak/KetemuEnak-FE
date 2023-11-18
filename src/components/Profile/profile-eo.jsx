import React, { useState, useEffect } from "react";
import EventImage from "/src/components/assets/image.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import data from "/src/database/dummy.json";
import Navbar from "../Navigation/Navbar";
import FooterComponent from "../Footer/Footer";

function ProfileEO() {
  const { profileId } = useParams();
  const profile = data.users.eo.find((event) => event.id === Number(profileId));

  return (
    <>
      <Navbar />
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="md:flex gap-6">
          <aside className="bg-[#faf3eb] xl:min-w-[350px] md:max-w-[400px] rounded-xl p-8 shadow-lg self-start">
            <div className="flex justify-center">
              <img className="w-32 h-32 rounded-full" src={profile.profile_image} alt="Profile" />
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 mt-2">{profile.company_name}</h1>
            <div className="text-left mt-8">
              <div className="mb-6">
                <p className="text-base text-gray-600 font-serif text-[18px]">Email</p>
                <p className=" text-black font-medium font-serif text-[18px]">{profile.email}</p>
              </div>
              <div className="mb-6">
                <p className="text-base text-gray-600 font-serif text-[18px]">Address</p>
                <p className="text-base text-black font-medium font-serif text-[18px]">{profile.address}</p>
              </div>
              <div className="mb-6">
                <p className="text-base text-gray-600 font-serif text-[18px]">Contact</p>
                <p className="text-base text-black font-medium font-serif text-[18px]">{profile.contact_number}</p>
              </div>
              <div className="mb-6">
                <p className="text-base text-gray-600 font-serif text-[18px]">Situs</p>
                <Link className="text-base text-black font-medium font-serif text-[18px]" to={profile.website_link}>
                  {profile.website_link}
                </Link>
              </div>
              <div className="text-end">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                  Edit profile
                </button>
              </div>
            </div>
          </aside>
          <div className="bg-[#faf3eb] max-w-[800px] md:max-w-full rounded-xl p-8 shadow-lg text-left self-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Description</h1>
              <p className="mt-2 text-base text-gray-500 break-words">{profile.description}</p>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default ProfileEO;
