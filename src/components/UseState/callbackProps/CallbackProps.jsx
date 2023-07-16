import React ,{useState} from 'react'
import Parent from './Parent'
import Child from './Child';
import Hello from './Hello';


// In React.js, passing data from a child component to its parent
//  component is typically done through a callback function that is
//  passed as a prop from the parent to the child. This pattern 
//  is commonly referred to as "lifting state up" or "callback props.

function CallbackProps() {

const[info,setInfo]=useState(false);
const [name,setName]=useState('');

function showInfo(status){
    setInfo(info?false:status);
}
return (
   <div>
    <div>
    <Parent showInfo={showInfo}/>
    <Child  info={info}/>
    </div>
     <div>
        <Hello showName={setName}/>
       {name && <p>Hello {name} </p>}
     </div>
   </div>
  )
}

export default CallbackProps;