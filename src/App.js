import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import DogRoutes from "./DogRoutes";
import Nav from "./Nav";
import axios from "axios";
import './App.css';

function App() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  /** retrieve all of the dogs from API */
  async function getDogs() {
    const response = await axios.get("http://localhost:5001/dogs");
    const allDogs = response.data;
    setDogs(allDogs);
    setIsLoading(false)
  }

  if (isLoading){
    getDogs()
  }

  const dogNames = dogs.map(dog => dog.name)

  return (
    <BrowserRouter>
      <div className="App">
        <Nav dogNames={dogNames} />
        <DogRoutes dogData={dogs}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
