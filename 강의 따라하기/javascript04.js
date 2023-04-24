// 특정 인덱스 위치의 문자를 찾아 읽어오는 2가지 방법

// chartAt() 함수 활용 하기 
// str.charAt(index)
// charAt 함수는 주어진 문자열의 index 위치의 문자를 읽어서 리턴합니다.
// index는 0부터 시작합니다.
// index 값이 입력되지 않으면, index 값은 자동으로 0으로 지정됩니다.
{
  const str = "abcde";

  document.writeln(str.charAt()); // a
  document.writeln(str.charAt(0)); // a
  document.writeln(str.charAt(str.length - 1)); // e
  document.writeln(str.charAt(9999)); // ''(공백)
  /*
  예제1
    파라미터로 index가 지정되지 않으면, index 값은 자동으로 0으로 설정됩니다.
    문자열의 0번째 index에 위치한 글자 'a'를 리턴하였습니다.
    즉, 파라미터를 입력하지 않으면, 문자열의 첫번째 글자를 리턴합니다.
  예제2
    파라미터로 0이 입력되었습니다.
    문자열의 0번째 index에 위치한 글자 'a'가 리턴 되었습니다.
  예제3
    파라미터로 'str.length-1'이 입력되었습니다.
    문자열의 마지막 글자를 리턴하였습니다.
  예제4
    문자열의 index를 넘어서는 숫자가 파라미터로 입력되었습니다.
    index 범위 밖의 숫자가 입력되면 빈 문자열('')이 리턴 됩니다.
  */
}


// 대괄호 인덱스 활용 하기 (문자열[index])
{
  // 배열의 index를 접근하듯이 대괄호( [ ] )와 index를 활용하여, 특정 index의 문자를 읽을 수 있습니다.
  const str = "abcde";

  document.writeln(str[0]); // a
  document.writeln(str[str.length - 1]); // e
  document.writeln(str[9999]); // undefined
  /*
  예제 1
    배열의 index에 접근하는 것처럼 '문자열[index]' 구문을 이용하여 0번째 index의 글자를 읽었습니다.
  예제 2
    'str.length-1' 구문을 index 위치에 입력하여, 문자열의 마지막 문자를 읽었습니다.
  예제 3
    문자열의 index를 벗어나는 값이 index값으로 지정되면 'undefined'가 리턴됩니다.
  */
}


// charAt(index) 함수 vs 문자열[index] 
{
  const str = "abcde";

  document.writeln(str.charAt(9999)); // ''
  document.writeln(str[9999]); // undefined

  /*
  charAt(index) 함수와 문자열[index] 구문의 가장 큰 차이점은,
  위 예제와 같이 index값으로 범위를 벗어나는 값이 입력되었을 경우입니다.

  index로 범위를 벗어나는 값이 입력되면
  charAt(index) 함수는 빈 문자열('')을 리턴합니다.
  
  문자열[index] 구문은 undefined를 리턴합니다.
  */
}