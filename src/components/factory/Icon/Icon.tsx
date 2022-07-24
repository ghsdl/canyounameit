import './Icon.scss';
import { IIconProps } from '../../interfaces';

const Icon = ({ icon, onClick, className }: IIconProps) => {
  return (
    <div className={`icon ${className}`} onClick={onClick}>
      {icon}
    </div>
  );
};

export default Icon;
