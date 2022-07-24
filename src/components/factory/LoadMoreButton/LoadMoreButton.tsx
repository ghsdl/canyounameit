import { Button } from 'react-rainbow-components';
import Paragraph from '../Paragraph/Paragraph';
import IconArrowDown from '../Icon/IconArrowDown/IconArrowDown';
import './LoadMoreButton.scss';
import { ILoadMoreButtonProps } from '../../interfaces';

const LoadMoreButton = ({ onClick }: ILoadMoreButtonProps) => {
  return (
    <div className='loadMoreButton'>
      <Button
        variant='brand'
        className='loadMoreButton__button'
        size='medium'
        onClick={onClick}
      >
        <Paragraph>Load more</Paragraph>
        <IconArrowDown className='loadMoreButton__icon' />
      </Button>
    </div>
  );
};

export default LoadMoreButton;
