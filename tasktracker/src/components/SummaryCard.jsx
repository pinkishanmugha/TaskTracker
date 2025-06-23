import React from 'react';
import './SummaryCard.css';

const SummaryCard = ({ icon, text, number,color}) => {
  return (
    <div className="summary-card">
      <div className="card-icon">
        {icon}
      </div>
      <div className="card-info">
        <p className="card-text">{text}</p>
        <p className="card-number">{number}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
