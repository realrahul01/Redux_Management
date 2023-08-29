import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrementBy10000, decrementBy5000 } from "./component/counterSlice";


function App(){
const dispatch = useDispatch()
const count = useSelector((state)=>state.counter.value)
  console.log(count)
const clickHandler = ()=>{
  dispatch(decrementBy10000())
}
const valueHandler = ()=>{
  dispatch(decrementBy5000())
}
  
    return (
      <div className="App">
        <img className="App__userpic" src={"https://i.ibb.co/WDVhmRM/girl.png"} alt="photographer" />
        <p className="App__username">Hello, Rahul! </p>
        <div className="App__amount">
          <p>${count}</p>
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button onClick={clickHandler} data-amount="10000">WITHDRAW $10,000</button>
          <button onClick={valueHandler} data-amount="5000">WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }


export default App;