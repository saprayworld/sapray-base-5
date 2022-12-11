export const number = {
  data,
}

function data() {
  const data = {
    base: [
      { key: "0", number: 0, japanese: "ゼロ", kanji: "零" },
      { key: "1", number: 1, japanese: "いち", kanji: "一" },
      { key: "2", number: 2, japanese: "に", kanji: "二" },
      { key: "3", number: 3, japanese: "さん", kanji: "三" },
      { key: "4", number: 4, japanese: "よん", kanji: "四" },
      { key: "5", number: 5, japanese: "こ", kanji: "五" },
      { key: "6", number: 6, japanese: "ろく", kanji: "六" },
      { key: "7", number: 7, japanese: "なな", kanji: "七" },
      { key: "8", number: 8, japanese: "はち", kanji: "八" },
      { key: "9", number: 9, japanese: "きゅう", kanji: "九" },
    ],
    x10: [
      { key: "1", number: 10, japanese: "じゅう", kanji: "十" },
    ],
    x100: [
      { key: "1", number: 100, japanese: "ひゃく", kanji: "百" },
      { key: "3", number: 300, japanese: "びゃく", kanji: "百" },
      { key: "6", number: 600, japanese: "ぴゃく", kanji: "百" },
      { key: "8", number: 800, japanese: "ぴゃく", kanji: "百" },
    ],
    x1000: [
      { key: "1", number: 1000, japanese: "せん", kanji: "千" },
      { key: "3", number: 3000, japanese: "ぜん", kanji: "千" },
    ],
  }

  return data;
}