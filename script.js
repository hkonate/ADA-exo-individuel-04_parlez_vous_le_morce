const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

const morseToLatin = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
};
// Srzp 1
const getLatinCharacterList = (str) => str.split("");
// Step 2
const translateLatinCharacter = (char) => latinToMorse[char];
// Step 3
const encode = (txt) => {
  const input = document.querySelector("#latin input");
  const upperCaseTxt = getLatinCharacterList(input.value.toUpperCase());
  const encodeTxt = [];
  const p = document.querySelector("#latin p");
  for (i = 0; i < upperCaseTxt.length; i++) {
    if (
      upperCaseTxt.join("").charCodeAt(i) >= 65 &&
      upperCaseTxt.join("").charCodeAt(i) <= 90
    )
      encodeTxt.push(translateLatinCharacter(upperCaseTxt[i]));
  }
  p.innerText = encodeTxt.join("");
};
// Step 4
const getMorseCharacterList = (str) => str.split("/");
const translateMorseCharacter = (char) => morseToLatin[char];

const decode = () => {
  const input = document.querySelector("#morse input");
  const splitTxt = getMorseCharacterList(input.value);
  console.log(splitTxt);
  const p = document.querySelector("#morse p");

  const decodeTxt = [];
  for (i = 0; i < splitTxt.length; i++) {
    decodeTxt.push(translateMorseCharacter(splitTxt[i]));
  }
  p.innerText = decodeTxt.join("");
};

// console.log(getLatinCharacterList("Hello, world"));
// console.log(translateLatinCharacter("A"));
// console.log(encode("Hello, world"));
// console.log(decode("--/---/-/---"));
//step 5 done
