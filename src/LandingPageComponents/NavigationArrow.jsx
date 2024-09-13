import React from 'react';
import './NavigationArrow.css';

const NavigationArrow = ({ direction, onClick }) => {
  return (
    <div className={`navigation-arrow ${direction}`} onClick={onClick}>
      {direction === 'left' ? '<' : '>'}
    </div>
  );
};

export default NavigationArrow;
