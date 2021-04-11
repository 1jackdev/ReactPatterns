import React from "react";
import { useParams, Redirect } from "react-router-dom";

const DogDetails = ({ dogs }) => {
  const { dog } = useParams();

  let dogObj = dogs.filter((d) => {
    return d.name.toLowerCase() === dog;
  })[0];
  if (!dogObj) return <Redirect to="/dogs" />;
  return (
    <div className="container">
      <h2>Say hello to {dogObj.name}!</h2>
      <h4>Age: {dogObj.age}</h4>
      <ul>
        {dogObj.facts.map((fact, idx) => {
          return <li key={idx}>{fact}</li>;
        })}
      </ul>
      <img className="details-img" src={dogObj.src} alt={dogObj.name}></img>
    </div>
  );
};

export default DogDetails;
