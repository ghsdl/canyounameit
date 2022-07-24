import Icon from '../Icon';
import { IIconArrowDownProps } from '../../../interfaces';
import { FaAngleDown } from 'react-icons/fa';

const IconArrowDown = ({ className }: IIconArrowDownProps) => {
  return <Icon icon={<FaAngleDown />} className={className} />;
};

export default IconArrowDown;
