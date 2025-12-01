import { use } from "react"
import Todo from "./Todo";


 export default function Todos ({todosFech}){

    const todo = use(todosFech);
    console.log(todo)
    return(
        <>

        <div>
            <h2>Total Task:{todo.length}</h2>
            {
                todo.map(todo => <Todo key={todo.id} todo={todo}></Todo>)
            }
        </div>
        
        </>
    )
 }