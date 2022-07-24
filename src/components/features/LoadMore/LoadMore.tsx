import { Button } from 'react-rainbow-components';
import Paragraph from '../../factory/Paragraph/Paragraph';
import IconArrowDown from '../../factory/Icon/IconArrowDown/IconArrowDown';
import './LoadMore.scss';

interface ILoadMoreProps {
  onClick: () => void;
}

const LoadMore = ({ onClick }: ILoadMoreProps) => {
  return (
    <div className="loadMore">
      <Button
        variant="brand"
        className="loadMore__button"
        size="medium"
        onClick={onClick}
      >
        <Paragraph>Load more</Paragraph>
        <IconArrowDown className="loadMore__icon" />
      </Button>
    </div>
  );
};

export default LoadMore;
