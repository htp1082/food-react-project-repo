 export default function Todo({task,isDone}){
    return(
        <>
        {isDone?(
            <li>Task:{task} Status: IsDone</li>
        ):( <li>Task:{task} Status: Pending</li>)
         
        }
        
        </>
    )
 }