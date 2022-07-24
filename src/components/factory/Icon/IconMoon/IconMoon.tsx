import Icon from '../Icon';
import { IIconMoonProps } from '../../../interfaces';
import { GiMoonBats } from 'react-icons/gi';

const IconMoon = ({ onClick, className }: IIconMoonProps) => {
  return <Icon icon={<GiMoonBats />} onClick={onClick} className={className} />;
};

export default IconMoon;
