import React from "react";
import '../style.css';


const UseState=()=>{
 // const initialData = 15;
 const [myNum, setMyNum] = React.useState(0);



    return (
        <>
        <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => 
            setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2"
          onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
       { /**<div className="center_div">
        <p>my data</p>
        <div class="button2">
        <span></span>
        <span></span>
        <span></span>
        <span>
        Hover me
        </span></div>
        <div className="button2">
        
        <button className="btn">button</button>
        </div>
       
        </div>>
    **/}
        </>
    )
}
export default UseState;