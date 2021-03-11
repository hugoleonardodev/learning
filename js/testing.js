function createWordsAndCheckPalindromes(args) {
  const { min, max, loops } = args;
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let words = [];
  // Generating random words with length from min to max
  for(let i = 0; i < loops; i += 1) {
    let wordLength = Math.round(Math.random() * (max - min) + min);
    let word = [];
    for(let k = 0; k < wordLength; k += 1) {
      word = [...word, letters[Math.floor(Math.random() * 26)]]
    }
    words = [...words, word.join('')];
  }
  console.log(words)
  // Checking all words for palindromes
  const palidromes = words.filter(e => e === e.split('').reverse().join(''))
  // Return number os palindromes generated randomly
  return palidromes.length;
}

console.log(createWordsAndCheckPalindromes({ min: 3, max: 5, loops: 10000}));
