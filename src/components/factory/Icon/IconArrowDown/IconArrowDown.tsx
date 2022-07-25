import Icon from '../Icon';
import { FaAngleDown } from 'react-icons/fa';

interface IIconArrowDownProps {
  className?: string;
}

const IconArrowDown = ({ className }: IIconArrowDownProps) => (
  <Icon icon={<FaAngleDown />} className={className} />
);

export default IconArrowDown;
