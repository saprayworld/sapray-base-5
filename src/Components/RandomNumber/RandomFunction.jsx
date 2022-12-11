export const randomFunc = {
  allRandom,
  shuffling,
  shuffle,
};

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

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function random(data, oldRandomIndex) {
  var characterLength = data.length;
  var randomArray = Math.floor(Math.random() * characterLength);

  while (randomArray === oldRandomIndex) {
    randomArray = Math.floor(Math.random() * characterLength);
  }
  return randomArray;
}