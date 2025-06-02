import PropTypes from 'prop-types';
import './Spacer.css';

const Spacer = ({
  height = 'medium',
  showLine = false,
  className = '',
  ...props
}) => {
  return (
    <div className={`spacer spacer--${height} ${className}`} {...props}>
      {showLine && <hr className="spacer__line" />}
    </div>
  );
};

Spacer.propTypes = {
  height: PropTypes.oneOf(['small', 'medium', 'large']),
  showLine: PropTypes.bool,
  className: PropTypes.string,
};

export default Spacer;
