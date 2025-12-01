import "./App.css";
import Todo from "./Todo";
import Online from "./Online";
import Books from "./Books";
import Boleans from "./Boleans";
import Fruits from "./Fruits";

function App() {

  
  const books = [
  { id: 1, task: "Learn React" },
  { id: 2, task: "Practice map()" },
  { id: 3, task: "Build Projects" }
];

const tasks = [
  { task: "Wake up", isDone: true },
  { task: "Study", isDone: false },
  { task: "Practice React", isDone: false }
];

const fruits = ["Apple", "Banana", "Mango", "Orange"];
  return (
    <>
      {/* <h1>React core concept</h1>
      <h2>Todo List=</h2>
      <Todo task="Recap JavaScript" isDone={true}></Todo>
      <Todo task="React Core concept" isDone={false}></Todo>
      <Online Name="sujon" isOnline={true}></Online>
      <Online Name="Hla Thue Prue" isOnline={false}></Online> */}

      <h2>Todo Books</h2>
      
     {
      books.map(books=> <Books key={books.id} books={books}></Books>)
     }
      <h2>Todo task</h2>
     {tasks.map(boleans => <Boleans key={boleans.task} boleans={boleans}></Boleans>)}

     <h2>Fruits ==</h2>
     {fruits.map(fruits=> <fruits> {fruits}</fruits>)}

           
      {/* <Person
        name="Hla Thue Prue Marma"
        Age="23"
        City="Bandarban"
        Country="Bangladesh"
      ></Person>
      <Books bilogy="Biology" bangla="Bangla" physics="Physics"></Books>
      <City ban="Bandarban" nila="Nilachol" nil="Nilgiri" mag="Maghla"></City> */}
    </>
  );
}

// function Person(props) {
//   return (
//     <>
//       <h2>Introduction Myself</h2>
//       <p>
//         Hi! My name is {props.name}. Iam {props.Age} years old. I come from{" "}
//         {props.City}. Iam Nationality from {props.Country}
//       </p>
//     </>
//   );
// }

// function Books({ bilogy, bangla, physics }) {
//   return (
//     <>
//       <div className="books">
//         <h1>My Favourite Books ===</h1>
//         <ul>
//           <li id="book">{bilogy}</li>
//           <li id="book">{bangla}</li>
//           <li id="book">{physics}</li>
//         </ul>
//       </div>
//     </>
//   );
// }

// function City({ ban, nila, nil, mag }) {
//   return (
//     <>
//       <div className="books">
//         <h1>My Favourite places are there==</h1>
//         <li>{ban}</li>
//         <li>{nila}</li>
//         <li>{nil}</li>
//         <li>{mag}</li>
//       </div>
//     </>
//   );
// }
export default App;
