import React from 'react';
import { Input } from 'react-rainbow-components';
import { BiSearchAlt } from 'react-icons/bi';
import styles from './SearchBar.scss';

const SearchBar = ({ input, onChange }) => {
  return (
    <div className='search'>
      <div className='rainbow-align-content_center rainbow-p-vertical_x-large rainbow-flex_wrap'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            type='search'
            label='application component search'
            hideLabel
            className='rainbow-p-around_medium search__input'
            style={styles}
            placeholder='Type your keywords'
            isCentered
            iconPosition='right'
            icon={<BiSearchAlt className='rainbow-color_gray-3 search__icon' />}
            value={input}
            onChange={(event) => onChange(event.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
