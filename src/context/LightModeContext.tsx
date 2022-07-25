import { createContext } from 'react';

interface LightModeContext {
  lightMode: boolean;
  setLightMode: () => void;
}

const LightModeContext = createContext<LightModeContext>({
  lightMode: false,
  setLightMode: () => void 0
} as LightModeContext);

export { LightModeContext };
