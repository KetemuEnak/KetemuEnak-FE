import React from "react";
import ProfileSeller from "../../components/Profile/profile-seller";
import ProfileEO from "../../components/Profile/profile-eo";
import NotFound from "../../components/NotFound";

function ProfilePage() {
  const role = localStorage.getItem("role");
  console.log(role);

  return (
    <>
      {/* <Header></Header> */}
      {role === "eo" && <ProfileEO></ProfileEO>}
      {role === "seller" && <ProfileSeller></ProfileSeller>}
      {!role && <NotFound></NotFound>}

      {/* <Footer></Footer> */}
    </>
  );
}

export default ProfilePage;
