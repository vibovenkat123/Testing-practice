function caesar(string: String, shift: number) {
  let stringArr: String[] = string.split("");
  for (const character in stringArr) {
    let isUpper: boolean =
      String(stringArr[character].toUpperCase()) == stringArr[character];
    if (isUpper) stringArr[character] = stringArr[character].toLowerCase();
    if (!letters.includes(stringArr[character])) {
      continue;
    }
    let index: number = letters.indexOf(stringArr[character]);
    let finalIndex: number = index + shift;
    finalIndex = checkForGreaterIndex(finalIndex, letters.length);
    let newLetter: String = letters.at(finalIndex)!;
    if (isUpper) newLetter = newLetter.toUpperCase();
    stringArr[character] = newLetter;
  }
  return stringArr.join("");
}
function checkForGreaterIndex(index: number, length: number) {
  if (index >= length - 1) {
    index -= length;
    return checkForGreaterIndex(index, length);
  } else {
    return index;
  }
}
const letters: String[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
export default caesar;
