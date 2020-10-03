exports.min = function min(array) {
    let res = 0;
    if (array) {
        if (array.length !== 0) {
            res = array.sort((a, b) => b - a);
            return res.pop();
        }
    }
    return 0;
};

exports.max = function max(array) {
    let res;
    if (array) {
        if (array.length !== 0) {
            res = array.sort((a, b) => a - b);
            return res.pop();
        }
    }
    return 0;
};

exports.avg = function avg(array) {
    let res;

    if (array) {
        if (array.length !== 0) {
            res = array.reduce((sum, item) => sum + item, 0);
            let averageValue = res / array.length;
            return averageValue;
        }
    }
    return 0;
};
