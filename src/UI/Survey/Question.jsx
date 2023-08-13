import React from "react";
import "./Question.css";
import { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
const Question = (props) => {
  const [ingredient, setIngredient] = useState(`${props.yes ? "Yes" :""}`);

  return (
    <div className="question__holder col-lg-6 col-md-12">
      <p>{props.questionName}</p>
      <div className="answers__holder">
        <div className="d-flex align-items-center">
       {props.disabled ? ( <RadioButton
            inputId={props.questionId}
            name={props.questionName}
            value={props.answers[0]}
            onChange={(e) => setIngredient(e.value)}
            checked={ingredient === `${props.answers[0]}`}
            required
            disabled
          />):( <RadioButton
            inputId={props.questionId}
            name={props.questionName}
            value={props.answers[0]}
            onChange={(e) => setIngredient(e.value)}
            checked={ingredient === `${props.answers[0]}`}
            required
            
          />)}
          <label htmlFor="ingredient1" className="ml-2">
            {props.answers[0]}
          </label>
        </div>
        <div className="d-flex align-items-center">
        {props.disabled ? ( <RadioButton
            inputId={props.questionId}
            name={props.questionName}
            value={props.answers[0]}
            onChange={(e) => setIngredient(e.value)}
            checked={ingredient === `${props.answers[1]}`}
            required
            disabled
          />):( <RadioButton
            inputId={props.questionId}
            name={props.questionName}
            value={props.answers[0]}
            onChange={(e) => setIngredient(e.value)}
            checked={ingredient === `${props.answers[1]}`}
            required
            
          />)}
          <label htmlFor="ingredient1" className="ml-2">
            {props.answers[1]}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Question;
