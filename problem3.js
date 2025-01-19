function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2) {
        return "Invalid";
    }
    if (arr.some(element => typeof element === 'number' && element < 0)) {
        return "Invalid input";
    }
    if (arr[0] === arr[1]) {
        return "equal";
    } else if (typeof arr[1] === 'number' && arr[1] > 0) {
        return arr.sort((a, b) => b - a);
    }
}

console.log(sortMaker([5, 2]));
console.log(sortMaker([3, 3]));
console.log(sortMaker([8, -1]));
console.log(sortMaker([-2, 6]));
console.log(sortMaker([10, 15]));