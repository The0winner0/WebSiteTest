

import React from 'react';
import Icon from './icon'; 

const IconBox = ({ iconPath, title, description, viewBox }) => {
  // The description can be a string or JSX (e.g., with <br /> tags)
  const descriptionContent = typeof description === 'string' 
    ? <p className="elementor-icon-box-description">{description}</p>
    : <div className="elementor-icon-box-description">{description}</div>;

  return (
    <div className="elementor-widget-container">
      <div className="elementor-icon-box-wrapper">
        <div className="elementor-icon-box-icon">
          <span className="elementor-icon">
            <Icon pathData={iconPath} viewBox={viewBox} />
          </span>
        </div>
        <div className="elementor-icon-box-content">
          <h3 className="elementor-icon-box-title">
            <span>{title}</span>
          </h3>
          {descriptionContent}
        </div>
      </div>
    </div>
  );
};

export default IconBox;