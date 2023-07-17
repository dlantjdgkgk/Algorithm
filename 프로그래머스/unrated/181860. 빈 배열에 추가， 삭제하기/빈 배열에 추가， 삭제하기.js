function solution(arr, flag) {
     var answer = [];

    for(let i = 0; i<arr.length; i++){
        console.log(answer)
        if(flag[i]){
            for(let j = 0; j<arr[i]*2; j++){
                answer.push(arr[i])
            }
        }
        else{
           answer = answer.splice(0,answer.length-arr[i])
        }
    }

    return answer;
}