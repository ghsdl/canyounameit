/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';

interface LightModeContext {
  lightMode: boolean;
  toggleLightMode: () => void;
}

interface LightModeProvider {
  children: React.ReactNode;
}

const LightModeContext = createContext<LightModeContext>({
  lightMode: false,
  toggleLightMode: () => {}
});

const LightModeProvider = ({ children }: LightModeProvider) => {
  const [lightMode, setLightMode] = useState<boolean>(false);

  const toggleLightMode = () => setLightMode(!lightMode);

  return (
    <LightModeContext.Provider value={{ lightMode, toggleLightMode }}>
      {children}
    </LightModeContext.Provider>
  );
};

export { LightModeContext, LightModeProvider };
