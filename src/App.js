import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response)
      .then((e) => e.json())
      .then((response) => console.log(response));
  }, []);
  return <div className="App"></div>;
}

export default App;
