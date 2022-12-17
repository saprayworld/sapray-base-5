const keyLocalStorage = "saprayworld_manager";
const defaultSetting = {
  version: 1,
  themeType: "onDevice", // [ onDevice, dark, light ]
  lang: "th-TH", // en-US, th-TH
  windows: 1,
  bgImg: false,
  glassFX: false,
}

export const BaseSetting = {
  default: defaultSetting,
  updateData,
  get,
  set,
  updateWindows,
}

function updateData() {
  let localSetting = get();
  let newSetting = {};
  if (localSetting) {
    Object.keys(defaultSetting).forEach((keyName) => {
      // console.log(keyName, Object.hasOwn(localSetting, keyName))
      if (!Object.hasOwn(localSetting, keyName)) {
        newSetting[keyName] = defaultSetting[keyName];
      }
    })
  }
  // console.log("defaultSettingKey", Object.keys(defaultSetting))
  // console.log("localSettingKey", Object.keys(localSetting))
  // // console.log("newSettingKey", newSetting)
  // console.log("localSetting", localSetting)
  // console.log("newSetting", newSetting)
  // console.log("finalSetting", { ...localSetting, ...newSetting })
  // console.log(Object.keys(defaultSetting))
  set(newSetting);
}

function get() {
  // console.log("localStorage: GET")
  if (checkAccessToLocalStorage) {
    const dataSetting = getLocalStorage(keyLocalStorage);
    if (dataSetting) {
      return dataSetting;
    } else {
      setLocalStorage(keyLocalStorage, JSON.stringify(defaultSetting));
      return defaultSetting;
    }
  } else {
    console.error('localStorage is not available or disabled');
    return false;
  }
}

function set(data) {
  const currentSetting = get();
  const editSetting = {
    ...currentSetting,
    ...data,
  }
  // console.log("currentSetting", currentSetting);
  // console.log("newSetting", editSetting);
  setLocalStorage(keyLocalStorage, JSON.stringify(editSetting));
}

function updateWindows(action) {
  let actionCon = [
    "add",
    "remove",
    "get",
  ];
  if (!actionCon.includes(action)) return;
  let currentSetting = get();
  switch (action) {
    case "add":
      let addWindows = {
        ...currentSetting,
        windows: currentSetting.windows + 1,
      }
      setLocalStorage(keyLocalStorage, JSON.stringify(addWindows));
      break;
    case "remove":
      let removeWindows = {
        ...currentSetting,
        windows: currentSetting.windows - 1,
      }
      setLocalStorage(keyLocalStorage, JSON.stringify(removeWindows));
      break;
    case "get":
      return currentSetting.windows;
    default:
      break;
  }
}

const getLocalStorage = (key) => {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    if (data) {
      return data;
    } else {
      return undefined;
    }
  } catch (error) {
    return undefined;
  }
}

const setLocalStorage = (key, data) => {
  localStorage.setItem(key, data);
}

const checkAccessToLocalStorage = () => {
  if (typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem(keyLocalStorage, 'Saprayworld');
      if (localStorage.getItem(keyLocalStorage) === 'Saprayworld') {
        localStorage.removeItem(keyLocalStorage);
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  } else {
    return false;
  }
}

// const checkLocalStorage = (key) => {
//   const tempData = localStorage.getItem(key);
//   if (tempData) {
//     return true;
//   } else {
//     return false;
//   }
// }