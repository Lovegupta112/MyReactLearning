import React from 'react';

function Button(props){

//we can access pass attribute as props
console.log(props); 
//or we can also destructue props
const{text,color}=props;

const changeBg=(color)=>{
document.body.style.backgroundColor=color;
}
    return (
        <div>
         <p>This is {text}</p>
         {/* <p>This is {props.text}</p> */}
         <button style={{backgroundColor:props.color}} onClick={()=>changeBg(color)}>{props.text}</button>
        </div>
    );
}
export default Button;