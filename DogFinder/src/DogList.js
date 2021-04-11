import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";
const DogList = ({ dogs }) => {
  console.log(dogs);
  return (
    <div className="container">
      <h2>Say hello to our dogs!</h2>

      <ul>
        {dogs.map((dog) => {
          return (
            <li key={dog.name}>
              <img className="list-img" src={dog.src} alt={dog.name}></img>
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DogList;
