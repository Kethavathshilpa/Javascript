import {useRef} from 'react';
import { ReactDOM } from 'react-dom/client';

function UseRefpro(){
    const inputElement=useRef(); //creating useref object
    console.log(inputElement)

    const focusInput=()=>{
        inputElement.current.focus(); //ACCESING THE That object value
        console.log(inputElement)
    };
    return(
        <>
        <input type="text" ref={inputElement}/>
        <button onClick={focusInput}>Focus Input</button>
        </>
    )
}
export default UseRefpro;