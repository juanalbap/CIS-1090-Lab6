//❓❓ LAB QUESTION 6 & 7:
let dictionary = [
                "aardvark", "abattoir", "baby", "batman",
                "cat", "cooper", "dog", "ghost", "lion",
                "water", "window", "xylophone", "yawl",
                "yello", "zebra"
            ];

            console.log(dictionary[11]);

//❓❓ LAB QUESTION 8:
//Search the array of words in the haystack parameter for the
//word given in the needle parameter (get it? Searching for a needle in
//a haystack?).
//Return true when you find it, and false if you do not.

function linearSearch(needle, haystack){
   
    for (let i = 0; i < haystack.length; i++) {
        if (needle == haystack[i]) {
           return true;
        } else {
            
        }
    }

    return false;

}

console.log("Does it contain cat? ", linearSearch("cat", dictionary));
console.log("Does it contain dog? ", linearSearch("dog", dictionary));
console.log("Does it contain syzygy? ", linearSearch("syzygy", dictionary));