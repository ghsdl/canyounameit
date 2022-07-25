import Icon from '../Icon';
import { TbZoomCheck } from 'react-icons/tb';

interface IconCheckProps {
  className?: string;
}

const IconCheck = ({ className }: IconCheckProps) => (
  <Icon icon={<TbZoomCheck />} className={className} />
);

export default IconCheck;
