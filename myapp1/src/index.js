import React from 'react';
import ReactDOM from 'react-dom/client';
//import Component1 from './useContext';
//import ControlledComponent from './ControlledComp';
// import App from './App';
//import UseRefpro from './userefComp';
//import TrackingstateChange from './UseRefTracking';
//import Final from './useReducer';
import MyContextprovider from './ContextFile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseRefpro/> */}
    {/* <TrackingstateChange/> */}
    {/* <ControlledComponent/> */}
    {/* <Final/> */}
    {/* <Component1/> */}
    <MyContextprovider/>
   </React.StrictMode>
    
);



