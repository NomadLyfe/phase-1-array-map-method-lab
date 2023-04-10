const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const output = tutorials.map(title => {
    const arrayOfWords = title.split(' ');
    const newTitles = arrayOfWords.map(word => {
      const arrayOfLetters = word.split('');
      arrayOfLetters[0] = arrayOfLetters[0].toUpperCase();
      let newWord = '';
      for (const letter of arrayOfLetters) {
        newWord = newWord + letter;
      }
      return newWord;
    })
    let newTitle = '';
    for (const word of newTitles) {
      newTitle = newTitle + ' ' + word;
    }
    return newTitle.slice(1);
  })
  return output;
}
