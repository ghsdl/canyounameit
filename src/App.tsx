import { useState } from 'react';
import { Layout, SearchBar, Results } from './components';
import names from './conf/names.js';

const App = () => {
  const [search, setSearch] = useState<string>('');
  const [headerMinimize, setHeaderMinimize] = useState<boolean>(false);
  const [madeUpNames, setMadeUpNames] = useState<string[]>([]);

  return (
    <div className='App'>
      <Layout headerMinimize={headerMinimize}>
        <SearchBar
          input={search}
          onChange={(search) => {
            setSearch(search);
            setMadeUpNames(search ? names(search) : []);
            setHeaderMinimize(search.length > 0);
          }}
          headerMinimize={headerMinimize}
        />
        <Results madeUpNames={madeUpNames} search={search} />
      </Layout>
    </div>
  );
};

export default App;
