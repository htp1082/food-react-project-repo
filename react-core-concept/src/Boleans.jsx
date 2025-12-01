 export default function Boleans({boleans}){
    console.log(boleans)
    return(

        <li>{boleans.isDone ? `Task ${boleans.task}` : `is pending`}</li>

    )
 }