import './Paragraph.css';

function Paragraph({ children, className = '', size = 'medium' }) {
  return (
    <p className={`paragraph paragraph--${size} ${className}`}>{children}</p>
  );
}

export default Paragraph;
