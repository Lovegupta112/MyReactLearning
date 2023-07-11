import React from 'react';

//above 17.2 we can write or without writing it will also understand .


// naming conventions :- we shuld write component first letter Captital 

function sum(...args){
    let ans=0;
    for(let i=0;i<args.length;i++){
       ans=ans+args[i];
    }
    return ans;
}

function Hello(){
    // return <h1>hello bro</h1> <p>sum is {sum(2,3,5)}</p> //error

    // we cant return multiple things at time so we can make 2 things 
    // 1-make div or outer box so that we can wrap multiple things in one thing 
   
    // return <div>  
        // <h1>hello bro</h1> 
        // <p>sum is {sum(2,3,5)}</p>
    //     </div>
   
    //or 2- we can use <> </> 

    let styleObj={
        textAlign:'center',
        fontSize:'2rem'
    }
    return (
        <>
        <h1 className="heading" style={{textAlign:'center'}}>hello Folks !</h1> 
           <p style={styleObj}>sum is {sum(2,3,5)}</p>
       </>
    );
   
}

export default Hello;