import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { IoMdArrowDropup } from "react-icons/io";
import classes from "./FaqHeader.module.css";
const FaqHeader = () => {
  const [isOpened, setIsOpened] = useState(false);
  const openFaqHandler = () => {
    setIsOpened(!isOpened);
    const faqQHolder = document.querySelector(".faqQ_holder");
    if (!isOpened) {
      faqQHolder.style.maxHeight = "fit-content";
    }
    if (isOpened) {
      faqQHolder.style.maxHeight = "0px";
    }
  };
  return (
    <Container>
      <div
        className={`${classes.faqHeader} d-flex ${isOpened && classes.open}`}
        onClick={openFaqHandler}
      >
        <h1>Frequently Asked Questions About Heart Disease</h1>
        <IoMdArrowDropup size={54} />
      </div>
    </Container>
  );
};

export default FaqHeader;
