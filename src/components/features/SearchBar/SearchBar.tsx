import { Input } from 'react-rainbow-components';
import IconSearch from '../../factory/Icon/IconSearch/IconSearch';
import styles from './SearchBar.scss';

interface ISearchBarProps {
  input: string;
  onChange: (search: string) => void;
  headerMinimize: boolean;
}

const SearchBar = ({ input, onChange, headerMinimize }: ISearchBarProps) => {
  return (
    <div className="search">
      <div className="rainbow-align-content_center rainbow-p-vertical_x-large rainbow-flex_wrap">
        <Input
          type="search"
          className={
            headerMinimize ? 'search search--small' : 'search search--big'
          }
          style={styles}
          placeholder="Type your keywords"
          isCentered
          iconPosition="right"
          icon={<IconSearch />}
          value={input}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
