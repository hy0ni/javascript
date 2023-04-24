// 문자열의 첫글자 삭제하기

// substring(), slice() 함수를 사용
const str = "abcde";

const newStr1 = str.substring(1); // bcde
const newStr2 = str.slice(1); // bcde

document.writeln(newStr1);
document.writeln(newStr2);

// string.substring(start, end)
/*
substring() 함수는 파라미터로 전달된
시작 index(start)부터 종료 index(end)만큼 문자열을 잘라서 리턴합니다.
리턴 값에 종료 index(end) 위치의 문자는 포함되지 않습니다.
역시, 종료 index(end)를 입력하지 않으면, 시작 index부터 문자열의 끝까지를 리턴합니다.
*/

// string.slice(start, end)
/*
slice() 함수는 substring()과 사용법이 거의 같습니다.
시작 index(start)부터 종료 index(end)만큼 문자열을 잘라서 리턴합니다.
리턴 값에 종료 index(end) 위치의 문자는 포함되지 않습니다.
역시, 종료 index(end)를 입력하지 않으면, 시작 index부터 문자열의 끝까지를 리턴합니다.
*/