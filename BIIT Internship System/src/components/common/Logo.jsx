import LogoGreen from '../../assets/logos/LogoGreen.png';
import LogoWhite from '../../assets/logos/LogoWhite.png';

const sizeMap = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-14',
  xl: 'h-16',
};

const Logo = ({ variant = 'green', size = 'md', className = '' }) => {
  const src = variant === 'white' ? LogoGreen : LogoWhite;

  return (
    <img
      src={src}
      alt="BIIT Career Services"
      className={`${sizeMap[size]} w-auto ${className}`}
    />
  );
};

export default Logo;