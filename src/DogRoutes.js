import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function DogRoutes({dogData}) {
  return (
    <Routes className="DogRoutes">
      <Route element={<DogList dogData={dogData} />} path="/dogs" />
      <Route element={<DogDetails dogData={dogData} />} path="/dogs/:name" />
      <Route element={<Navigate to="/dogs" />} path="*" />
    </Routes>
  );
}

export default DogRoutes;