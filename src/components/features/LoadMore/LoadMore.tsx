import Button from '../../factory/Button/Button';
import Paragraph from '../../factory/Paragraph/Paragraph';
import Icon from '../../factory/Icon/Icon';
import { FaAngleDown } from 'react-icons/fa';
import './LoadMore.scss';

interface LoadMoreProps {
  onClick: () => void;
}

const LoadMore = ({ onClick }: LoadMoreProps) => (
  <div className="loadMore">
    <Button type="button" onClick={onClick} className="loadMore__button">
      <Paragraph>Load more</Paragraph>
      <Icon icon={<FaAngleDown />} className="loadMore__button__icon" />
    </Button>
  </div>
);

export default LoadMore;
