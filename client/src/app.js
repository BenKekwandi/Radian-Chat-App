import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [apiData, setApiData] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((response) => response.json())
      .then((apiData)=>{
        setApiData(apiData);
        console.log(apiData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (<div>
    <h1>I am The Client</h1>
    <h3>{apiData.name}</h3>
  </div>);
}
export default App;
