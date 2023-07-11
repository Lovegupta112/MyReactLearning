import './style.css';
// import Hello from './components/Hello';
// import Button from './components/Button';
import Portfolio from './components/portfolio/Portfolio';

function App(){

    return(
        <>
          {/* <Hello />
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
         <Button text="Apple" color='crimson'/> 
         <Button text="Orange" color='orange'/> 
         <Button text="Banana" color='yellow'/> 
         <Button text="Gauava" color='Green'/> 
          </div> */}
          <Portfolio />
      </>
    )
}

export default App;