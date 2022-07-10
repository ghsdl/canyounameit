import React, { useState } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const [search, setSearch] = useState('');
  const [headerMinimize, setHeaderMinimize] = useState(false);

  return (
    <div className='App'>
      <Header headerMinimize={headerMinimize} />
      <SearchBar
        input={search}
        onChange={(search) => {
          setSearch(search);
          setHeaderMinimize(search.length);
        }}
        onSubmit={() => {}}
      />
    </div>
  );
};

export default App;
