import Button from '../../factory/Button/Button';
import Paragraph from '../../factory/Paragraph/Paragraph';
import IconArrowDown from '../../factory/Icon/IconArrowDown/IconArrowDown';
import './LoadMore.scss';

interface LoadMoreProps {
  onClick: () => void;
}

const LoadMore = ({ onClick }: LoadMoreProps) => (
  <div className="loadMore">
    <Button type="button" onClick={onClick} className="loadMore__button">
      <Paragraph>Load more</Paragraph>
      <IconArrowDown className="loadMore__icon" />
    </Button>
  </div>
);

export default LoadMore;
