import './Spacer.css';

function Spacer({ height = 'medium', showLine = false, className = '' }) {
  return (
    <div className={`spacer spacer--${height} ${className}`}>
      {showLine && <hr className="spacer__line" />}
    </div>
  );
}

export default Spacer;
