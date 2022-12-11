import React from 'react';
import PropTypes from 'prop-types';

import {
  styled,
  Card,
  CardContent,
  Grid,
  Checkbox,
  FormControlLabel,
  Typography,
  Divider,
  Button,
} from '@mui/material';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { japannese } from '../../Datas/japanese';

const SectionSelection = styled('div')(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export default function CharacterSelect(props) {
  const {
    charType,
    charDisplay,
    onSubmitCharacter,
  } = props;

  /***********************************************************************************************************/
  //
  /***********************************************************************************************************/

  const [characterSelect, setCharacterSelect] = React.useState(japannese.data());
  const [characterByGroup] = React.useState(japannese.dataByGroup());
  const [characterGroupName] = React.useState(japannese.groupName());

  const checkEmptyCharacter = () => {
    var selected = 0;
    for (const key in characterSelect) {
      if (characterSelect.hasOwnProperty(key)) {
        const element = characterSelect[key];
        if (element.select === true) {
          selected++;
        }
      }
    }
    //console.log(selected)
    return (selected < 1) ? true : false;
  }

  const toggleSetCharacter = (input) => {
    // var { characterSelect } = this.state;
    let _characterSelect = characterSelect;
    var temp = [];
    for (const key in _characterSelect) {
      if (_characterSelect.hasOwnProperty(key)) {
        const element = _characterSelect[key];
        if (element.group === input.target.name) {
          temp[key] = {
            ...element,
            select: input.target.checked
          }
        }
        //console.log(element.group == input.target.name ? element : null)
      }
    }

    _characterSelect = {
      ..._characterSelect,
      ...temp
    }
    setCharacterSelect(_characterSelect)

    // console.log(characterSelect)
  }

  const toggleCharacter = (input) => {
    let _characterSelect = characterSelect;
    if (input.target.name) {
      _characterSelect = {
        ..._characterSelect,
        [input.target.name]: {
          ..._characterSelect[input.target.name],
          select: input.target.checked,
        }
      }
      setCharacterSelect(_characterSelect)
    }
  }

  const setUiCharacterGroup = (groupName, dataCharacter) => {
    var selected = 0;
    for (const key in dataCharacter) {
      if (dataCharacter.hasOwnProperty(key)) {
        const element = dataCharacter[key];
        if (element.group === groupName && element.select === false) {
          selected++;
        }
      }
    }

    //console.log(selected)
    return (selected < 1) ? true : false;
  }

  const RenderGroup = ({ groupName, groupData }) => {
    //console.log(groupName)
    //console.log(groupData)
    var group = groupData.find((val, index) => {
      return val.group === groupName.groupKey
    })
    //console.log(groupName.groupName + " | " + groupName.groupKey)
    return (
      <>
        <FormControlLabel
          label={<Typography variant="body2">{groupName.groupName}</Typography>}
          control={
            <Checkbox
              name={groupName.groupKey}
              disableRipple
              checked={setUiCharacterGroup(groupName.groupKey, characterSelect)}
              // // indeterminate={checked[0] !== checked[1]}
              onChange={(target) => { toggleSetCharacter(target) }}
            />
          }
        />
        <SectionSelection>
          {group.value.map((val, index) => {
            let stringCharacter = "";
            val[charDisplay].map((val2, index2) => {
              stringCharacter += val2;
              if (groupName.groupKey === "normal" && val[charDisplay].length === 3) {
                stringCharacter += (val[charDisplay].length === (index2 + 1) ? "" : "　　　")
              } else if (val[charDisplay].length === 2) {
                stringCharacter += (val[charDisplay].length === (index2 + 1) ? "" : "　　　　　　　")
              } else if (val[charDisplay].length === 1) {
                stringCharacter += "　　　　　　　　"
              } else {
                stringCharacter += (val[charDisplay].length === (index2 + 1) ? "" : "　")
              }
              return false;
            })
            //console.log(val.name + " | " + stringCharacter)
            return (
              <FormControlLabel
                key={index}
                label={<Typography variant="body1">{stringCharacter}</Typography>}
                control={
                  <Checkbox
                    name={val.name}
                    disableRipple
                    checked={characterSelect[val.name]["select"]}
                    // indeterminate={checked[0] !== checked[1]}
                    onChange={(target) => { toggleCharacter(target) }}
                  />
                }
              />
            )
          })}
        </SectionSelection>
      </>
    )
  }

  const RenderUi = () => {
    //console.log(characterGroupName.length / 4)
    var htmlRender =
      <Grid container spacing={2}>
        {
          ((characterGroupName.length / 4) === 1)
            ?
            characterGroupName.map((val, index) => {
              return (
                <Grid key={val.groupKey} item lg={3} md={3} sm={12} xs={12} >
                  <RenderGroup
                    groupName={characterGroupName[index]}
                    groupData={characterByGroup}
                  />
                  {/* {this.renderGroup(characterGroupName[index], characterByGroup)} */}
                </Grid>
              )
            })
            : null
        }
      </Grid>;
    return htmlRender;
  }

  const toggleStartRandom = () => {
    var characterListToRandom = [];
    for (const key in characterSelect) {
      if (characterSelect.hasOwnProperty(key)) {
        const element = characterSelect[key];
        if (element.select === true) {
          //console.log(element)
          let _charType = (charType !== "romaji" ? charType : charDisplay)
          element[_charType].map((val, index) => {
            //characterListToRandom.push(val,element.romaji[index])
            let romaji = element.romaji[index]; //romaji: ใช้สำหรับอ้างอิงไฟล์เสียง
            let character = (charType !== "romaji" ? val : `${val} / ${element.katakana[index]}`);
            let temp = {};
            temp = { character: character, romaji }
            characterListToRandom.push(temp)
            return false;
          })
        }
      }
    }

    /**
     * 
     * characterListToRandom: รายการที่ใช้สุ่ม
     * {
     *    character: ตัวอักษรที่ใช้แสดง
     *    romaji:    ใช้สำหรับอ้างอิงไฟล์เสียง
     * }
     */

    // console.log(characterListToRandom)
    //this.scrollToSapray();

    onSubmitCharacter(
      {
        charType: charType,
        characterList: characterListToRandom,
      }
    );

    // navigate(`${process.env.PUBLIC_URL}/apps/random-hiragana/run`, {
    //   state: {
    //     characterList: characterListToRandom
    //   }
    // });

  }

  /***********************************************************************************************************/
  //
  /***********************************************************************************************************/

  return (
    <Card variant="sapray">
      <CardContent>
        <RenderUi />
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <Divider style={{ marginTop: "15px", marginBottom: "15px" }} />
            <Button
              size="large"
              startIcon={<PlayArrowIcon />}
              fullWidth
              variant="contained"
              onClick={() => toggleStartRandom()}
              disabled={checkEmptyCharacter()}
            >
              เริ่ม
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

CharacterSelect.propTypes = {
  charType: PropTypes.oneOf(['hiragana', 'katakana', 'romaji']),
  charDisplay: PropTypes.oneOf(['hiragana', 'katakana']),
  onSubmitCharacter: PropTypes.func,
}

CharacterSelect.defaultProps = {
  charType: "hiragana",
  charDisplay: "hiragana",
  onSubmitCharacter: () => { return false; },
}