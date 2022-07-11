import React, { useState } from 'react';
import { Application, Button } from 'react-rainbow-components';
import './Results.scss';
import Icon from '../Icon/Icon';
import Result from '../Result/Result';

const Results = ({ madeUpNames }) => {
  const madeUpNamesPerRow = 6;
  const [next, setNext] = useState(madeUpNamesPerRow);
  const theme = {
    rainbow: {
      palette: {
        brand: '#f50057',
      },
    },
  };
  return (
    <div className='results'>
      <div className='results__list'>
        {madeUpNames.slice(0, next).map((name, index) => (
          <Result key={index} madeUpName={name} />
        ))}
      </div>
      {next < madeUpNames.length && (
        <Application
          theme={theme}
          className='rainbow-p-vertical_large rainbow-align-content_center'
        >
          <Button
            variant='brand'
            className='results__button'
            size='medium'
            onClick={() => setNext(next + madeUpNamesPerRow)}
          >
            Load more
            <Icon icon='ARROW_DOWN' className='rainbow-m-left_medium' />
          </Button>
        </Application>
      )}
    </div>
  );
};

export default Results;
