import { useState } from "react";
import "./Card.css";
export default function Card({ children, cl, className }) {
  const [selected , setSelected] = useState(false)
  const selectedHandler = ()=>{
    setSelected(!selected)
  }
  return (
    <div onClick={selectedHandler} className={`custom__card ${className} ${selected ? "selected" : ""}`}>
      {children}
      <div className={`${selected ? "overlay__card selected" : "overlay__card"}`}></div>
      <div className="correct__for__card">
     {selected && <i class="bi bi-check"></i>}

      </div>
    </div>
  );
}
