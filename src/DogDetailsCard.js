import React from "react";

function DogDetailCard({ dogInfo }) {
  const { name, age, facts } = dogInfo;

  return (
    <div className="DogDetailsCard">
      <h3>Meet {name}!</h3>
      <img className="dog-img" src={`/${name}.jpg`} alt={`${name}`} />
      <p><b>Age</b>: {age}</p>
      <div className="fact-area">
        <p><b>Facts about {name}</b>:</p>
        <ul>
          {facts.map(fact => <li key={`${fact}`}>{fact}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default DogDetailCard;