import { Suspense } from "react";
import "./App.css";
import Todos from "./Todos";

function App() {
  const todosFech = fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );

  return (
    <>
      <Suspense fallback={<h2>Todo are loading...</h2>}>
        <Todos todosFech={todosFech}></Todos>
      </Suspense>
    </>
  );
}

export default App;
