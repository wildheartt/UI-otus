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

export default Image;
