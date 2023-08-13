import React from "react"
import './Waiting.css'
const Waiting = (props) => {
  return (
    <div className="waiting-holder">
      <div className="waiting-box d-flex flex-column justify-content-center">
      <div class="spinner-border text-primary m-auto" role="status">
  <span class="sr-only"></span>
      </div>
      <p className="mt-3">waiting your result...</p>
      </div>
    </div>
  )
};

export default Waiting;
