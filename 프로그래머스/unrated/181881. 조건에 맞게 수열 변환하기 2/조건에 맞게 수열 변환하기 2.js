function solution(arr, count = 0) {
    const temp = [...arr].map((n) => n >= 50 && !(n % 2) ? n / 2 : n < 50 && n % 2 ? n * 2 + 1 : n);
    if (arr.every((n, i) => n === temp[i])) return count;
    return Math.max(count, solution(temp, count + 1));
}