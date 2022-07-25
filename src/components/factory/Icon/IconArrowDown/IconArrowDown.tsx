import Icon from '../Icon';
import { FaAngleDown } from 'react-icons/fa';

interface IconArrowDownProps {
  className?: string;
}

const IconArrowDown = ({ className }: IconArrowDownProps) => (
  <Icon icon={<FaAngleDown />} className={className} />
);

export default IconArrowDown;
