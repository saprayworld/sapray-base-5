import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { number } from '../../Datas/number';

import { styled } from '@mui/material';

const Kanji = styled('span')(({ theme }) => ({
  color: theme.palette.success.main,
}));

export default function NumberSelect(props) {
  const {
    onSubmitNumber,
  } = props;

  /***********************************************************************************************************/
  //
  /***********************************************************************************************************/

  const [charSelectionList] = React.useState([
    { charDisplay: "number", charType: "japanese" },
    { charDisplay: "number", charType: "kanji" },
    { charDisplay: "japanese", charType: "kanji" },
    { charDisplay: "japanese", charType: "number" },
    { charDisplay: "kanji", charType: "japanese" },
    { charDisplay: "kanji", charType: "number" },
  ]);

  const [charSelection, setCharSelection] = React.useState(0);

  const [numberValueMax] = React.useState(9999);
  const [numberValueStart, setNumberValueStart] = React.useState(1);
  const [numberValueEnd, setNumberValueEnd] = React.useState(10);

  const [timeDelay, setTimeDelay] = React.useState(2220);

  function onSelectionChanged(e) {
    setCharSelection(e.target.value)
  }

  function onNumberChanged(e) {
    // console.log(e.target.name, e.target.value)
    if (e.target.name === "numberValueStart") {
      setNumberValueStart(e.target.value)
    }
    if (e.target.name === "numberValueEnd") {
      setNumberValueEnd(e.target.value)
    }
  }

  function onNumberBlured(e) {
    if (e.target.name === "numberValueStart") {
      if (numberValueStart < 0) setNumberValueStart(0)
      else if (numberValueStart > numberValueMax) setNumberValueStart(numberValueMax)
    }
    if (e.target.name === "numberValueEnd") {
      if (numberValueEnd < 0) setNumberValueEnd(0)
      else if (numberValueEnd > numberValueMax) setNumberValueEnd(numberValueMax)
    }
    // if (numberValueStart < 10) setNumberValueStart(10)
    // else if (numberValueStart > numberValueMax) setNumberValueStart(numberValueMax)
  }

  function onNumberInvalid() {
    if (numberValueStart < 0) return true
    else if (numberValueEnd > numberValueMax) return true
    // else if (numberValueStart > numberValueEnd) return true
    else if ((numberValueEnd - numberValueStart) < 9) return true
    else return false
  }

  const RenderNumberInfo = () => {
    return <Grid container spacing={2}>
      <Grid item xs={12} >
        <Grid
          container
          spacing={0}
        >
          <Grid item xs={12} sm={6}  >
            {
              number.data().base.map((val, index) => {
                return index < 5 &&
                  <Typography
                    key={index}
                    noWrap
                  >
                    {val.number} : {val.japanese}「<Kanji>{val?.kanji}</Kanji>」
                  </Typography>
              })
            }
          </Grid>
          <Grid item xs={12} sm={6}  >
            {
              number.data().base.map((val, index) => {
                return index >= 5 &&
                  <Typography
                    key={index}
                    noWrap
                  >
                    {val.number} : {val.japanese}「<Kanji>{val?.kanji}</Kanji>」
                  </Typography>
              })
            }
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} >
        <Grid
          container
          spacing={0}
        >
          {
            number.data().x10.map((val, index) =>
              <Grid item sm={6} xs={12} key={index} >
                <Typography
                  noWrap
                >
                  {val.number} : {val.japanese}「<Kanji>{val?.kanji}</Kanji>」
                </Typography>
              </Grid>
            )
          }
          {
            number.data().x100.map((val, index) =>
              <Grid item sm={6} xs={12} key={index} >
                <Typography
                  noWrap
                >
                  {val.number} : {val.japanese}「<Kanji>{val?.kanji}</Kanji>」
                </Typography>
              </Grid>
            )
          }
          {
            number.data().x1000.map((val, index) =>
              <Grid item sm={6} xs={12} key={index} >
                <Typography
                  noWrap
                >
                  {val.number} : {val.japanese}「<Kanji>{val?.kanji}</Kanji>」
                </Typography>
              </Grid>
            )
          }
        </Grid>
      </Grid>
    </Grid>
  }

  function insertX10more(_val, _index, selection) {
    let keySelect = [
      "base",
      "x10",
      "x100",
      "x1000",
    ]
    if (_index > (keySelect.length - 1)) return ""
    if (_val === "0") return "";

    const _x1Num = number.data().base.find(numData => numData.key === `${_val}`)
    const _Num = number.data()[keySelect[_index]].find(numData => numData.key === `${_val}`)

    return `${_x1Num.number > 1 ? _x1Num[selection] : ""}${_Num ? _Num[selection] : number.data()[keySelect[_index]][0][selection]}`
  }

  function buildTextForNumber(_number, selection) {
    let numArray = [..._number];
    let textOutput = [];
    numArray.reverse()
    if (numArray.length === 1) {
      numArray.forEach(val => {
        let _data = number.data().base.find(numData => numData.key === val)
        return textOutput.push(_data[selection])
      })
    } else if (numArray.length > 1) {
      numArray.forEach((val, index) => {
        if (index === 0 && val !== "0") {
          let _data = number.data().base.find(numData => numData.key === val)
          textOutput.push(_data[selection])
        }
        if (index > 0) textOutput.push(insertX10more(val, index, selection))
        return false;
      })
    }
    textOutput.reverse();
    return textOutput.join("");
  }

  function buildDataObject() {
    let intNumberStart = parseInt(numberValueStart)
    let intNumberEnd = parseInt(numberValueEnd)
    let data = Array.from({ length: (intNumberEnd - intNumberStart) + 1 }, (v, i) => {
      let _intNumber = (i + intNumberStart);
      return {
        number: _intNumber,
        // buildTextForNumber(`${_intNumber}`, charSelectionList[charSelection].charDisplay)
        display: (charSelectionList[charSelection].charDisplay === "number")
          ? _intNumber
          : buildTextForNumber(`${_intNumber}`, charSelectionList[charSelection].charDisplay),
        answer: buildTextForNumber(`${_intNumber}`, charSelectionList[charSelection].charType),
      }
    });
    // console.log(data);
    return data;
  }

  function onSubmitNumberAction() {
    // console.log(numberValueStart)

    onSubmitNumber({
      timeDelay: timeDelay,
      characterList: buildDataObject()
    })
  }


  /***********************************************************************************************************/
  //
  /***********************************************************************************************************/

  return (
    <Card variant="sapray">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <Container maxWidth="sm">
              <RenderNumberInfo />
            </Container>
          </Grid>
          <Grid item xs={12} >
            <Divider />
          </Grid>
          <Grid item xs={12} sx={{
            '& .MuiTextField-root': { m: 1 },
          }} >
            <TextField
              label="จำนวนเริ่มต้น"
              variant="outlined"
              type="number"
              name="numberValueStart"
              value={numberValueStart}
              onBlur={onNumberBlured}
              onChange={onNumberChanged}
            />
            <TextField
              label="จำนวนสูงสุด"
              variant="outlined"
              type="number"
              name="numberValueEnd"
              value={numberValueEnd}
              onBlur={onNumberBlured}
              onChange={onNumberChanged}
            />
            <TextField
              select
              label="รูปแบบ"
              variant="outlined"
              name="charSelection"
              value={charSelection}
              onChange={onSelectionChanged}
            >
              {
                charSelectionList.map((val, index) =>
                  <MenuItem key={index} value={index}>{val.charDisplay} {` 一 `} {val.charType}</MenuItem>
                )
              }
            </TextField>
            <TextField
              label="หน่วงเวลา (มิลลิวินาที)"
              variant="outlined"
              type="number"
              name="timeDelay"
              value={timeDelay}
              // onBlur={onNumberBlured}
              onChange={e => setTimeDelay(parseInt(e.target.value))}
            />
          </Grid>
          <Grid item xs={12} >
            <Divider />
          </Grid>
          <Grid item xs={12} >
            <Button
              size="large"
              startIcon={<PlayArrowIcon />}
              fullWidth
              variant="contained"
              onClick={() => onSubmitNumberAction()}
              disabled={onNumberInvalid()}
            >
              เริ่ม
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card >
  )
}

NumberSelect.propTypes = {
  onSubmitNumber: PropTypes.func,
}

NumberSelect.defaultProps = {
  onSubmitNumber: () => { return false; },
}