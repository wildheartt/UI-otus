import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Collapsible.css';

function Collapsible({ title, children, defaultOpen = false, className = '' }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapsible ${className}`}>
      <button
        className={`collapsible__trigger ${
          isOpen ? 'collapsible__trigger--open' : ''
        }`}
        onClick={toggle}
        type="button"
      >
        <span className="collapsible__title">{title}</span>
        <span className="collapsible__icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="collapsible__content">
          <div className="collapsible__content-inner">{children}</div>
        </div>
      )}
    </div>
  );
}

Collapsible.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  defaultOpen: PropTypes.bool,
  className: PropTypes.string,
};

export default Collapsible;
