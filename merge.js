
function merge(arr1, arr2) {
    let a = 0
    let b = 0
    let result = []

    while (a < arr1.length && b < arr2.length){
        if (arr1[a] < arr2[b]){
            result.push(arr1[a])
            a++
        } else {
            result.push(arr2[b])
            b++
        }
    }
    // once one array has been completely pushed into result, push the rest of the other
    while (a < arr1.length){
        result.push(arr1[a])
        a++    
    }
    while (b < arr2.length){
        result.push(arr2[b])
        b++    
    }
    return result
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

module.exports = { merge, mergeSort};

// mergeSort([7, 2, 4, 3, 8, 10])
// [7, 2, 4] [3, 8, 10]
