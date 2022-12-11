import React from 'react';

// const MainView = React.lazy(() => import('./Views/Apps/MainView'))
// const MainApps = React.lazy(() => import('./Views/Apps/MainApps'))
const Home = React.lazy(() => import('./Views/Apps/Home'))
const RandomCharacterSelect = React.lazy(() => import('./Views/Apps/RandomCharacterSelect'))
const RandomCharacterRun = React.lazy(() => import('./Views/Apps/RandomCharacterRun'))
const RandomNumberSelect = React.lazy(() => import('./Views/Apps/RandomNumberSelect'))
const RandomNumberRun = React.lazy(() => import('./Views/Apps/RandomNumberRun'))


var routes = [
  // { exact: true, path: `${process.env.PUBLIC_URL}/apps/main-view`, name: "หน้าแอพรัน", component: MainView, layout: "SaprayJapanese" },
  { exact: true, path: `${process.env.PUBLIC_URL}/apps/home`, name: "หน้าแรก", component: Home, layout: "SaprayJapanese" },
  {
    exact: true,
    path: `${process.env.PUBLIC_URL}/apps/random-hiragana`,
    name: "สุ่มฮิรางานะ",
    props: { charDisplay: 'hiragana', charType: 'hiragana' },
    component: RandomCharacterSelect,
    layout: "SaprayJapanese"
  },
  {
    exact: true,
    path: `${process.env.PUBLIC_URL}/apps/random-hiragana/run`,
    name: "สุ่มฮิรางานะ",
    component: RandomCharacterRun,
    layout: "SaprayJapanese"
  },
  {
    exact: true,
    path: `${process.env.PUBLIC_URL}/apps/random-katakana`,
    name: "สุ่มคาตาคานะ",
    props: { charDisplay: 'katakana', charType: 'katakana' },
    component: RandomCharacterSelect,
    layout: "SaprayJapanese"
  },
  {
    exact: true,
    path: `${process.env.PUBLIC_URL}/apps/random-katakana/run`,
    name: "สุ่มคาตาคานะ",
    component: RandomCharacterRun,
    layout: "SaprayJapanese"
  },
  {
    exact: true,
    path: `${process.env.PUBLIC_URL}/apps/random-romaji`,
    name: "สุ่มโรมาจิ",
    props: { charDisplay: 'hiragana', charType: 'romaji' },
    component: RandomCharacterSelect,
    layout: "SaprayJapanese"
  },
  {
    exact: true,
    path: `${process.env.PUBLIC_URL}/apps/random-romaji/run`,
    name: "สุ่มโรมาจิ",
    component: RandomCharacterRun,
    layout: "SaprayJapanese"
  },
  {
    exact: true,
    path: `${process.env.PUBLIC_URL}/apps/random-number`,
    name: "สุ่มจำนวนเลข",
    component: RandomNumberSelect,
    layout: "SaprayJapanese"
  },
  {
    exact: true,
    path: `${process.env.PUBLIC_URL}/apps/random-number/run`,
    name: "สุ่มจำนวนเลข",
    component: RandomNumberRun,
    layout: "SaprayJapanese"
  },
];
export default routes;