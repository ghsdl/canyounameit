import { useState } from 'react';
import { LightModeContext } from './LightModeContext';

interface LightModeProvider {
  children: React.ReactNode;
}

const LightModeProvider = ({ children }: LightModeProvider) => {
  const [lightMode, setLightMode] = useState<boolean>(false);

  return (
    <LightModeContext.Provider value={{ lightMode, setLightMode }}>
      {children}
    </LightModeContext.Provider>
  );
};

export { LightModeProvider };
