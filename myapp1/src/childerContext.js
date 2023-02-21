import React,{useContext} from "react";
import { mycontext } from "./ContextFile";

const children=()=>{
    const {commonData,setCommonData}=useContext(mycontext)
    return(
        <>
        <div className="block" style={{background:"#f99595"}}>
       <div>
       <h3>child one</h3>
       <p>Has access to common data</p>
      </div>
      <button style={{background:"#ff5d5d"}} onClick={()=>setCommonData('pink')}>Change content</button>
      </div>
    </>
    )
}
export default children;