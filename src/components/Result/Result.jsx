import React from 'react';
import './Result.scss';
import Paragraph from '../Paragraph/Paragraph';
import Icon from '../Icon/Icon';

const Result = ({ madeUpName }) => {
  const domainCheckUrl = `https://fr.godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=`;
  return (
    <a href={`${domainCheckUrl}${madeUpName}`} target='_blank' rel='noreferrer'>
      <div className='result'>
        <div>
          <Paragraph
            className='result__name paragraph--blue'
            label={madeUpName}
          />
        </div>
        <div className='result__availibility'>
          <Paragraph
            label='Click to check availibility!'
            className='result__availibility--text paragraph--lightBlue'
          />
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
