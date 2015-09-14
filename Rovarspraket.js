
/**
 * write a function `max` that takes two `Numbers` as arguments
 * and returns the largest of them. HINT: Use `if-else`...!
 */
console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);

// Why would you do this?
console.assert(max("aaa",0) === 0);

// Okay, that's just silly...
console.assert(isNaN(max("aaa","bbb")));

/**
 * @param {Number} A to compare to B
 * @param {Number} B to compare to A
 * @return {Number} the greater of A or B
 */
function max(A, B){
    // YOUR CODE HERE
}

/**
 * Write a function `maxOfThree` that takes _three_
 * `Numbers` as arguments and returns the largest of them.
 */
console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);

// Look, that's just mean...
console.assert(maxOfThree("aaa",0,1) === 1);

// Who's running this picture, anyway?
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * @param {Number} A
 * @param {Number} B
 * @param {Number} C
 * @return {Number} greatest of A, B, and C
 */
function maxOfThree(A, B, C){
    // YOUR CODE HERE
}

/**
 * Write a function `isVowel` that takes a character 
 * (i.e. a `String` of length 1) and returns a `Boolean`
 * indicating whether the input is a vowel or not.
 */

// What a cruel, cruel master you are...
console.assert(isVowel(0) === false);

console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

// What should _this_ do?
// console.assert(isVowel("AEIOU") === FILL_ME_IN);

/**
 * @param {String} char of length 1
 * @return {Boolean} whether `char` is an English vowel
 */
function isVowel(char){
    // YOUR CODE HERE
}

/**
 * The `disemvowel` function combats the Internet
 * Trolls by handily removing all of the vowels from
 * their angry, hurtful comments. It's Super-Effective!
 *
 * @param {String} comment to disemvowel
 * @return {String} cmmnt dsmvwld
 */
function disemvowel(comment){
  // YOUR CODE HERE
}

// Shorter test cases might be appreciated...
console.assert(
  disemvowel("This website is for losers LOL!") === "Ths wbst s fr lsrs LL!"
);

/**
 * The function `rovarspraket` will translate text into 
 * a "rövarspråket", i.e. double every consonant and 
 * place an occurrence of "o" in between them.
 *
 * For example, `rovarspraket("this is fun")` should
 * return `"tothohisos isos fofunon"`
 *
 * @see https://en.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket
 *
 * @param {String} text to translate into "rövarspråket"
 * @return {String} translation
 */
function rovarspraket(input){
    // YOUR CODE HERE
}

// Feel free to provide additional examples...
console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")
