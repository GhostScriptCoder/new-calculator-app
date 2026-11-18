"use client"
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
      <div className={styles.parent}>
        <div className={styles.box}>
          <div>
            <input
              type="text"
              name="todo"  
              readOnly
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
              className={styles.inpt}
              />
          </div>

          <div className={styles.gtid}>
          <button onClick={() => clear()} className={styles.allBtn}>AC</button>
          <button onClick={() => add("%")} className={styles.allBtn}>%</button>
          <button onClick={() => delet()} className={styles.allBtn}>X</button>
          <button onClick={() => add("/")} className={styles.allBtn}>/</button>
          </div>
          
          <div className={styles.gtid}>
            {["7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", "."]
            .map((curl, index) => (<button key={index} onClick={() => add(curl)} className={styles.allBtn}>{curl}</button>))}
            <button onClick={() => equal()} className={styles.allBtn}>=</button>
          </div>
          
        </div>
      </div>
    </>
  )
}
