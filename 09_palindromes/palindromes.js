const palindromes = function (text) {
    const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedText.split('').reverse().join('') === cleanedText;
};

// Do not edit below this line
module.exports = palindromes;
