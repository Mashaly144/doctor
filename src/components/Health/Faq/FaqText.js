import React from "react";
import { Container } from "react-bootstrap";
import FaQuestions from "./FaQuestions";
import "./FaqText.css";
const FaqText = () => {
  return (
    <Container>
      <div className="faqQ_holder">
        <FaQuestions />
      </div>
    </Container>
  );
};

export default FaqText;
