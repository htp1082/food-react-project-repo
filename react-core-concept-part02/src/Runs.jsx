import { useState } from "react"

export default function Runs (){

    const[runs,setRun] = useState(0)
    const [six, setSix] = useState(0)
    const [four, setFour] = useState(0)
    const singleRuns=()=>{
        const updateRuns = runs+1;
        setRun(updateRuns);
    }

    const sixRuns=()=>{
        const updateRuns= runs + 6;
        const updateSix= six + 1;
        setRun(updateRuns);
        setSix(updateSix);
    }

    const fourRuns=()=>{
        const updateRuns = runs + 4;
        const  updateFours = four + 1;
        setRun(updateRuns);
        setFour(updateFours)
    }

    return(

       <div className="run_card">

        { runs>50 && <p>Your are 50 Runs</p> }
        {runs>100 && <p>Your are 100 Runs</p>}

        <div>
            <h3>Six:{six}</h3>
            <h3>Four:{four}</h3>
            <h2>Runs:{runs}</h2>
        </div>
          <button className="btn" onClick={singleRuns}>Single Runs</button>
          <button className="btn" onClick={sixRuns}>Six Runs</button>
          <button className="btn" onClick={fourRuns}>Four Runs</button>
       </div>

    )
}