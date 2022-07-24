import Input from '../../factory/Input/Input';
import './SearchBar.scss';

interface ISearchBarProps {
  input: string;
  onChange: (search: string) => void;
  headerMinimize: boolean;
}

const SearchBar = ({ input, onChange, headerMinimize }: ISearchBarProps) => {
  return (
    <div className="search">
      <Input
        type="search"
        placeholder="Type your keywords"
        value={input}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChange(event.target.value);
        }}
        className={
          headerMinimize ? 'search search--small' : 'search search--big'
        }
      />
    </div>
  );
};

export default SearchBar;
