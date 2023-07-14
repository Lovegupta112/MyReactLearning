import React, { useState } from 'react';

function FormValidation() {

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setpassword]=useState('');
    const[cnfPassword,setCnfPassword]=useState('');

    const submitted=(event)=>{
        event.preventDefault();
       if(password && password.length>=8 && password.length<=15){
        if(password === cnfPassword){
            alert(`${name} , you submitted succesfully !`);
        }
        else{
            alert('passwrd not same')
        }
       }
       else{
        alert('password lenth shuld be min 8 and max 15')
       }
    }
    return (
            <form action="">
            <section>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" minLength={3} maxLength={30} value={name} onChange={(event)=>setName(event.target.value)}/>
            </section>
            <section>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            </section>
            <section>
                <label htmlFor="password">password</label>
                <input type="text" id="password" value={password} onChange={(event)=>setpassword(event.target.value)}/>
            </section>
            <section>
                <label htmlFor="cnfPassword">Confirm password</label>
                <input type="text" id="cnfPassword"  value={cnfPassword} onChange={(event)=>setCnfPassword(event.target.value)}/>
            </section>
            <button type='submit' onClick={submitted}>Submit</button>
            </form>
    )
}

export default FormValidation;