import Icon from '../Icon';
import { FaAngleUp } from 'react-icons/fa';

interface IconArrowUpProps {
  onClick?: () => void;
  className?: string;
}

const IconArrowUp = ({ onClick, className }: IconArrowUpProps) => (
  <Icon icon={<FaAngleUp />} onClick={onClick} className={className} />
);

export default IconArrowUp;
