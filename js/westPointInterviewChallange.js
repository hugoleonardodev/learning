// gerar um array com 10 mil palavras aleatórias com tamanho entre 3 e 5; depois verificar quantas destas 10 mil
// palavras são palíndromos

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
  // console.log(words);
  // Checking all words for palindromes
  // const palidromes = words.reduce((palidromes, word) => {
  //   if(word === word.split('').reverse().join('')) {
  //     palidromes = [...palidromes, word];
  //   }
  //   return palidromes;
  // }, []);
  const isPalindrome = words.filter((palindrome) => palindrome.split('').reverse().join('') === palindrome);
  // Return number os palindromes generated randomly
  console.log(isPalindrome);
  return isPalindrome.length;
}

console.log(createWordsAndCheckPalindromes({ min: 3, max: 5, loops: 10000}));
