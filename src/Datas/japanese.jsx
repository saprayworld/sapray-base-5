export const japannese = {
    play,
    data,
    dataByGroup,
    groupName,
    preloadSound,
};

const ASSETS_PATH = `../assets`;

function play(track) {
    //console.log(track)
    try {
        var trackSrc = require(`${ASSETS_PATH}/sapray/media/${track}.mp3`);
        var audio = new Audio(trackSrc);
        audio.play();
    } catch (ex) {
        console.error("File not found.")
    }
}

function preloadSound(keysToLoad) {
    //console.log(keysToLoad)
    var sounds = soundData();
    const soundsForLoad = sounds.filter((val) => {
        return keysToLoad.find(({ romaji }) => romaji === val["key"]);
    })
    // console.log(soundsForLoad)
    var soundsLoaded = [];
    soundsLoaded = soundsForLoad.map((val) => {
        let temp = {};
        temp["key"] = val.key;
        temp["audio"] = loadSound(val?.path);
        return temp;
    })

    return soundsLoaded;
}

function loadSound(trackPath) {
    let objAudio = false;
    // console.log(trackPath)
    try {
        // let trackSrc = require(stringPath);
        //console.log("Load : "+ trackSrc)
        objAudio = new Audio(trackPath);
    } catch (ex) {
        console.error(`File '${trackPath}' not found.`)
    }
    return objAudio
}

