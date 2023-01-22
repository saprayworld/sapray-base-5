import React from 'react';
import PropTypes from 'prop-types';
import { localSettingData } from './BaseSetting';
import { systemTheme } from '../Themes';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import { SYS_SETTING_NAME } from './config';

const localSetting = {
  set: localSettingData.set,
};

const browserTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const systemColorMode = getColorMode(browserTheme);
const settingData = localSettingData.get();
const settingColorMode = getColorMode(settingData.themeType === "dark");
const useColorModeInit = settingData.themeType === 'onDevice' ? systemColorMode : settingColorMode;

const settingThemeName = settingData.themeName;

/**
 * แปลงค่าที่ส่งเข้าไปให้เป็น string โดยที่ dark จะแทนโหมดมืด และ light จะแทนโหมดสว่าง
 * @param {string} type โหมดสีเช่น onDevice, dark, light
 * @returns ใช้โหมดมืดหรือสว่าง โดยที่ dark จะแทนโหมดมืด และ light จะแทนโหมดสว่าง
 */
function getColorModeByType(type) {
  switch (type) {
    case "onDevice":
      return systemColorMode;

    case "light":
      return "light";

    case "dark":
      return "dark";

    default:
      return "light";
  }
}

function getColorMode(type) {
  return type ? "dark" : "light"
}

const defaultBaseSetting = {
  /**
   * ข้อมูลโหมดของสีที่แสดงในปัจจุบัน
   */
  currentColorMode: useColorModeInit,

  /**
   * ข้อมูลของชื่อธีมที่แสดงในปัจจุบัน
   */
  currentThemeName: settingThemeName,

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
   * ตั้งค่าธีม
   * @param {object} parameter โหมดของสี
   * @param {string} parameter.themeName ชื่อธีม
   * @param {("onDevice" | "dark" | "light")} parameter.mode โหมดของสี
   */
  setTheme: ({ themeName }) => {
    localSettingData.set({ themeName: themeName })
  },

  /**
   * ตั้งค่าภาษา
   * @param {*} parameter 
   * @param {string} parameter.lang ชื่อธีม
   */
  setLang: ({ lang }) => {
    localSettingData.set({ lang: lang })
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

  const [themeMode, setThemeMode] = React.useState(useColorModeInit);
  const [themeName, setThemeName] = React.useState(settingThemeName);
  const [stackUpdate, setStackUpdate] = React.useState(0);

  const baseSettingData = React.useMemo(
    () => {
      return {
        ...defaultBaseSetting,
        currentColorMode: themeMode,
        currentThemeName: themeName,
        currentStackUpdate: stackUpdate,
        setColorMode: (_mode) => {
          localSetting.set({ themeType: _mode })
          setThemeMode(getColorModeByType(_mode))
          setStackUpdate((prevStackUpdate) => prevStackUpdate + 1)
        },
        getBaseSetting: localSettingData.get(),
        currentBaseSetting: localSettingData.get(),
        setBaseSetting: (settingData) => {
          localSettingData.set(settingData)
          setStackUpdate((prevStackUpdate) => prevStackUpdate + 1)
        },
        setTheme: ({ themeName }) => {
          localSettingData.set({ themeName: themeName })
          setThemeName(themeName)
          // setThemeMode(getColorModeByType(mode))
          setStackUpdate((prevStackUpdate) => prevStackUpdate + 1)
        },
        setLang: ({ lang }) => {
          localSettingData.set({ lang: lang })
          setStackUpdate((prevStackUpdate) => prevStackUpdate + 1)
        },
      }
    },
    [themeMode, themeName, stackUpdate],
  );

  window.onstorage = (data) => {
    if (data.key === SYS_SETTING_NAME) {
      const newSetting = JSON.parse(data.newValue)
      setThemeName(newSetting.themeName)
      setThemeMode(getColorModeByType(newSetting.themeType))
    }
  };

  const theme = React.useMemo(
    () =>
      createTheme(systemTheme.switchTheme(themeMode, themeName)),
    [themeMode, themeName],
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