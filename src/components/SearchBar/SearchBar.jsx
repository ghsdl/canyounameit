import React from 'react';
import { Input } from 'react-rainbow-components';
import Icon from '../Icon/Icon';
import styles from './SearchBar.scss';

const SearchBar = ({ input, onChange, headerMinimize }) => {
  return (
    <div className='search'>
      <div className='rainbow-align-content_center rainbow-p-vertical_x-large rainbow-flex_wrap'>
        <Input
          type='search'
          className={
            headerMinimize ? 'search search--small' : 'search search--big'
          }
          style={styles}
          placeholder='Type your keywords'
          isCentered
          iconPosition='right'
          icon={<Icon icon='SEARCH' />}
          value={input}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
