import React,{useState} from "react";
function ControlledComponent(){
   const[value,setvalue]=useState("GeekyShows")
   let handlerChange=()=>{
     //console.log(e.target.value)
     this.setvalue({value})
   }
    return(
        <>
        <form>
            <h2>controlled by react</h2>
            <input type="text" value={value} onChange={handlerChange}/>
        </form>
        </>
    );
}
export default ControlledComponent;