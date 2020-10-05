export const hackerSpeak = (words) => {
  words = words.replace(/a/gi, '4')
  words = words.replace(/e/gi, '3')
  words = words.replace(/i/gi, '1')
  words = words.replace(/o/gi, '0')
  words = words.replace(/s/gi, '5')
  console.log(words)
  return words
}

// replace method, regular expression
//npm run test -- -t 8-hacker-speak
// gi implies that we are looking thru the whola array and both uppercas & lowercase
// g = perfrom global emplacement
// gi = case insensitive (looking for all)