import PropTypes from 'prop-types';
import './Paragraph.css';

const Paragraph = ({ children, className = '', size = 'medium', ...props }) => {
  return (
    <p className={`paragraph paragraph--${size} ${className}`} {...props}>
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Paragraph;
