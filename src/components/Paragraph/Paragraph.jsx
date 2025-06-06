import React from 'react';
import PropTypes from 'prop-types';

import './Paragraph.css';

function Paragraph({ children, className = '', size = 'medium' }) {
  return (
    <p className={`paragraph paragraph--${size} ${className}`}>{children}</p>
  );
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Paragraph;
