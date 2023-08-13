import React from 'react';
import './patientsReview.css';
const PatientsReview = () => {
  return (
    <>
      <div class='feedback-section'>
        <div class='rating'>
          <input type='radio' id='s1star5' name='s1rating' value='5' />
          <label for='s1star5'></label>
          <input type='radio' id='s1star4' name='s1rating' value='4' />
          <label for='s1star4'></label>
          <input type='radio' id='s1star3' name='s1rating' value='3' />
          <label for='s1star3'></label>
          <input type='radio' id='s1star2' name='s1rating' value='2' />
          <label for='s1star2'></label>
          <input type='radio' id='s1star1' name='s1rating' value='1' />
          <label for='s1star1'></label>
        </div>
      </div>
      <div class='feedback-section'>
        <div class='rating'>
          <input type='radio' id='s2star5' name='s2rating' value='5' />
          <label for='s2star5'></label>
          <input type='radio' id='s2star4' name='s2rating' value='4' />
          <label for='s2star4'></label>
          <input type='radio' id='s2star3' name='s2rating' value='3' />
          <label for='s2star3'></label>
          <input type='radio' id='s2star2' name='s2rating' value='2' />
          <label for='s2star2'></label>
          <input type='radio' id='s2star1' name='s2rating' value='1' />
          <label for='s2star1'></label>
        </div>
      </div>
      <div class='feedback-section'>
        <div class='rating'>
          <input type='radio' id='s3star5' name='s3rating' value='5' />
          <label for='s3star5'></label>
          <input type='radio' id='s3star4' name='s3rating' value='4' />
          <label for='s3star4'></label>
          <input type='radio' id='s3star3' name='s3rating' value='3' />
          <label for='s3star3'></label>
          <input type='radio' id='s3star2' name='s3rating' value='2' />
          <label for='s3star2'></label>
          <input type='radio' id='s3star1' name='s3rating' value='1' />
          <label for='s3star1'></label>
        </div>
      </div>
      <div class='feedback-section'>
        <div class='rating'>
          <input type='radio' id='s4star5' name='s4rating' value='5' />
          <label for='s4star5'></label>
          <input type='radio' id='s4star4' name='s4rating' value='4' />
          <label for='s4star4'></label>
          <input type='radio' id='s2star3' name='s4rating' value='3' />
          <label for='s4star3'></label>
          <input type='radio' id='s2star2' name='s4rating' value='2' />
          <label for='s4star2'></label>
          <input type='radio' id='s2star1' name='s4rating' value='1' />
          <label for='s4star1'></label>
        </div>
      </div>
    </>
  );
};

export default PatientsReview;
