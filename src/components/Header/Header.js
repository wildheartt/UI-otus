import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ level = 1, children, className = '', ...props }) => {
  const Tag = `h${level}`;

  return (
    <Tag className={`header header--level-${level} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

Header.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Header;
