function findLongestWord(str) {
  // Split string into an array of separate words
  const wordArray = str.split(" ");
  
  // Sort words by length from smallest to largest
  const orderedWordArray = wordArray.sort((word1, word2) => word1.length > word2.length);
  
  // Return largest word's length, which is last word in newly sorted array
  return orderedWordArray.pop().length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
