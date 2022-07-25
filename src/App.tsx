import { useState } from 'react';
import { LightModeProvider } from './context/LightModeProvider';
import Layout from './components/layout/Layout';
import SearchBar from './components/features/SearchBar/SearchBar';
import Results from './components/features/Results/Results';
import names from './conf/names.js';

const App = () => {
  const [search, setSearch] = useState<string>('');
  const [headerMinimize, setHeaderMinimize] = useState<boolean>(false);
  const [madeUpNames, setMadeUpNames] = useState<string[]>([]);

  return (
    <div className="App">
      <LightModeProvider>
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
      </LightModeProvider>
    </div>
  );
};

export default App;
