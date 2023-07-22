function solution(m, a) {
    let answer = '';

    for(let i = 0; i<m.length; i++){
        if(!a.includes(i)){
            answer =answer+m[i]
        }
    }

    return answer;
}