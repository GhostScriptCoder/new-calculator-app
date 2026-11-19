"use client"
import styles from "./pass.module.css";
import {useState, useEffect} from "react";


export default function Pass(){
const [slider, setSlider] = useState(10); 
const [c, setC] = useState("Copy");
const [pas, setPas] = useState("");
const [p, setP] = useState("");
const [upper, setUpper] = useState(true);
const [lower, setLower] = useState(true);
const [number, setNumber] = useState(true);
const [symbol, setSymbol] = useState(true);

  
  useEffect(() => {
  let local = localStorage.getItem("data");
  if(local){
    setPas(local);
  }
  }, [])
  
  // copy
  const copy = () => {
    if(pas === ""){
      return;
    }
    setC("Copied!");
    setP("Copied! done");
    navigator.clipboard.writeText(pas)
    setTimeout(() => {
      setC("Copy")
      setP("")
    }, 3000)
  }

// Gen
  let empthy = "";
const Gen = () => {
  setPas("");
  if(upper) empthy += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if(lower) empthy += "abcdefghijklmnopqrstuvwxyz";
  if(number) empthy += "0123456789";
  if(symbol) empthy += "!@#$%^&*()_+-=[]{}|;:,.<>?";
  if(empthy === "") return;
  for (let i = 0; i < slider; i++) {
  const random = Math.floor(Math.random() * empthy.length);
  setPas((prev) => prev + empthy[random])
  }
}

  useEffect(() => {
    if(pas){
  localStorage.setItem("data", pas);
    }
  }, [pas])

  const none = () => {
    if(pas === ""){
      return;
    }
    let con = confirm("Are you sure you want to delete this saved password?");
    if(con){
      setPas("");
      localStorage.removeItem("data")
    }
  }
  
  return(
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <h2 className={styles.h2}>Generator password</h2>
          <div className={styles.inputBox}>
          <input
            readOnly
            type="text"
            name="text"
            placeholder="Generator..."
            className={styles.input}
            value={pas}
            onClick={() => none()}
            onCopy={(e) => e.preventDefault()}
            onCut={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
            />
          <button className={styles.copy} onClick={() => copy()}>{c}</button>
          </div>

          <div className={styles.passLength}>
            <label className={styles.label}>password length</label>
            <p className={styles.p}>{slider}</p>
          </div>

          <input
            type="range"
            min="6"
            max="20"
            className={styles.range}
            value={slider}
            onChange={(e) => setSlider(e.target.value)}
            />

          <div className={styles.checkboxChilds}>
            <div className={styles.mt}>
            <label className={styles.label}>
            <input
              
              className={styles.checkbox}
              type="checkbox" 
              name="UpperCase" 
              checked={upper}
              onChange={(e) => setUpper(e.target.checked)}
              />
              UpperCase
            </label>
            </div>
            
          <div className={styles.mt}>
            <label className={styles.label}>
            <input
              
              className={styles.checkbox}
              type="checkbox" 
              name="LowerCase"
              checked={lower}
              onChange={(e) => setLower(e.target.checked)}
              />
              LowerCase
            </label>
          </div>

            <div className={styles.mt}>
            <label className={styles.label}>
            <input
              className={styles.checkbox}
              type="checkbox" 
              name="Numbers"
              checked={number}
              onChange={(e) => setNumber(e.target.checked)}
              />
              Numbers
            </label>
            </div>

            <div className={styles.mt}>
            <label className={styles.label}>
            <input
              className={styles.checkbox}
              type="checkbox" 
              name="Symbols"
              checked={symbol}
              onChange={(e) => setSymbol(e.target.checked)}
              />
              Symbols
            </label>
            </div>
          </div>

          <p style={{textAlign: "center", color : "#000"}}>{p}</p>
          
          <div className={styles.btnGrup}>
            <button className={styles.gen} onClick={() => Gen()}>Generator</button>
          </div>
          
        </div>
      </div>
    </>
  )
}
