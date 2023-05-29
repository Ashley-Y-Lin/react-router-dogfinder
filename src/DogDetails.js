import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DogDetailCard from "./DogDetailsCard";

function DogDetails({ dogData }) {
  const params = useParams(); // { name: ... }
  const navigate = useNavigate();

  const currDog = dogData.find(dog => dog.name === params.name);
  if (currDog === undefined) {
    navigate("/dogs");
    return null;
  }

  return (
    <DogDetailCard dogInfo={currDog}/>
  );
}

export default DogDetails;