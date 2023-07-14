import React, { useState } from 'react';


const Form = () => {

    const [name, setName] = useState('');

    function changeHandler(event){
//    console.log(event.target.value);
    setName(event.target.value);
    }
    return (
        <div>
            <input type="text" onChange={changeHandler} value={name}/>
            <button onClick={()=>setName('')}>clear</button>
            <p>Your Name : {name.toUpperCase()}</p>
        </div>
    )
}
export default Form;