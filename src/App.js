import React, { useState } from 'react';
import { Layout, SearchBar, Results } from './components';
import names from './conf/names.js';

const App = () => {
  const [search, setSearch] = useState('');
  const [headerMinimize, setHeaderMinimize] = useState(false);
  const [madeUpNames, setMadeUpNames] = useState([]);

  return (
    <div className='App'>
      <Layout headerMinimize={headerMinimize}>
        <SearchBar
          input={search}
          onChange={(search) => {
            setSearch(search);
            setMadeUpNames(search ? names(search) : []);
            setHeaderMinimize(search.length);
          }}
          headerMinimize={headerMinimize}
        />
        <Results madeUpNames={madeUpNames} search={search} />
      </Layout>
    </div>
  );
};

export default App;
