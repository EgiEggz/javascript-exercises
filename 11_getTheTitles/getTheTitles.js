const getTheTitles = function(inp) {
    let array = [];
    inp.forEach(element => {
        array.push(element['title']);
    });
    return array
};

// Do not edit below this line
module.exports = getTheTitles;
