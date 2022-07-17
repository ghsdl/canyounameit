import { useState, useEffect } from 'react';
import { Button } from 'react-rainbow-components';
import './Results.scss';
import Icon from '../../factory/Icon/Icon';
import Result from '../../factory/Result/Result';
import { IResultsProps } from '../../interfaces';

const Results = ({ madeUpNames, search }: IResultsProps) => {
  const madeUpNamesPerRow: number = 6;
  const [next, setNext] = useState<number>(madeUpNamesPerRow);

  useEffect(() => {
    if (search.length === 0) {
      setNext(madeUpNamesPerRow);
    }
  }, [search]);

  return (
    <div className='results'>
      <div className='results__list'>
        {madeUpNames.slice(0, next).map((name, index) => (
          <Result key={index} madeUpName={name} />
        ))}
      </div>
      {next < madeUpNames.length && (
        <Button
          variant='brand'
          className='results__button'
          size='medium'
          onClick={() => setNext(next + madeUpNamesPerRow)}
        >
          Load more
          <Icon icon='ARROW_DOWN' className='results__icon' />
        </Button>
      )}
    </div>
  );
};

export default Results;
