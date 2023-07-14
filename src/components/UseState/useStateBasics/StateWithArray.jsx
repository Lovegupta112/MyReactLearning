import React ,{useState} from "react";


const StateWithArray=()=>{

    const[favorite,setFavorite]=useState(['mango','banana','apple']);
    const [fruit,setFruit]=useState('');

    function addFavoriteFruits(){
        if(fruit.trim().length>0){
            setFavorite([...favorite,fruit.trim()]);
            setFruit('');
        }
    }

    console.log('Fruit',fruit);
    console.log('Favorite fuits :',favorite);
    return (
       <div>
         <section>
            <label htmlFor="fruit">Enter your Favorite Fruit</label> <br />
            <input type="text" id="fruit" onChange={(event)=>setFruit(event.target.value)} value={fruit}/>
            <button onClick={()=>addFavoriteFruits()}>Add Favorite Fruit</button>
         </section>
       
         <section>
            <h1>Favorite Fruits</h1>
         {/* <h2>{favorite.join(',')}</h2> */} 
         {/* or  */}
         {  favorite.map((fruit)=> <li>{fruit}</li>) }
         </section>
        
       </div>
    );
}

export default StateWithArray;