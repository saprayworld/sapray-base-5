import React from 'react';
import { localSettingData } from './BaseSetting';

export const localSetting = {
  set: localSettingData.set,
};

const systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const systemColorMode = getColorMode(systemTheme);
const settingData = localSettingData.get();
const settingColorMode = getColorMode(settingData.themeType === "dark");
export const useColorModeInit = settingData.themeType === 'onDevice' ? systemColorMode : settingColorMode;

export function getColorModeByType(type) {
  return type === "onDevice" ? systemColorMode : type
}

export function getColorMode(type) {
  return type ? "dark" : "light"
}

export const defaultBaseSetting = {
  /**
   * ข้อมูลโหมดของทีที่แสดงในปัจจุบัน
   */
  currentColorMode: useColorModeInit,

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

export const BaseSetting = React.createContext({
  ...defaultBaseSetting
});
export const BaseSettingProvider = BaseSetting.Provider;

export function useBaseSetting() {
  return React.useContext(BaseSetting);
}



// export const useBaseSetting = React.useContext(BaseSetting);