import React from 'react';
import PatientsReview from './PatientsReview';
import flowchart from '../../../Assets/Img/flowChart.png';
import './dashChartRev.css';
const DashChartRev = () => {
  return (
    <div className='chart-rev-container'>
      {/* flow chart */}
      <div className='review-img'>
        <img src={flowchart} alt='flowChart' />
      </div>
      {/* patient review */}
      <div className='review-card box mx-2 py-3 px-4'>
        <h1 className='mx-2' style={{fontSize:"20px",fontWeight:"700"}}>Patients Review (105)</h1>
        <PatientsReview />
        
      </div>
    </div>
  );
};

export default DashChartRev;
