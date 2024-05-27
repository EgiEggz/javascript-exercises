const removeFromArray = function(arr, ...el) {
    return arr.filter(item =>  !el.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
