import Icon from '../Icon';
import { TbZoomCheck } from 'react-icons/tb';
import { IIconCheckProps } from '../../../interfaces';

const IconCheck = ({ className }: IIconCheckProps) => {
  return <Icon icon={<TbZoomCheck />} className={className} />;
};

export default IconCheck;
