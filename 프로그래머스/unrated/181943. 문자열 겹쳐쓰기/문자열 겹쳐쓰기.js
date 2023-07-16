function solution(my_string, overwrite_string, s) {
    var answer = '';
  
    
     answer += my_string.substr(0,s);
    answer += overwrite_string;
    answer += my_string.substr(overwrite_string.length+s,my_string.length)
    
    return answer;
}