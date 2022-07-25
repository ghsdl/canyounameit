import Icon from '../Icon';
import { BiSearchAlt } from 'react-icons/bi';

interface IconSearchProps {
  className?: string;
}

const IconSearch = ({ className }: IconSearchProps) => (
  <Icon icon={<BiSearchAlt />} className={className} />
);

export default IconSearch;
