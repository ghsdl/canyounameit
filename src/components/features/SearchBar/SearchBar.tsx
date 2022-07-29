import Input from '../../factory/Input/Input';
import './SearchBar.scss';

interface SearchBarProps {
  input: string;
  onChange: (search: string) => void;
  headerMinimize: boolean;
}

const SearchBar = ({ input, onChange, headerMinimize }: SearchBarProps) => (
  <div className="search">
    <Input
      type="search"
      placeholder="Type your keywords"
      value={input}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        onChange(event.target.value)
      }
      className={`search ${headerMinimize ? 'search--small' : 'search--big'}`}
    />
  </div>
);

export default SearchBar;