function soundData() {
    var data = [
        { key: "a", track: "a", extension: "mp3", path: require(`../assets/sapray/media/a.mp3`) },
        { key: "i", track: "i", extension: "mp3", path: require(`../assets/sapray/media/i.mp3`) },
        { key: "u", track: "u", extension: "mp3", path: require(`../assets/sapray/media/u.mp3`) },
        { key: "e", track: "e", extension: "mp3", path: require(`../assets/sapray/media/e.mp3`) },
        { key: "o", track: "o", extension: "mp3", path: require(`../assets/sapray/media/o.mp3`) },
        { key: "ka", track: "ka", extension: "mp3", path: require(`../assets/sapray/media/ka.mp3`) },
        { key: "ki", track: "ki", extension: "mp3", path: require(`../assets/sapray/media/ki.mp3`) },
        { key: "ku", track: "ku", extension: "mp3", path: require(`../assets/sapray/media/ku.mp3`) },
        { key: "ke", track: "ke", extension: "mp3", path: require(`../assets/sapray/media/ke.mp3`) },
        { key: "ko", track: "ko", extension: "mp3", path: require(`../assets/sapray/media/ko.mp3`) },
        { key: "sa", track: "sa", extension: "mp3", path: require(`../assets/sapray/media/sa.mp3`) },
        { key: "shi", track: "shi", extension: "mp3", path: require(`../assets/sapray/media/shi.mp3`) },
        { key: "su", track: "su", extension: "mp3", path: require(`../assets/sapray/media/su.mp3`) },
        { key: "se", track: "se", extension: "mp3", path: require(`../assets/sapray/media/se.mp3`) },
        { key: "so", track: "so", extension: "mp3", path: require(`../assets/sapray/media/so.mp3`) },
        { key: "ta", track: "ta", extension: "mp3", path: require(`../assets/sapray/media/ta.mp3`) },
        { key: "chi", track: "chi", extension: "mp3", path: require(`../assets/sapray/media/chi.mp3`) },
        { key: "tsu", track: "tsu", extension: "mp3", path: require(`../assets/sapray/media/tsu.mp3`) },
        { key: "te", track: "te", extension: "mp3", path: require(`../assets/sapray/media/te.mp3`) },
        { key: "to", track: "to", extension: "mp3", path: require(`../assets/sapray/media/to.mp3`) },
        { key: "na", track: "na", extension: "mp3", path: require(`../assets/sapray/media/na.mp3`) },
        { key: "ni", track: "ni", extension: "mp3", path: require(`../assets/sapray/media/ni.mp3`) },
        { key: "nu", track: "nu", extension: "mp3", path: require(`../assets/sapray/media/nu.mp3`) },
        { key: "ne", track: "ne", extension: "mp3", path: require(`../assets/sapray/media/ne.mp3`) },
        { key: "no", track: "no", extension: "mp3", path: require(`../assets/sapray/media/no.mp3`) },
        { key: "ha", track: "ha", extension: "mp3", path: require(`../assets/sapray/media/ha.mp3`) },
        { key: "hi", track: "hi", extension: "mp3", path: require(`../assets/sapray/media/hi.mp3`) },
        { key: "fu", track: "fu", extension: "mp3", path: require(`../assets/sapray/media/fu.mp3`) },
        { key: "he", track: "he", extension: "mp3", path: require(`../assets/sapray/media/he.mp3`) },
        { key: "ho", track: "ho", extension: "mp3", path: require(`../assets/sapray/media/ho.mp3`) },
        { key: "ma", track: "ma", extension: "mp3", path: require(`../assets/sapray/media/ma.mp3`) },
        { key: "mi", track: "mi", extension: "mp3", path: require(`../assets/sapray/media/mi.mp3`) },
        { key: "mu", track: "mu", extension: "mp3", path: require(`../assets/sapray/media/mu.mp3`) },
        { key: "me", track: "me", extension: "mp3", path: require(`../assets/sapray/media/me.mp3`) },
        { key: "mo", track: "mo", extension: "mp3", path: require(`../assets/sapray/media/mo.mp3`) },
        { key: "ya", track: "ya", extension: "mp3", path: require(`../assets/sapray/media/ya.mp3`) },
        { key: "yu", track: "yu", extension: "mp3", path: require(`../assets/sapray/media/yu.mp3`) },
        { key: "yo", track: "yo", extension: "mp3", path: require(`../assets/sapray/media/yo.mp3`) },
        { key: "ra", track: "ra", extension: "mp3", path: require(`../assets/sapray/media/ra.mp3`) },
        { key: "ri", track: "ri", extension: "mp3", path: require(`../assets/sapray/media/ri.mp3`) },
        { key: "ru", track: "ru", extension: "mp3", path: require(`../assets/sapray/media/ru.mp3`) },
        { key: "re", track: "re", extension: "mp3", path: require(`../assets/sapray/media/re.mp3`) },
        { key: "ro", track: "ro", extension: "mp3", path: require(`../assets/sapray/media/ro.mp3`) },
        { key: "wa", track: "wa", extension: "mp3", path: require(`../assets/sapray/media/wa.mp3`) },
        { key: "wo", track: "wo", extension: "mp3", path: require(`../assets/sapray/media/wo.mp3`) },
        { key: "n", track: "n", extension: "mp3", path: require(`../assets/sapray/media/n.mp3`) },
        { key: "ga", track: "ga", extension: "mp3", path: require(`../assets/sapray/media/ga.mp3`) },
        { key: "gi", track: "gi", extension: "mp3", path: require(`../assets/sapray/media/gi.mp3`) },
        { key: "gu", track: "gu", extension: "mp3", path: require(`../assets/sapray/media/gu.mp3`) },
        { key: "ge", track: "ge", extension: "mp3", path: require(`../assets/sapray/media/ge.mp3`) },
        { key: "go", track: "go", extension: "mp3", path: require(`../assets/sapray/media/go.mp3`) },
        { key: "za", track: "za", extension: "mp3", path: require(`../assets/sapray/media/za.mp3`) },
        { key: "ji", track: "ji", extension: "mp3", path: require(`../assets/sapray/media/ji.mp3`) },
        { key: "zu", track: "zu", extension: "mp3", path: require(`../assets/sapray/media/zu.mp3`) },
        { key: "ze", track: "ze", extension: "mp3", path: require(`../assets/sapray/media/ze.mp3`) },
        { key: "zo", track: "zo", extension: "mp3", path: require(`../assets/sapray/media/zo.mp3`) },
        { key: "da", track: "da", extension: "mp3", path: require(`../assets/sapray/media/da.mp3`) },
        { key: "de", track: "de", extension: "mp3", path: require(`../assets/sapray/media/de.mp3`) },
        { key: "do", track: "do", extension: "mp3", path: require(`../assets/sapray/media/do.mp3`) },
        { key: "ba", track: "ba", extension: "mp3", path: require(`../assets/sapray/media/ba.mp3`) },
        { key: "bi", track: "bi", extension: "mp3", path: require(`../assets/sapray/media/bi.mp3`) },
        { key: "bu", track: "bu", extension: "mp3", path: require(`../assets/sapray/media/bu.mp3`) },
        { key: "be", track: "be", extension: "mp3", path: require(`../assets/sapray/media/be.mp3`) },
        { key: "bo", track: "bo", extension: "mp3", path: require(`../assets/sapray/media/bo.mp3`) },
        { key: "pa", track: "pa", extension: "mp3", path: require(`../assets/sapray/media/pa.mp3`) },
        { key: "pi", track: "pi", extension: "mp3", path: require(`../assets/sapray/media/pi.mp3`) },
        { key: "pu", track: "pu", extension: "mp3", path: require(`../assets/sapray/media/pu.mp3`) },
        { key: "pe", track: "pe", extension: "mp3", path: require(`../assets/sapray/media/pe.mp3`) },
        { key: "po", track: "po", extension: "mp3", path: require(`../assets/sapray/media/po.mp3`) },
        { key: "kya", track: "kya", extension: "mp3", path: require(`../assets/sapray/media/kya.mp3`) },
        { key: "kyu", track: "kyu", extension: "mp3", path: require(`../assets/sapray/media/kyu.mp3`) },
        { key: "kyo", track: "kyo", extension: "mp3", path: require(`../assets/sapray/media/kyo.mp3`) },
        { key: "sha", track: "sha", extension: "mp3", path: require(`../assets/sapray/media/sha.mp3`) },
        { key: "shu", track: "shu", extension: "mp3", path: require(`../assets/sapray/media/shu.mp3`) },
        { key: "sho", track: "sho", extension: "mp3", path: require(`../assets/sapray/media/sho.mp3`) },
        { key: "cha", track: "cha", extension: "mp3", path: require(`../assets/sapray/media/cha.mp3`) },
        { key: "chu", track: "chu", extension: "mp3", path: require(`../assets/sapray/media/chu.mp3`) },
        { key: "cho", track: "cho", extension: "mp3", path: require(`../assets/sapray/media/cho.mp3`) },
        { key: "nya", track: "nya", extension: "mp3", path: require(`../assets/sapray/media/nya.mp3`) },
        { key: "nyu", track: "nyu", extension: "mp3", path: require(`../assets/sapray/media/nyu.mp3`) },
        { key: "nyo", track: "nyo", extension: "mp3", path: require(`../assets/sapray/media/nyo.mp3`) },
        { key: "hya", track: "hya", extension: "mp3", path: require(`../assets/sapray/media/hya.mp3`) },
        { key: "hyu", track: "hyu", extension: "mp3", path: require(`../assets/sapray/media/hyu.mp3`) },
        { key: "hyo", track: "hyo", extension: "mp3", path: require(`../assets/sapray/media/hyo.mp3`) },
        { key: "mya", track: "mya", extension: "mp3", path: require(`../assets/sapray/media/mya.mp3`) },
        { key: "myu", track: "myu", extension: "mp3", path: require(`../assets/sapray/media/myu.mp3`) },
        { key: "myo", track: "myo", extension: "mp3", path: require(`../assets/sapray/media/myo.mp3`) },
        { key: "rya", track: "rya", extension: "mp3", path: require(`../assets/sapray/media/rya.mp3`) },
        { key: "ryu", track: "ryu", extension: "mp3", path: require(`../assets/sapray/media/ryu.mp3`) },
        { key: "ryo", track: "ryo", extension: "mp3", path: require(`../assets/sapray/media/ryo.mp3`) },
        { key: "gya", track: "gya", extension: "mp3", path: require(`../assets/sapray/media/gya.mp3`) },
        { key: "gyu", track: "gyu", extension: "mp3", path: require(`../assets/sapray/media/gyu.mp3`) },
        { key: "gyo", track: "gyo", extension: "mp3", path: require(`../assets/sapray/media/gyo.mp3`) },
        { key: "ja", track: "ja", extension: "mp3", path: require(`../assets/sapray/media/ja.mp3`) },
        { key: "ju", track: "ju", extension: "mp3", path: require(`../assets/sapray/media/ju.mp3`) },
        { key: "jo", track: "jo", extension: "mp3", path: require(`../assets/sapray/media/jo.mp3`) },
        { key: "bya", track: "bya", extension: "mp3", path: require(`../assets/sapray/media/bya.mp3`) },
        { key: "byu", track: "byu", extension: "mp3", path: require(`../assets/sapray/media/byu.mp3`) },
        { key: "byo", track: "byo", extension: "mp3", path: require(`../assets/sapray/media/byo.mp3`) },
        { key: "pya", track: "pya", extension: "mp3", path: require(`../assets/sapray/media/pya.mp3`) },
        { key: "pyu", track: "pyu", extension: "mp3", path: require(`../assets/sapray/media/pyu.mp3`) },
        { key: "pyo", track: "pyo", extension: "mp3", path: require(`../assets/sapray/media/pyo.mp3`) }
    ]
    return data;
}

