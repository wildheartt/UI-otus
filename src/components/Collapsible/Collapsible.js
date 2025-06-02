import { useState } from 'react';
import PropTypes from 'prop-types';
import './Collapsible.css';

const Collapsible = ({
  title,
  children,
  defaultOpen = false,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapsible ${className}`} {...props}>
      <button
        className={`collapsible__header ${isOpen ? 'collapsible__header--open' : ''}`}
        onClick={toggleOpen}
        type="button"
      >
        <span className="collapsible__title">{title}</span>
        <span
          className={`collapsible__icon ${isOpen ? 'collapsible__icon--open' : ''}`}
        >
          ▼
        </span>
      </button>
      {isOpen && <div className="collapsible__content">{children}</div>}
    </div>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  defaultOpen: PropTypes.bool,
  className: PropTypes.string,
};

export default Collapsible;
