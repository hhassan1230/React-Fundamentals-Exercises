import logo from "./logo192.png";
import React from "react";
import "./App.css";


const App = () => {
  const name = "React";

  const facts = {
    releaseDate: "May 2013",
    language: "JavaScript",
    license: "MIT",
  };

  const aboutReact = (facts) =>
    `Release date: ${facts.releaseDate}. Language: ${facts.releaseDate}. License: ${facts.license}.`;

//   const listItems = facts.map((fact) =>
//   <li>{fact}</li>
// );
  return <div className="container">
    <img src={logo} alt="React Logo" />
    <h2>React</h2>
    <div>{aboutReact(facts)}</div>
    {/* <ul>{listItems}</ul> */}
  </div>;
};

export default App;

