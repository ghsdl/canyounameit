import React, { useState } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Results from './components/Results/Results';
import names from './conf/names.js';

const App = () => {
  const [search, setSearch] = useState('');
  const [headerMinimize, setHeaderMinimize] = useState(false);
  const [madeUpNames, setMadeUpNames] = useState([]);

  return (
    <div className='App'>
      <Header headerMinimize={headerMinimize} />
      <SearchBar
        input={search}
        onChange={(search) => {
          setSearch(search);
          setMadeUpNames(search ? names(search) : []);
          setHeaderMinimize(search.length);
        }}
      />
      <Results madeUpNames={madeUpNames} />
    </div>
  );
};

export default App;
