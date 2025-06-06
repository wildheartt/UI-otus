import React from 'react';
import PropTypes from 'prop-types';
import './Spacer.css';

function Spacer({ height = 'medium', showLine = false, className = '' }) {
  return (
    <div className={`spacer spacer--${height} ${className}`}>
      {showLine && <hr className="spacer__line" />}
    </div>
  );
}

Spacer.propTypes = {
  height: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large']),
    PropTypes.string,
    PropTypes.number,
  ]),
  showLine: PropTypes.bool,
  className: PropTypes.string,
};

export default Spacer;
