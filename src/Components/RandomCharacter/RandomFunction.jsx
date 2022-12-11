export const randomFunc = {
  allRandom,
  shuffling,
  test,
};

function test() {
  console.log("Test")
}

function allRandom(data, oldRandomIndex) {
  if (typeof (data) === "object") {
    console.log(random(data, oldRandomIndex))
  } else {
    console.log("data is not object")
  }
}

// function stepRandom(data) {

// }

function shuffling(data) {
  if (typeof (data) === "object") {
    data.sort((ele1, elem2) => Math.random() - Math.random());
    // console.log(data)
    return data
  } else {
    console.log("data is not object")
  }
}

function random(data, oldRandomIndex) {
  var characterLength = data.length;
  var randomArray = Math.floor(Math.random() * characterLength);

  while (randomArray === oldRandomIndex) {
    randomArray = Math.floor(Math.random() * characterLength);
  }
  return randomArray;
}