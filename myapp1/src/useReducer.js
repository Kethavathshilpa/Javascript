import React, {useReducer }from 'react';
const reducer=()=>{};
const Final=()=>{
    const initialState={
        data:[{
            id:"1",firstName:"shilpa",email:"gsdgwwu@gmail.com"},
            {id:"2",firstName:"shirisha",email:"3eyuye@gmail.com"},
    ],
    length:2,
};
const [state,dispatch]=useReducer(reducer,initialState);
const handleDelete=(id)=>{
    console.log(id)
}
return(
    <>
    {
        state.data.map((eachItem)=>{
            const {id,firstName,email}=eachItem;
            return (<div key={id}>
                <h3>{firstName}</h3>
                <p>{email}</p>
                <button onClick={()=>handleDelete(id)}>Delete</button>
            </div>
            );
        })
    }
    </>
);

 };
 export default Final;

