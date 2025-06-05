import './Header.css';

function Header({ level = 1, children, className = '' }) {
  const Tag = `h${level}`;

  return (
    <Tag className={`header header--level-${level} ${className}`}>
      {children}
    </Tag>
  );
}

export default Header;
