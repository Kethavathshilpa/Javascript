import React,{useState,createContext} from 'react';

const mycontext=React.createContext();

const MyContextprovider=({children})=>{
    const [commonData,setCommonData]=useState('no-Color')
    return(
        <mycontext.Provider value={{commonData,setCommonData}}>
            {children}
        </mycontext.Provider>
    )
}
export default MyContextprovider;