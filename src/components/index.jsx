import { useState, useEffect } from "react";
// import React from 'react';
import flags from "./flags.json";
// console.log(flags.name)

function FWC() {
  const [countries] = useState(flags);
  const [fifaFlag, fifaFlagSelected] = useState("");

//   let selectedCountry = "";
//   for (let i = 0; i < countries.length; i++) {
//     selectedCountry = countries[i].name;
//     console.log(selectedCountry);
//   }

  const dropChange = (event) => {
    fifaFlagSelected(event.target.value);
  };

  // const flagShow = "";
  // if (selectedCountry === "" || selectedCountry === null){
  //     return prompt("No country selected, please select a country!")
  // }

  // useEffect(() => (
  //     async function fetchData() {
  //         fetch('./flags.json').then((response => response.json ()).then((data) => {
  //             if (data){
  //                 countries(data)
  //             }
  //         }
  //     ))

  return (
    <>
      <div>
        <h1>The World Cup is here!</h1>
        <div className="container">
            <h3>Please Choose a Flag</h3>
          <div className="containerInput">
            <select onChange={dropChange}>
                <option>Pick A Country</option>
              {countries.map((flags) => (
                <option key={flags.country} value={flags.flags}>
                  {flags.country}
                </option>
              ))}
            </select>
          </div>
          <div className="Imagecontainer">
            {fifaFlag && <img src={fifaFlag} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default FWC;
