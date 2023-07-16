function solution(arr1, arr2) {
    const arr1Result = arr1.reduce((a,b)=>a+b)
    const arr2Result = arr2.reduce((a,b)=>a+b)
    if(arr1.length>arr2.length) return 1
    if(arr1.length<arr2.length) return -1
    if(arr1.length===arr2.length && arr1Result ===arr2Result) return 0
    if(arr1.length===arr2.length && arr1Result >arr2Result) return 1
    if(arr1.length===arr2.length && arr1Result <arr2Result) return -1

}