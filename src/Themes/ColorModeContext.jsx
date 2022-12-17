import React from 'react';
import { BaseSetting } from './BaseSetting';

export const defaultBaseSetting = {
  currentMode: null,
  currentBaseSetting: BaseSetting.get(),
  getBaseSetting: BaseSetting.get(),
  setBaseSetting: () => { },
  toggleColorMode: () => { },
}

export const ColorModeContext = React.createContext(defaultBaseSetting);