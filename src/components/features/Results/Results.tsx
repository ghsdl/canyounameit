import { useState, useEffect } from 'react';
import LoadMoreButton from '../../factory/LoadMoreButton/LoadMoreButton';
import Result from '../../factory/Result/Result';
import './Results.scss';

interface IResultsProps {
  madeUpNames: string[];
  search: string;
}

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
        <LoadMoreButton onClick={() => setNext(next + madeUpNamesPerRow)} />
      )}
    </div>
  );
};

export default Results;
