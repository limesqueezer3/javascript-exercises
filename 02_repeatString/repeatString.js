const repeatString = function(s, num) {
    if (num >= 0) {
        let str = "";
        for (let i = 0; i < num; i++) {
            str += s;
        }
        return str;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
