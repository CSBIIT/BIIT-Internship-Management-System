import LogoGreen from '../../assets/logos/LogoGreen.png';
import LogoWhite from '../../assets/logos/LogoWhite.png';

const Logo = ({ variant = 'green', className = '' }) => {
  const src = variant === 'white' ? LogoGreen : LogoWhite;

  return (
    <img
      src={src}
      alt="BIIT Career Services"
      className={`h-10 w-auto ${className}`}
    />
  );
};

export default Logo;