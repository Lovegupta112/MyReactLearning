import React from "react";


const Parent=({showInfo})=>{



return(
<>
<h1>This is Callback Props Concept</h1>
<p>for more details click on read more</p>
<button onClick={()=>showInfo(true)}>More Info</button>
</>
);
}
export default Parent;