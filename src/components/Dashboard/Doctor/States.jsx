import React from 'react';
import './states.css';
import state1 from '../../../Assets/Icons/state-1.svg';
import state2 from '../../../Assets/Icons/state-2.svg';
import state3 from '../../../Assets/Icons/state-3.svg';

const States = () => {
  const dashboardState = [
    {
      img: state1,
      title: 'Total Patient',
      number: '2000',
      disciption: 'Till Today',
    },
    {
      img: state2,
      title: 'Total Patient',
      number: '2000',
      disciption: '21 Dec-2023',
    },
    {
      img: state3,
      title: 'Total Patient',
      number: '068',
      disciption: '21 Dec-2023',
    },
  ];
  return (
    <div>
      <div className='state-container'>
        {dashboardState.map((state, index) => {
          return (
            <div key={index} className='state-card p-3 box col-4'>
              {/*icons */}
              <div className='state-icon '>
                <div>
                  <img src={state.img} alt='stateicon p-5' />
                </div>
              </div>
              {/* text */}
              <div>
                <h3>{state.title}</h3>
                <span>{state.number}</span>
                <p>{state.disciption}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default States;
