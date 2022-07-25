import Icon from '../Icon';
import { BiSearchAlt } from 'react-icons/bi';

interface IIconSearchProps {
  className?: string;
}

const IconSearch = ({ className }: IIconSearchProps) => (
  <Icon icon={<BiSearchAlt />} className={className} />
);

export default IconSearch;
