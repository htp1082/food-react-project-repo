import { Suspense } from "react";
import "./App.css";
import Users from "./Users";
import Posts from "./Posts";

function App() {
  // const userFetch = fetch("https://jsonplaceholder.typicode.com/users#").then(
  //   (res) => res.json()
  // );
  // .then((data) => console.log(data));

  const postFech = fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())

  return (
    <>
      {/* <Suspense fallback={<p>Loading users...</p>}>
        <Users userFetch={userFetch}></Users>
      </Suspense> */}

      <Suspense fallback={<h2>Data is loading...</h2>}>
          <Posts postFech={postFech}></Posts>
      </Suspense>
    </>
  );
}

export default App;
