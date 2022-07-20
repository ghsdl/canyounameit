import { Button } from 'react-rainbow-components';
import Icon from '../Icon/Icon';
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
        Load more
        <Icon icon='ARROW_DOWN' className='loadMoreButton__icon' />
      </Button>
    </div>
  );
};

export default LoadMoreButton;
