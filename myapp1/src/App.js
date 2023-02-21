import {useState,useEffect,useRef} from "react";
import ReactDom from "react-dom/client";
function App(){
  const[inputValue, setinputvalue]=useState(0);
  const count=useRef(0);

useEffect(()=>{
 count.current=count.current+1;
});
return(
  <>
   <input 
   type="text"
   value={inputValue.value}
   onChange={(e)=>setinputvalue(e.target.value)}/>
   <h1>Render count:{count.current}</h1>
  </>
);
}
export default App;