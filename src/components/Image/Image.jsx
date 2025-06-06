import React from 'react';
import PropTypes from 'prop-types';
import './Image.css';

function Image({ src, alt, width, height, rounded = false, className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`image ${rounded ? 'image--rounded' : ''} ${className}`}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rounded: PropTypes.bool,
  className: PropTypes.string,
};

export default Image;
