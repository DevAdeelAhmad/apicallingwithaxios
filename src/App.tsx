import React from "react";
import "./App.css";
import { useEffect, useState } from "react";

interface TodoItem{
  completed : boolean,
  id : number,
  title : string,
  userId : number
}

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos") //1. Make request  2.Return res as it is  3.Convert it to JSON
      .then((response) => response)
      .then((e) => e.json())
      .then((e) => setTodos(e as TodoItem[]));
  }, []);
  return (
    <div className="App">
      <ol>
        {todos.map((todo, key) => (
          <li>{todo.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
