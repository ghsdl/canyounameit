import React, { useState } from 'react';
import { Button } from 'react-rainbow-components';
import './Results.scss';
import Icon from '../Icon/Icon';
import Result from '../Result/Result';

const Results = ({ madeUpNames }) => {
  const madeUpNamesPerRow = 6;
  const [next, setNext] = useState(madeUpNamesPerRow);

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
