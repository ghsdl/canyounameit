import Icon from '../Icon';
import { BiSearchAlt } from 'react-icons/bi';

interface IIconSearchProps {
  className?: string;
}

const IconSearch = ({ className }: IIconSearchProps) => {
  return <Icon icon={<BiSearchAlt />} className={className} />;
};

export default IconSearch;
