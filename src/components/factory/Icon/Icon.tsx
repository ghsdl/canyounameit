import './Icon.scss';

interface IIconProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Icon = ({ icon, onClick, className }: IIconProps) => {
  return (
    <div className={`icon ${className}`} onClick={onClick}>
      {icon}
    </div>
  );
};

export default Icon;
