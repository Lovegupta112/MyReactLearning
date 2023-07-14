import React,{useState} from 'react';

const StateWithObj=()=>{

const [prices,setPrices]=useState({gold:0,silver:0,bronze:0});

function increaseGold(){

    setPrices({...prices,gold:prices.gold+1}); //right way bcz firstly it take entire prices object then  it take update value of gold and replace with new value 
    //but if you change the sequence so fistly it will take gold as property then it will take prices obj so it will take update value 

    // setPrices({gold:prices.gold+1,...prices});
}
    return (
       <div>
        <h1>Gold price: {prices.gold} Silver Price: {prices.silver} Bronze Price:{prices.bronze} </h1>

        <button onClick={increaseGold}>Increase Gold</button>
        <button onClick={()=>setPrices({...prices,silver:prices.silver+1})}>Increase Silver</button>
        <button onClick={()=>setPrices({...prices,bronze:prices.bronze+1})}>Increase Bronze</button>
       </div>
    )
}
export default StateWithObj;