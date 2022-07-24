import Icon from '../Icon';
import { TbZoomCheck } from 'react-icons/tb';

interface IIconCheckProps {
  className?: string;
}

const IconCheck = ({ className }: IIconCheckProps) => {
  return <Icon icon={<TbZoomCheck />} className={className} />;
};

export default IconCheck;
