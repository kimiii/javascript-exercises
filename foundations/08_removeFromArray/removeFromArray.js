const removeFromArray = function(arr, ...arg) {
    return arr.filter(val => !arg.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
