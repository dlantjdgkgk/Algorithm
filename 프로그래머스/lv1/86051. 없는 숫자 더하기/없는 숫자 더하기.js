function solution(numbers) {
    let result = [1,2,3,4,5,6,7,8,9]
    result = result.reduce((a,b)=>a+b)
    const res = numbers.reduce((a,b)=>a+b)
    return result-res
}