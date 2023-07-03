import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos") //1. Make request  2.Return res as it is  3.Convert it to JSON
      .then((response) => response)
      .then((e) => e.json())
      .then((response) => console.log(response));
  }, []);
  return <div className="App"></div>;
}

export default App;
