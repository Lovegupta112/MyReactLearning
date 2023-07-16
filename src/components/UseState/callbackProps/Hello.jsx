import React from 'react';


const Hello=({showName})=>{
    
return (
    <>
    <input type='text' onChange={(e)=>showName(e.target.value)}/>
    </>
);

}

export default Hello;