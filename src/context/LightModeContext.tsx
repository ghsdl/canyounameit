import { createContext } from 'react';

interface LightModeContext {
  lightMode: boolean;
  setLightMode: (value: boolean) => void;
}

const LightModeContext = createContext<LightModeContext>({
  lightMode: false,
  setLightMode: () => null
});

export { LightModeContext };
