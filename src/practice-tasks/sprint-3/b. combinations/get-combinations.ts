const padMap = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

// export const getCombinatios = (numbers: string) => {
//   const combinations: string[] = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (i + 1 === numbers.length) break;
//     const letters = padMap[numbers[i]];
//     const nextLetters = padMap[numbers[i + 1]];
//     for (let j = 0; j < letters.length; j++) {
//       for (let y = 0; y < nextLetters.length; y++) {
//         combinations.push(letters[j] + nextLetters[y]);
//       }
//     }
//   }

//   return combinations.join(" ");
// };

export const getCombinations = (
  numbers: string,
  index = 0,
  restStr = "",
  combinations: string[] = []
) => {
  const letters = padMap[numbers[index]];
  if (index === numbers.length - 1) {
    for (let i = 0; i < letters.length; i++) {
      combinations.push(restStr + letters[i]);
    }
  } else {
    for (let i = 0; i < letters.length; i++) {
      getCombinations(numbers, index + 1, restStr + letters[i], combinations);
    }
  }

  return combinations.join(" ");
};
