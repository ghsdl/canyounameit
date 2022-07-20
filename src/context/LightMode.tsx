import { createContext, useState } from 'react';
import {
  IThemeContext,
  ILightModeProviderProps,
} from '../components/interfaces';

const LightModeContext = createContext<IThemeContext>({
  lightMode: false,
  toggleLightMode: () => {},
});

const LightModeProvider = ({ children }: ILightModeProviderProps) => {
  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };

  return (
    <LightModeContext.Provider value={{ lightMode, toggleLightMode }}>
      {children}
    </LightModeContext.Provider>
  );
};

export { LightModeContext, LightModeProvider };
