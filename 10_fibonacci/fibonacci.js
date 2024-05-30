const fibonacci = function(a) {
    a = parseInt(a);
    if(a === 0) return 0;
    if(a < 0) return "OOPS";
    let first = 1;
    let second = 1;
    for (let i= 0; i< a-2; i++) {
        temp = second;
        second = first + second;
        first = temp;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
