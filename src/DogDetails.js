import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function DogDetails({ dogData }) {
  const params = useParams(); // { name: ... }
  const navigate = useNavigate();

  const currDog = dogData.find(dog => dog.name === params.name);
  if (currDog === undefined) {
    navigate("/dogs");
    return null;
  }

  //TODO: split into logical / presentational components

  return (
    <div className="DogDetails">
      <h3>Meet {currDog.name}!</h3>
      <img className="dog-img" src={`/${currDog.name}.jpg`} alt={`${currDog.name}`} />
      <p><b>Age</b>: {currDog.age}</p>
      <div className="fact-area">
        <p><b>Facts about {currDog.name}</b>:</p>
        <ul>
          {currDog.facts.map(fact => <li key={`${fact}`}>{fact}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default DogDetails;