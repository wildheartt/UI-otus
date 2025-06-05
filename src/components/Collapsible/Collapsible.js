import { useState } from 'react';
import './Collapsible.css';

function Collapsible({ title, children, defaultOpen = false, className = '' }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`collapsible ${className}`}>
      <button
        className={`collapsible__header ${isOpen ? 'collapsible__header--open' : ''}`}
        onClick={handleToggle}
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
}

export default Collapsible;
