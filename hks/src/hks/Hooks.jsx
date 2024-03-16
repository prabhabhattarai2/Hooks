import {useState} from "react";
import "./Btn.css"
const Hooks=()=>{
    const [count, setCount,] = useState(0);
const incrementbtn=()=>{
    
    setCount(count +1);
};
const decrementhandler=()=>{
   if(count>0) setCount(count -1);


};
const resetbtn=()=>{
    setCount(0);
};
  

return(
    <div className="Btn">
    
        <button onClick={decrementhandler}>Decrement</button>
      <div>{count}</div>

      <button onClick={incrementbtn}>Increment</button>
      <button onClick={resetbtn}>Reset</button>
    </div>
   
);

};

export default Hooks;