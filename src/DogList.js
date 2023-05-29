import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css"

/** Does something
 *
 * State
 * - dog
 *[
 *  { "name": "Whiskey",
      "age": 5,
      "src": "whiskey",
      "facts": [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    }...
  ]
 */

function DogList({dogData}) {
  return (
    <div className="DogList">
      <h3>Here are all of the dogs!</h3>
      <div className="dog-area">
        {dogData.map(dog =>
          <div className="dog-card" key={dog.name}>
            <img className="dog-img" src={`/${dog.name}.jpg`} alt={`${dog.name}`} />
            <Link to={`/dogs/${dog.name}`}>
              {dog.name}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default DogList;