function groupName() {
    var data = [
        { groupKey: "normal", groupName: "??????????????????????????????????????????" },
        { groupKey: "addition", groupName: "????????????????????????????????????????????????" },
        { groupKey: "normalCombo", groupName: "???????????????????????????????????????????????????" },
        { groupKey: "additionCombo", groupName: "?????????????????????????????????????????????????????????" },
    ]
    return data;
}

function dataByGroup() {
    var dataList = data();
    if (dataList) {

        // ????????????????????????????????????????????????????????????????????????????????????????????????
        const res = Object.keys(dataList).map((key) => {
            let temp = {};
            temp["group"] = dataList[key]["group"];

            return temp;

        })

        // ???????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????????????????????
        const res2 = Object.values(res).filter((val, index) => {
            return index === Object.values(res).findIndex((val2) => val2.group === val.group)
        })

        // ??????????????????????????????????????? ?????????????????????????????????????????????
        const res3 = Object.values(res2).map((val) => {
            let temp = Object.values(dataList).filter((val2) => {
                return val.group === val2.group
            })
            let temp2 = {};
            temp2 = val;
            temp2.value = temp;
            return temp2;
        })
        return res3;
    } else {
        return false;
    }
}

function data() {
    var data = {
        aa: {
            name: "aa", select: true, group: "normal",
            value: ["???", "???", "???", "???", "???"],
            hiragana: ["???", "???", "???", "???", "???"],
            katakana: ["???", "???", "???", "???", "???"],
            romaji: ["a", "i", "u", "e", "o"]
        },
        ka: {
            name: "ka", select: true, group: "normal",
            value: ["???", "???", "???", "???", "???"],
            hiragana: ["???", "???", "???", "???", "???"],
            katakana: ["???", "???", "???", "???", "???"],
            romaji: ["ka", "ki", "ku", "ke", "ko"]
        },
        sa: {
            name: "sa", select: true, group: "normal",
            value: ["???", "???", "???", "???", "???"],
            hiragana: ["???", "???", "???", "???", "???"],
            katakana: ["???", "???", "???", "???", "???"],
            romaji: ["sa", "shi", "su", "se", "so"]
        },
        ta: {
            name: "ta", select: true, group: "normal",
            value: ["???", "???", "???", "???", "???"],
            hiragana: ["???", "???", "???", "???", "???"],
            katakana: ["???", "???", "???", "???", "???"],
            romaji: ["ta", "chi", "tsu", "te", "to"]
        },
        na: {
            name: "na", select: true, group: "normal",
            value: ["???", "???", "???", "???", "???"],
            hiragana: ["???", "???", "???", "???", "???"],
            katakana: ["???", "???", "???", "???", "???"],
            romaji: ["na", "ni", "nu", "ne", "no"]
        },
        ha: {
            name: "ha", select: true, group: "normal",
            value: ["???", "???", "???", "???", "???"],
            hiragana: ["???", "???", "???", "???", "???"],
            katakana: ["???", "???", "???", "???", "???"],
            romaji: ["ha", "hi", "fu", "he", "ho"]
        },
        ma: {
            name: "ma", select: true, group: "normal",
            value: ["???", "???", "???", "???", "???"],
            hiragana: ["???", "???", "???", "???", "???"],
            katakana: ["???", "???", "???", "???", "???"],
            romaji: ["ma", "mi", "mu", "me", "mo"]
        },
        ya: {
            name: "ya", select: true, group: "normal",
            value: ["???", "???", "???"],
            hiragana: ["???", "???", "???"],
            katakana: ["???", "???", "???"],
            romaji: ["ya", "yu", "yo"]
        },
        ra: {
            name: "ra", select: true, group: "normal",
            value: ["???", "???", "???", "???", "???"],
            hiragana: ["???", "???", "???", "???", "???"],
            katakana: ["???", "???", "???", "???", "???"],
            romaji: ["ra", "ri", "ru", "re", "ro"]
        },
        wa: {
            name: "wa", select: true, group: "normal",
            value: ["???", "???"],
            hiragana: ["???", "???"],
            katakana: ["???", "???"],
            romaji: ["wa", "wo"]
        },
        nn: {
            name: "nn", select: true, group: "normal",
            value: ["???"],
            hiragana: ["???"],
            katakana: ["???"],
            romaji: ["n"]
        },
        ga: {
            name: "ga", select: true, group: "addition",
            value: ["???", "???", "???", "???", "???"],
            hiragana: ["???", "???", "???", "???", "???"],
            katakana: ["???", "???", "???", "???", "???"],
            romaji: ["ga", "gi", "gu", "ge", "go"]
        },
        za: {
            name: "za", select: true, group: "addition",
            value: ["???", "???", "???", "???", "???"],
            hiragana: ["???", "???", "???", "???", "???"],
            katakana: ["???", "???", "???", "???", "???"],
            romaji: ["za", "ji", "zu", "ze", "zo"]
        },
        da: {
            name: "da", select: true, group: "addition",
            value: ["???", "???", "???", "???", "???"],
            hiragana: ["???", "???", "???", "???", "???"],
            katakana: ["???", "???", "???", "???", "???"],
            romaji: ["da", "ji", "zu", "de", "do"]
        },
        ba: {
            name: "ba", select: true, group: "addition",
            value: ["???", "???", "???", "???", "???"],
            hiragana: ["???", "???", "???", "???", "???"],
            katakana: ["???", "???", "???", "???", "???"],
            romaji: ["ba", "bi", "bu", "be", "bo"]
        },
        pa: {
            name: "pa", select: true, group: "addition",
            value: ["???", "???", "???", "???", "???"],
            hiragana: ["???", "???", "???", "???", "???"],
            katakana: ["???", "???", "???", "???", "???"],
            romaji: ["pa", "pi", "pu", "pe", "po"]
        },
        ky: {
            name: "ky", select: true, group: "normalCombo",
            value: ["??????", "??????", "??????",],
            hiragana: ["??????", "??????", "??????",],
            katakana: ["??????", "??????", "??????"],
            romaji: ["kya", "kyu", "kyo"]
        },
        sh: {
            name: "sh", select: true, group: "normalCombo",
            value: ["??????", "??????", "??????",],
            hiragana: ["??????", "??????", "??????",],
            katakana: ["??????", "??????", "??????"],
            romaji: ["sha", "shu", "sho"]
        },
        ch: {
            name: "ch", select: true, group: "normalCombo",
            value: ["??????", "??????", "??????",],
            hiragana: ["??????", "??????", "??????",],
            katakana: ["??????", "??????", "??????"],
            romaji: ["cha", "chu", "cho"]
        },
        ny: {
            name: "ny", select: true, group: "normalCombo",
            value: ["??????", "??????", "??????",],
            hiragana: ["??????", "??????", "??????",],
            katakana: ["??????", "??????", "??????"],
            romaji: ["nya", "nyu", "nyo"]
        },
        hy: {
            name: "hy", select: true, group: "normalCombo",
            value: ["??????", "??????", "??????",],
            hiragana: ["??????", "??????", "??????",],
            katakana: ["??????", "??????", "??????"],
            romaji: ["hya", "hyu", "hyo"]
        },
        my: {
            name: "my", select: true, group: "normalCombo",
            value: ["??????", "??????", "??????",],
            hiragana: ["??????", "??????", "??????",],
            katakana: ["??????", "??????", "??????"],
            romaji: ["mya", "myu", "myo"]
        },
        ry: {
            name: "ry", select: true, group: "normalCombo",
            value: ["??????", "??????", "??????",],
            hiragana: ["??????", "??????", "??????",],
            katakana: ["??????", "??????", "??????"],
            romaji: ["rya", "ryu", "ryo"]
        },
        gy: {
            name: "gy", select: true, group: "additionCombo",
            value: ["??????", "??????", "??????",],
            hiragana: ["??????", "??????", "??????",],
            katakana: ["??????", "??????", "??????"],
            romaji: ["gya", "gyu", "gyo"]
        },
        ja: {
            name: "ja", select: true, group: "additionCombo",
            value: ["??????", "??????", "??????",],
            hiragana: ["??????", "??????", "??????",],
            katakana: ["??????", "??????", "??????"],
            romaji: ["ja", "ju", "jo"]
        },
        by: {
            name: "by", select: true, group: "additionCombo",
            value: ["??????", "??????", "??????",],
            hiragana: ["??????", "??????", "??????",],
            katakana: ["??????", "??????", "??????"],
            romaji: ["bya", "byu", "byo"]
        },
        py: {
            name: "py", select: true, group: "additionCombo",
            value: ["??????", "??????", "??????",],
            hiragana: ["??????", "??????", "??????",],
            katakana: ["??????", "??????", "??????"],
            romaji: ["pya", "pyu", "pyo"]
        },
    }




    //var out = JSON.stringify(hiraganaList);
    // if (data) {
    //     var dataArray = [];
    //     const res = Object.keys(data).map((key) => {
    //         //console.log(data[key]["romaji"])
    //         const res2 = Object.keys(data[key]["romaji"]).map((key2) => {
    //             console.log(data[key]["romaji"][key2])
    //             let temp = {};
    //             temp["key"] = data[key]["romaji"][key2];
    //             temp["track"] = data[key]["romaji"][key2];
    //             temp["extension"] = "mp3";
    //             console.log(JSON.stringify(temp))
    //             dataArray.push(temp);
    //             return temp;
    //         })
    //         console.log(res2)
    //     })
    //     console.log(data)
    //     console.log(JSON.stringify(dataArray))
    //     // var out = data.map((val, index) => {
    //     //   let temp = [];
    //     //   temp[key] = val[0];
    //     //   temp[track] = val[0];
    //     //   temp[extension] = "mp3";
    //     //   return console.log(temp)
    //     // })
    // }
    return data;
}