import Icon from '../Icon';
import { IIconArrowUpProps } from '../../../interfaces';
import { FaAngleUp } from 'react-icons/fa';

const IconArrowUp = ({ onClick, className }: IIconArrowUpProps) => {
  return <Icon icon={<FaAngleUp />} onClick={onClick} className={className} />;
};

export default IconArrowUp;
