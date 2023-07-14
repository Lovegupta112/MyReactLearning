import React ,{useState} from "react";


const FormWithValidation=()=>{

 const[user,setUser]=useState({name:'',email:'',password:'',cnfPassword:''});
 const[error,setError]=useState('');
 const[success,setSuccess]=useState('');
 

function handleSubmit(event){
    event.preventDefault();
  if(user.name.length<3 || user.name.length>30 ){
 setError('Name should be min 3 char and max 30 char');
  }
  else if(!user.email.includes('@') || !user.email.includes('.')){
  setError('Email should contain @ and .');
  }
  else if(user.password.length<8 || user.password.length>15){
   setError('Password should be min 8 char and max 15 char');
  }
  else if(user.password!==user.cnfPassword){
   setError('Please Enter Same password , Password and confirm must be same!');
  }
  else{
    setSuccess(`SucessFully Submitted  ${user.name[0].toUpperCase()+user.name.substring(1)} !`);
    setError('');
  }
}

    return (
        <>
        <form onSubmit={handleSubmit}>
            <section id="result">
                {error?<h2>{error}</h2>:<h2>{success}</h2>}
            </section>
        <section>
                <label htmlFor="name">Name</label>
                <input type="text" id="name"  value={user.name} onChange={(event)=>setUser({...user,name:event.target.value})}/>
            </section>
            <section>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={user.email} onChange={(event)=>setUser({...user,email:event.target.value})}/>
            </section>
            <section>
                <label htmlFor="password">password</label>
                <input type="text" id="password" value={user.password} onChange={(event)=>setUser({...user,password:event.target.value})}/>
            </section>
            <section>
                <label htmlFor="cnfPassword">Confirm password</label>
                <input type="text" id="cnfPassword"  value={user.cnfPassword} onChange={(event)=>setUser({...user,cnfPassword:event.target.value})}/>
            </section>
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}
export default FormWithValidation;