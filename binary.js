let arr = [2,7,9,10,15,20,25];
let head = 0
let tail = arr.length - 1;
let val = 7

const find = (arr, val, head, tail) => {

    let mid = Math.round((head + tail) / 2)

    if (arr[0] === val) {
        return true
    }
    if (arr[tail] === val) {
        return true
    }
    if (head > tail) {
        return false
    }
    if (arr[mid] === val) {
        return true
    }
    if (arr[mid] < val) {
        return find(arr, val, mid + 1, tail)
    } else {
        return find(arr, val, head, mid)
    }
}

let res = find(arr, val, head, tail)

console.log(res,);