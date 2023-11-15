import React from "react";
import ProfileSeller from "../../components/Profile/profile-seller";
import ProfileEO from "../../components/Profile/profile-eo";

function ProfilePage() {
  const role = localStorage.getItem("role");
  console.log(role);

  return (
    <>
      {/* <Header></Header> */}

      {role === "eo" && <ProfileEO></ProfileEO>}
      {role === "seller" && <ProfileSeller></ProfileSeller>}

      {/* <Footer></Footer> */}
    </>
  );
}

export default ProfilePage;
