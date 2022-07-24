import { createContext, useState } from 'react';

interface ILightModeContext {
  lightMode: boolean;
  toggleLightMode: () => void;
}

interface ILightModeProviderProps {
  children: React.ReactNode;
}

const LightModeContext = createContext<ILightModeContext>({
  lightMode: false,
  toggleLightMode: () => {},
});

const LightModeProvider = ({ children }: ILightModeProviderProps) => {
  const [lightMode, setLightMode] = useState<boolean>(false);

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
