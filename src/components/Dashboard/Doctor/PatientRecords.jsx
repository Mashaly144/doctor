import React from 'react';
import DashUsers from './DashUsers';
import './patientRecords.css';
import Button from '../../../UI/Button';

const PatientRecords = () => {
  return (
    <div className='patientRecords'>
      <h1 style={{fontSize:"24px",fontWeight:"600"}}>Patient’s Records</h1>
      <DashUsers />
      <Button name={' View Survey'} />
    </div>
  );
};

export default PatientRecords;
