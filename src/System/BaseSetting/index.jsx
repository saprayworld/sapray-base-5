import React from 'react';
import PropTypes from 'prop-types';
import { localSettingData } from './BaseSetting';
import { switchTheme } from '../Themes';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import { SYS_SETTING_NAME } from './config';

const localSetting = {
  set: localSettingData.set,
};

const systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const systemColorMode = getColorMode(systemTheme);
const settingData = localSettingData.get();
const settingColorMode = getColorMode(settingData.themeType === "dark");
const useColorModeInit = settingData.themeType === 'onDevice' ? systemColorMode : settingColorMode;

function getColorModeByType(type) {
  return type === "onDevice" ? systemColorMode : type
}

function getColorMode(type) {
  return type ? "dark" : "light"
}

const defaultBaseSetting = {
  /**
   * ข้อมูลโหมดของทีที่แสดงในปัจจุบัน
   */
  currentColorMode: useColorModeInit,

  /**
   * ข้อมูลที่แสดงว่ามีการอัพเดทการตั้งค่าไปกี่ครั้งแล้ว
   */
  currentStackUpdate: 0,

  /**
   * ข้อมูลการตั้งค่าปัจจุบัน
   */
  currentBaseSetting: localSettingData.get(),

  /**
   * ข้อมูลการตั้งค่าปัจจุบัน
   */
  getBaseSetting: localSettingData.get(),

  /**
   * บันทึกการตั้งค่าต่างๆ
   * @param {Object} settingData 
   */
  setBaseSetting: (settingData) => localSettingData.set(settingData),

  /**
   * ตั้งค่าโหมดของทีที่แสดง
   * @param {("onDevice" | "dark" | "light")} mode โหมดของสี
   */
  setColorMode: (mode) => {
    localSettingData.set({ themeType: mode })
  },

  /**
   * สลับโหมดของทีที่แสดง
   */
  toggleColorMode: () => { },
}

const BaseSetting = React.createContext({
  ...defaultBaseSetting
});

export function useBaseSetting() {
  return React.useContext(BaseSetting);
}

// const defaultConfig = {

// }

export function BaseSettingProvider(props) {
  const {
    children,
    // config,
  } = props;

  // const useConfig = {
  //   ...defaultConfig,
  //   ...config,
  // }

  const [mode, setMode] = React.useState(useColorModeInit);
  const [stackUpdate, setStackUpdate] = React.useState(0);

  const baseSettingData = React.useMemo(
    () => {
      return {
        ...defaultBaseSetting,
        currentColorMode: mode,
        currentStackUpdate: stackUpdate,
        setColorMode: (_mode) => {
          localSetting.set({ themeType: _mode })
          setMode(getColorModeByType(_mode))
          setStackUpdate((prevMode) => prevMode + 1)
        },
        getBaseSetting: localSettingData.get(),
        currentBaseSetting: localSettingData.get(),
        setBaseSetting: (settingData) => {
          localSettingData.set(settingData)
          setStackUpdate((prevMode) => prevMode + 1)
        },
      }
    },
    [mode, stackUpdate],
  );

  window.onstorage = (data) => {
    if (data.key === SYS_SETTING_NAME) {
      const newSetting = JSON.parse(data.newValue)
      setMode(getColorModeByType(newSetting.themeType))
    }
  };

  const theme = React.useMemo(
    () =>
      createTheme(switchTheme(mode)),
    [mode],
  );

  return (
    <BaseSetting.Provider value={baseSettingData}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </BaseSetting.Provider>
  )
}

BaseSettingProvider.propTypes = {
  config: PropTypes.object,
}

BaseSettingProvider.defaultProps = {
  config: null,
}