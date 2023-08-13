import React, { useState } from "react";
import "../UI/Survey/Question.css";
import { RadioButton } from "primereact/radiobutton";
import Question from "../UI/Survey/Question";
import "./Survey.css";
import { FileUpload } from "primereact/fileupload";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import Waiting from "../UI/Waiting";
const Survey = (props) => {
  const [ingredient, setIngredient] = useState("");
  const [waiting, setWaiting]= useState(false)
  const [file1 , setFile1] = useState(null)
  const [file2 , setFile2] = useState(null)
  const [file3 , setFile3] = useState(null)
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
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault()
    setWaiting(true)
setTimeout(()=>{
  navigate("/digansis");
  setWaiting(false)
}, 5000)
   
  };
  console.log(file1)
  return (
  
    <div>
     {waiting &&<Waiting/>}
      <div className="container">
        <form onSubmit={submitForm} className="survey__form" id="surveyform">
          <div className="d-flex flex-wrap">
            <div className="question__holder col-lg-6 col-md-12">
              <p>Gender</p>
              <div className="answers__holder d-flex">
                <div className="d-flex align-items-center">
                  <RadioButton
                    inputId="ingredient1"
                    name="gender"
                    value="Male"
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
                <input min={0} max={100} type="number" className="age__input" />
              </div>
            </div>
          </div>
          {surveyQues.map((e, i) => {
            return (
              <div key={i} className="d-flex flex-wrap">
                {e.map((q) => {
                  return <Question {...q} />;
                })}
              </div>
            );
          })}
          <div className="fileUpload__holder">
            <p className="upload__header">
              You can upload your MRI or ECG scan here ( if available )
            </p>
            <div className="upload__btn__holder my-3">
              <input
                type="file"
                className="upload__btn"
                id="myFile"
                name="filename"
                required
                onChange={(e)=>{
                  setFile1(e.target.files[0])
                }}
              />
              <label htmlFor="myFile">{file1 ? file1.name : "+ Upload ECG"}</label>
            </div>
            <div className="upload__btn__holder my-3">
              <input
                type="file"
                className="upload__btn"
                id="myFile2"
                name="filename"
                required
                onChange={(e)=>{
                  setFile2(e.target.files[0])
                }}
              />
              <label htmlFor="myFile2">{file2 ? file2.name : "+ Upload MRI"}</label>
            </div>
            <div className="upload__btn__holder my-3">
              <input
                type="file"
                className="upload__btn"
                id="myFile3"
                name="filename"
                onChange={(e)=>{
                  setFile3(e.target.files[0])
                }}
              />
              <label htmlFor="myFile3">{file3 ? file3.name : "+ Upload CT"}</label>
            </div>
          </div>
          <p className="upload__header">
            Describe your current medical concern ?{" "}
          </p>
          <div className="col-12">
            <textarea
              placeholder="Write your problem here"
              rows="4"
              cols="50"
              name="comment"
              form="surveyform"
            ></textarea>
          </div>
          <Button name="submit" />
        </form>
      </div>
    </div>
  );
};

export default Survey;
