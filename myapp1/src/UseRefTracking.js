import { useState,useEffect,useRef } from "react";
import { ReactDOM } from "react-dom/client";
 
function TrackingstateChange(){
    const[inputValue,setinputvalue]=useState("");
    const previousinputvalue=useRef();
   

    useEffect(()=>{
        previousinputvalue.current=inputValue;
        
    },[inputValue]);
    return(
        <>
        <input
        type="text"
        value={inputValue}
        onChange={(e)=>setinputvalue(e.target.value)}/>
        
        <h2>Current Value:{inputValue}</h2>
        <h2>previous value:{previousinputvalue.current}</h2>
        </>
  )
}
export default TrackingstateChange;