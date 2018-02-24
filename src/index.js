module.exports = function getZerosCount(number, base) {
    let result = number;
    let findMiddle = base;
    for (let i = 2; i <= base; i++) {
        if (!(findMiddle % i)) {
            let middle = 0;
            let count = 0;
            let numbers = number;
            while (!(findMiddle % i)) {
                middle++;
                findMiddle = Math.floor(findMiddle / i);
            }
            while (numbers / i > 0) {
                count += Math.floor(numbers / i);
                numbers = Math.floor(numbers / i);
            }
            result = Math.min(result, Math.floor(count / middle));
        }
    }
    return result;
};
