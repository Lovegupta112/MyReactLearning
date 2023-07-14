import React , {useState} from 'react'


//useState is used to update ui or update the state, it re-render the component where
//we use useState , it also store previous state ;
//so when we use , we have to import using {} bcz of named export
// import  {useState } from 'react';

//it returns array that contains var and one function that we 
//use to update the state of that variable 
// ex: const [first, setfirst] = useState(intialValue);


let simpleCount=0; 

const StateBasics=()=>{

    console.log('rendering...');
const [count,setCount]=useState(0);

console.log('count using useState: ',count);

// let simpleCount=0;
function increment(){
    simpleCount=simpleCount+1;
    console.log(" simpleCount :",simpleCount);
}

  return (
 <div>

  <h1>Simple Count : {simpleCount}</h1>
 <button onClick={()=>increment()}>increment</button>
{/* 
    here increment will call immediately then its value will be called so it 
    will give error  */}
        <button onClick={increment()}>increment</button> 

     <p>Using useState ----</p>
    <h1>useState Count : {count}</h1>
    <button onClick={()=>setCount(count+1)}>increment using useState</button>
         


 </div>
  )
}

export default StateBasics;


//one question can occur when we click the button for increasing 
//simpleCount it doesnt increase simpleCount on ui or update ui  
//but when we click on button for increasing count (using useState) it re-render
// component and update ui so at that time simpleCount value shuld be changed from 0 
// to 4,5 or 6 etc (till how many times u clicked ) but it show only 0 bcz when the
//compoent render again it is declared and 0 is initilized like this 
// let simpleCount=0; but this thing doesnt happen with useState bcz it also saves 
//old state of any var,object etc .
//so if we want to know the value of simpleCount we will have to make outside of component 