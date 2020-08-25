export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomString(length) {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function getRandomOption(optionsArr) {
  const possibleOptions = optionsArr;
  const randomOption =
    possibleOptions[Math.floor(Math.random() * possibleOptions.length)];
  return randomOption;
}
