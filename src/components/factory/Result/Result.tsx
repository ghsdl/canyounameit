import './Result.scss';
import Paragraph from '../Paragraph/Paragraph';
import Icon from '../Icon/Icon';
import { IResultProps } from '../../interfaces';

const Result = ({ madeUpName }: IResultProps) => {
  const domainCheckUrl: string = `https://fr.godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=`;
  return (
    <a href={`${domainCheckUrl}${madeUpName}`} target='_blank' rel='noreferrer'>
      <div className='result'>
        <div>
          <Paragraph className='result__name paragraph--blue'>
            {madeUpName}
          </Paragraph>
        </div>
        <div className='result__availibility'>
          <Paragraph className='result__availibility--text paragraph--lightBlue'>
            Click to check availibility!
          </Paragraph>
          <Icon
            icon='CHECK'
            className='result__availibility--icon icon--lightBlue'
          />
        </div>
      </div>
    </a>
  );
};

export default Result;
