import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailEvent from "../pages/DetailPage";
import ProfilePage from "../pages/ProfilePage";

function SetupRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/detail/:eventId" element={<DetailEvent />} />
      <Route path="/profile/:profileId" element={<ProfilePage />} />
    </Routes>
  );
}

export default SetupRoutes;
