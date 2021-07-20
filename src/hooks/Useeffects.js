import { useState,useEffect } from "react";

const Useeffects = () =>{

 const [state, setstate] = useState(0);

 useEffect(() => {
    document.title = `You clicked ${state} times`;
alert(state);
  });


    return(
        <>
        <p>Age increse {state} </p>
        <button onClick={() => setstate( state+1 )}>Age increse by 1 </button>
        </>
    )
};

export default  Useeffects;