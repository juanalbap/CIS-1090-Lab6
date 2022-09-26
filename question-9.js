//Load a dictionary array with about 70,000 sorted words.
//This is something you have not seen before. Don't worry.
const dictionary = require('./dictionary-long.js');

//This function returns the alphabet position of the
//first letter in the word provided, starting with a = 0;
//
//For example: apple -> 0, boat -> 1, zebra -> 25, 
function getPositionInAlphabet(word){
    //This is something you have not seen before. Don't worry.
    return word.charCodeAt(0) - "a".charCodeAt(0);
}

//This function creates and returns an index array for the
//dictionary provided.
// Position 0 in this array contains
//       the index in the dictionary of the first letter beginning with 'a'
// Position 3 in this array contains
//       the index in the dictionary of the first letter beginning with 'd'
// Position 25 in this array contains
//       the index in the dictionary of the first letter beginning with 'z'
// Position 26 in this array contains the length of the dictionary.
function createIndexForDictionary(d){
    let index = [0];
    let position = 0;
    for( let i = 1; i <= 26; i++){
        while ( position < d.length && getPositionInAlphabet(d[position]) < i )
            position++;
        index[i] = position;
    }
    return index;
}


//❓❓ LAB QUESTION 9:
//Search the array of words in the haystack parameter for the
//word given in the needle parameter using the
//index to speed up your search.
//Return true when you find it, and false if you do not.
function indexSearch(needle, haystack, index){
let startingPoint = createIndexForDictionary(getPositionInAlphabet(needle));
let endingPoint = createIndexForDictionary((getPositionInAlphabet(needle) + 1));

   for (i = startingPoint; i < endingPoint; i++) {
    if (needle == haystack[i]) {
        return true;
     } else {
         
     }
 }

 return false;

}

let index = createIndexForDictionary(dictionary);
console.log(indexSearch("public", dictionary, index));      //Should be true
console.log(indexSearch("squanchy", dictionary, index));    //Should be false
console.log(indexSearch("zyuganov", dictionary, index));    //Should be true
