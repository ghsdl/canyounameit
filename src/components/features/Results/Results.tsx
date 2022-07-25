import { useState, useEffect } from 'react';
import LoadMore from '../LoadMore/LoadMore';
import Result from '../../factory/Result/Result';
import './Results.scss';

interface ResultsProps {
  madeUpNames: string[];
  search: string;
}

const Results = ({ madeUpNames, search }: ResultsProps) => {
  const madeUpNamesPerRow = 6;
  const [next, setNext] = useState<number>(madeUpNamesPerRow);

  useEffect(() => {
    if (search.length === 0) {
      setNext(madeUpNamesPerRow);
    }
  }, [search]);

  return (
    <div className="results">
      <div className="results__list">
        {madeUpNames.slice(0, next).map((name, index) => (
          <Result key={index} madeUpName={name} />
        ))}
      </div>
      {next < madeUpNames.length && (
        <LoadMore onClick={() => setNext(next + madeUpNamesPerRow)} />
      )}
    </div>
  );
};

export default Results;
