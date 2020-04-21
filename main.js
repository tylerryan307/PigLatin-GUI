const pigLatin = (myWord) => {
  let listOfVowels = ["a", "e", "i", "o", "o"];
 
  let indexClosestToZero = 999;

  for(let i = 0; i <= listOfVowels.length -1; i++) {
    let index = myWord.indexOf(listOfVowels[i]);
    if(index >=0 && index < indexClosestToZero) {
      indexClosestToZero = index;
    } 
  
  }

//TODO For Loop needs to allow simple words and complex words to work

  // if word has more then one consonant 
  let wordBeginning = myWord.substring(0, indexClosestToZero); // Break the word into right before the first vowel
  let wordEnding = myWord.substring(indexClosestToZero); // Break the word on the vowel into the vowel and rest of the word
  let newCompleteWord = wordEnding + wordBeginning + "ay"; // Combines two substrings with "ay"
  return newCompleteWord // Returns Output logic in console
}




const myFunction = () => {
  let myWord = prompt("Please enter your word");
  if (myWord != null) {
    document.getElementById("demo").innerHTML =
    "Your word is " + pigLatin(myWord);
  }
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.