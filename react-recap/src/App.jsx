import "./App.css";
import Even from "./Even";

// component => 
//props ==>
// even handler ==>
//

  function evenHandler(){
    alert("Button was cliked")
  }

function App() {
  
  return (
    <>
      <Btn></Btn>
      <Personal name ="Hla Thue Prue Marma" city="Bangladesh"></Personal>
      <Even></Even>
      <Button></Button>
    </>
  );
}

const Btn = () => {
  return (
    <>
      <h2>This is a practice task.</h2>
    </>
  );
};

function Personal({name,city}){
    return(<>
       <p>My name is {name}. Iam from {city} .</p>
    </>)
}

function Button(){

  
  return(
    <button onClick={evenHandler}>Press</button>
  )
}
export default App;
