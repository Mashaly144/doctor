import React, { useState } from "react";
import classes from "./FaQuestions.module.css";
const FaQuestions = () => {
  const questions = [
    {
      title: `What Is Atherosclerosis?`,
      description: `Atherosclerosis is also called hardening of the arteries. When the lining inside an artery is damaged, fat and plaque build up. This causes the artery walls to thicken, and the blood vessel narrows or sometimes gets 
      blocked.Coronary artery disease is a form of atherosclerosis. It’s when the arteries that supply blood to the heart narrow, which can lower the supply of oxygen-rich blood to the heart, especially when your heart beats faster, like during exercise. Extra strain on the heart may result in chest pain (called angina) and other symptoms.`,
    },
    {
      title: `What's the Link Between Smoking and Heart Disease?`,
      description: `Atherosclerosis is also called hardening of the arteries. When the lining inside an artery is damaged, fat and plaque build up. This causes the artery walls to thicken, and the blood vessel narrows or sometimes gets 
      blocked.Coronary artery disease is a form of atherosclerosis. It’s when the arteries that supply blood to the heart narrow, which can lower the supply of oxygen-rich blood to the heart, especially when your heart beats faster, like during exercise. Extra strain on the heart may result in chest pain (called angina) and other symptoms.`,
    },
    {
      title: `What Are the Risk Factors for Coronary Artery Disease?`,
      description: `Atherosclerosis is also called hardening of the arteries. When the lining inside an artery is damaged, fat and plaque build up. This causes the artery walls to thicken, and the blood vessel narrows or sometimes gets 
      blocked.Coronary artery disease is a form of atherosclerosis. It’s when the arteries that supply blood to the heart narrow, which can lower the supply of oxygen-rich blood to the heart, especially when your heart beats faster, like during exercise. Extra strain on the heart may result in chest pain (called angina) and other symptoms.`,
    },
    {
      title: `What Should I Do If I Have Risk Factors for Coronary Artery Disease?`,
      description: `Atherosclerosis is also called hardening of the arteries. When the lining inside an artery is damaged, fat and plaque build up. This causes the artery walls to thicken, and the blood vessel narrows or sometimes gets 
      blocked.Coronary artery disease is a form of atherosclerosis. It’s when the arteries that supply blood to the heart narrow, which can lower the supply of oxygen-rich blood to the heart, especially when your heart beats faster, like during exercise. Extra strain on the heart may result in chest pain (called angina) and other symptoms.`,
    },
    {
      title: `What Dietary Changes Can I Make to Reduce My Heart Disease Risk?`,
      description: `Atherosclerosis is also called hardening of the arteries. When the lining inside an artery is damaged, fat and plaque build up. This causes the artery walls to thicken, and the blood vessel narrows or sometimes gets 
      blocked.Coronary artery disease is a form of atherosclerosis. It’s when the arteries that supply blood to the heart narrow, which can lower the supply of oxygen-rich blood to the heart, especially when your heart beats faster, like during exercise. Extra strain on the heart may result in chest pain (called angina) and other symptoms.`,
    },
    {
      title: `What Is Cholesterol?`,
      description: `Atherosclerosis is also called hardening of the arteries. When the lining inside an artery is damaged, fat and plaque build up. This causes the artery walls to thicken, and the blood vessel narrows or sometimes gets 
      blocked.Coronary artery disease is a form of atherosclerosis. It’s when the arteries that supply blood to the heart narrow, which can lower the supply of oxygen-rich blood to the heart, especially when your heart beats faster, like during exercise. Extra strain on the heart may result in chest pain (called angina) and other symptoms.`,
    },
    {
      title: `How Common Is Heart Disease Among Women?`,
      description: `Atherosclerosis is also called hardening of the arteries. When the lining inside an artery is damaged, fat and plaque build up. This causes the artery walls to thicken, and the blood vessel narrows or sometimes gets 
      blocked.Coronary artery disease is a form of atherosclerosis. It’s when the arteries that supply blood to the heart narrow, which can lower the supply of oxygen-rich blood to the heart, especially when your heart beats faster, like during exercise. Extra strain on the heart may result in chest pain (called angina) and other symptoms.`,
    },
  ];
  const [isOpened, setIsOpened] = useState(false);

  const openQuestionHandler = (e) => {
    setIsOpened(!isOpened);
    const qHolder = e.target.closest(".q_holder");

    const plus = qHolder.querySelector("span");
    let qHolderHeight;
    if (!isOpened) {
      qHolder.style.maxHeight = "fit-content";
      plus.style.transform = "rotate(135deg)";
    }
    if (isOpened) {
      qHolder.style.maxHeight = `${50}px`;
      plus.style.transform = "rotate(0deg)";
    }
    console.log(qHolderHeight);
  };
  return questions.map((question) => {
    return (
      <div
        className={`${classes.textHolder} q_holder`}
        onClick={openQuestionHandler}
      >
        <div className={classes.headQ}>
          <h2 className={classes.question}>{question.title}</h2>
          <span>+</span>
        </div>

        <p className={classes.description}>{question.description}</p>
      </div>
    );
  });
};

export default FaQuestions;
