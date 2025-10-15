// src/components/common/StatCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

const StatCard = ({ title, value, change, changeType, icon, iconBg }) => {
  const getChangeIcon = () => {
    if (changeType === 'increase') return '↑';
    if (changeType === 'decrease') return '↓';
    return '→';
  };
  
  const getChangeColor = () => {
    if (changeType === 'increase') return 'text-success';
    if (changeType === 'decrease') return 'text-danger';
    return 'text-warning';
  };
  
  return (
    <Card className="h-100">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="text-muted">{title}</h6>
            <h3 className="mb-1">{value}</h3>
            {change && (
              <div className={`d-flex align-items-center ${getChangeColor()}`}>
                <span className="me-1">{getChangeIcon()}</span>
                <span>{change}</span>
              </div>
            )}
          </div>
          <div className={`avatar avatar-md ${iconBg} text-white`}>
            <i className={`ti ${icon}`}></i>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StatCard;