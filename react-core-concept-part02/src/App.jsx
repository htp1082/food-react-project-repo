
import "./App.css";
import Counter from "./ Counter";
import Practice from "./ Practice";
import Runs from "./Runs";

// function evnenHandler(){
//   alert("Press the button")
// }

// const add=(x)=>{
//   const sum = x+ 5;
//   alert(sum)
// }

// const btn =()=>{
//   alert("Press the button3")
// }
function App() {
  return (
    <>

    <Practice></Practice>
    <Runs></Runs>

    {/* <Counter></Counter> */}
      {/* <button onClick={()=>evnenHandler()}>Click</button>
      <button onClick={()=>add(10)}>Button2</button>
      <button onClick={()=>btn()}>Button3</button> */}
    </>
  );
}
export default App;


