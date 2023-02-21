import {useState,createContext ,useContext} from "react";
import ReactDom from "react-dom/client";
//creating the object context
const UserContext=createContext()

function Component1(){
    const[user,setUser]=useState("Jessey Hall");

    return(
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user}/>
        </UserContext.Provider>
    )
}
function Component2(){
    return (
        <>
        <h1>component 2</h1>
        <Component5/>
        </>
    )
}
function Component5(){
    const user=useContext(UserContext);
    return (
        <>
         <h1>component 5</h1>
         <h2>{`Hello ${user}again`}</h2>
        </>
    );
}
export default Component1;
