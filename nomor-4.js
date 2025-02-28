function cekPalindrom(word) {
    const splitWord = word.split("");
    let reverseWord = "";
    for (let i = splitWord.length - 1; i >= 0; i--) {
        reverseWord += splitWord[i];
    }

    const result = word === reverseWord ? "Palindrom" : "Not Palindrom";

    return result;
}

console.log(cekPalindrom("malam"));
console.log(cekPalindrom("kasur rusak"));
console.log(cekPalindrom("fazztrack"));

/////////////////////////////////////////////////////////////////////////////////////

function reverseWords(words) {
    const splitToWord = words.split(" ");

    const reverseWord = [];
    for (let i = splitToWord.length - 1; i >= 0; i--) {
        reverseWord[reverseWord.length] = splitToWord[i];
    }

    let result = "";
    for (let i = 0; i < reverseWord.length; i++) {
        result += reverseWord[i] + " ";
    }

    return result;
}

export { reverseWords, cekPalindrom }
