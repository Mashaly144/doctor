import React from "react"
import "./SurveyShow.css"
import Question from "../../../UI/Survey/Question"
import { RadioButton } from "primereact/radiobutton";
import { useState } from "react";
import img1 from "../../../Assets/Img/ecg.jpg"
import img2 from "../../../Assets/Img/heart.jpg"
const SurveyShow = (props) => {
    const [ingredient, setIngredient] = useState("Male");
    
      const surveyQues = [
    [
      {
        questionName: "Do you have a family history of heart disease?",
        questionId: "Q1",
        answers: ["Yes", "No"],
      },
      {
        questionName:
          "Do you take any medications that contain corticosteroids?",
        questionId: "Q2",
        answers: ["Yes", "No"],
      },
    ],
    [
      {
        questionName: "Are you under pressure and stress?",
        questionId: "Q3",
        answers: ["Yes", "No"],
      },
      {
        questionName: "Do you eat large amounts of salt?",
        questionId: "Q4",
        answers: ["Yes", "No"],
      },
    ],
    [
      {
        questionName: "Do you overeat foods with saturated fats?",
        questionId: "Q5",
        answers: ["Yes", "No"],
      },
      {
        questionName: "Are you interested in eating vegetables and fruits?",
        questionId: "Q6",
        answers: ["Yes", "No"],
      },
    ],
    [
      {
        questionName: "Are you alcoholic?",
        questionId: "Q7",
        answers: ["Yes", "No"],
      },
      {
        questionName: "Do you overeat foods with saturated fats?",
        questionId: "Q8",
        answers: ["Yes", "No"],
      },
    ],
    [
      {
        questionName: "Have you ever been hospitalized for a heart attack ? ",
        questionId: "Q9",
        answers: ["Yes", "No"],
      },
      {
        questionName: "Do you smoke excessively?",
        questionId: "Q10",
        answers: ["Yes", "No"],
      },
    ],
  ];
  return (
    <>
    <div className="overlay__suervy" onClick={props.closeHandler}></div>
    <div className="survey-show">
        <div className="d-flex justify-content-end">
       <div className="close__btn" onClick={props.closeHandler}>X</div>
       </div>
        <div className="d-flex flex-wrap">
   <div className="question__holder col-lg-6 col-md-12">
              <p>Gender</p>
              <div className="answers__holder d-flex">
                <div className="d-flex align-items-center">
                  <RadioButton
                    inputId="ingredient1"
                    name="gender"
                    value="Male"
                disabled
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === "Male"}
                  />
                  <label htmlFor="ingredient1" className="ml-2">
                    Male
                  </label>
                </div>
                <div className="d-flex align-items-center">
                  <RadioButton
                    inputId="ingredient2"
                    name="gender"
                    value="Female"
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === "Female"}
                    disabled
                  />
                  <label htmlFor="ingredient2" className="ml-2">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="question__holder col-lg-6 col-md-12">
              <p>Age</p>
              <div className="answers__holder">
                <input min={0} max={100} type="number" disabled value={22} className="age__input" />
              </div>
            </div>
        </div>
     
       
            {surveyQues.map((e, i) => {
            return (
              <div key={i} className="d-flex flex-wrap">
                {e.map((q) => {
                  return <Question yes={true} disabled={true} {...q} />;
                })}
              </div>
            );
          })}
  <div className="img__holder__survey d-flex justify-content-evenly">
    <div className="img__holder col-6">
    <img src={img1} alt="" />
    </div>
    <div className="img__holder col-5">
    <img src={img2} alt="" />
    </div>
  </div>
  <div className="col-11 mt-5">
            <textarea
              placeholder="Write your problem here"
              rows="4"
              cols="40"
              name="comment"
              value={`                My heart beats too quickly and I have Chest pain , Shortness of breath and Pain in the neck, jaw, throat, upper belly area or back.
              Easily getting short of breath during exercise or activity.
              Swelling in the legs, belly area or areas around the eyes
              Irregular heartbeats (arrhythmias)`}
              form="surveyform"
              disabled
            >

            </textarea>
          </div>
    </div>
    </>
  )
};

export default SurveyShow;
