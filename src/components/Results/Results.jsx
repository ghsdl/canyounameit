import React from 'react';
import './Results.scss';
import Result from '../Result/Result';

const Results = ({ madeUpNames }) => {
  return (
    <div className='results'>
      {madeUpNames.map((name, index) => (
        <Result key={index} madeUpName={name} />
      ))}
    </div>
  );
};

export default Results;
