// Using useState hook to update state


import { useState } from "react";
import Timecss from  "./time.module.css";
const Time = () => {


let time = new Date().toLocaleTimeString();
const [state,settime] = useState(time);

const updateTime = () => {
 time = new Date().toLocaleTimeString();
 settime(time);
};
setInterval(updateTime,1000);

    return (
        <>
      
         
        <h1>{state}</h1>
    
        </>
    )
};

export default Time;