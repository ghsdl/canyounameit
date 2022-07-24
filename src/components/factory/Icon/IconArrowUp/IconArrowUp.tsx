import Icon from '../Icon';
import { FaAngleUp } from 'react-icons/fa';

interface IIconArrowUpProps {
  onClick?: () => void;
  className?: string;
}

const IconArrowUp = ({ onClick, className }: IIconArrowUpProps) => {
  return <Icon icon={<FaAngleUp />} onClick={onClick} className={className} />;
};

export default IconArrowUp;
