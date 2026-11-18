"use client"
import "./Calculator.css";
import {useState} from "react";

export default function Test(){
 const [todo, setTodo] =  useState("");

  const clear = () => {
    setTodo("");
  }


  const add = (ok) => {
    setTodo((prev) => prev + ok)
  }

const delet = () => {
  setTodo((prev) => prev.slice(0, -1))
}


  const equal = () => {
    if(todo.includes("/0")){
      setTodo("लौडा ले ले 🖕🖕🖕");
      return;
    }
    setTodo(eval(todo).toString());
  }
  
  return(
    <>
      <div className="parent">
        <div className="box">
          <div>
            <input
              type="text"
              name="todo"  
              readOnly
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
              className="inpt"
              />
          </div>

          <div className="gtid">
          <button onClick={() => clear()} className="allBtn">AC</button>
          <button onClick={() => add("%")} className="allBtn">%</button>
          <button onClick={() => delet()} className="allBtn">X</button>
          <button onClick={() => add("/")} className="allBtn">/</button>
          </div>
          
          <div className="gtid">
            {["7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", "."]
            .map((curl, index) => (<button key={index} onClick={() => add(curl)} className="allBtn">{curl}</button>))}
            <button onClick={() => equal()} className="allBtn">=</button>
          </div>
          
        </div>
      </div>
    </>
  )
}
