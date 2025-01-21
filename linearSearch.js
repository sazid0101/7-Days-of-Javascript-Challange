function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return { index: i, value: arr[i] };
        }
    }
    return "the target is not found"; 
}
console.log(linearSearch(['a','b','c','d','c'], 'c'));