// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length === 0 || matrix.length === 0) {
        return [];
    } else {
        return matrix.reduce((a, b, i) =>
            i % 2 > 0 ? a.concat(b.reverse()) : a.concat(b)
        );
    }
};
