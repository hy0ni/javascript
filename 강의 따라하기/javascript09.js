// 문자열 뒤에서 자르기
{
  // str.slice(beginIndex[, endIndex])
  const str = "abcde";

  const last2char_01 = str.slice(-2, str.length); // de
  const last2char_02 = str.slice(-2); // de

  document.writeln(last2char_01);
  document.writeln(last2char_02);
}
/*
  str.slice(-2, str.length)
beginIndex나 endIndex의 값으로 음수가 입력되면,
index값은 문자열의 길이 + index값으로 계산됩니다.
즉, 위의 예제에서 문자열의 길이는 5이고, beginIndex 값은 -2이므로,

str.slice(-2, str.length)는
str.slice(5+(-2), 5),
즉, str.slice(3, 5)로 계산되어 문자열의 마지막 2글자를 리턴하게 됩니다.

  str.slice(-2)

만약, endIndex 파라미터가 생략되면
slice() 함수는 문자열의 마지막 글자까지 문자열을 잘라서 리턴합니다.
따라서,
str.slice(-2)는
str.slice(-2, str.length)와 같습니다.
*/


// Javascript의 문자열이 숫자인지 체크하는 방법

// isNaN(value)
// 여기에서 NaN은 'Not a Number'의 약자입니다.
/*
  - 파라미터 
    테스트할 값을 입력합니다.

  - 리턴값 
    파라미터가 숫자가 아닐 경우 true를 리턴하고,
    파라미터가 숫자일 경우 false를 리턴합니다. 
*/
{
  document.writeln(isNaN("123")); // false
  document.writeln(isNaN("123.1")); // false
  document.writeln(isNaN(123)); // false
  document.writeln(isNaN(-123)); // false
  document.writeln(isNaN(.1)); // false

  document.writeln(isNaN("abc")); // true
  document.writeln(isNaN("123+123")); // true
  document.writeln(isNaN(undefined)); // true
  document.writeln(isNaN({})); // true

  document.writeln(isNaN('')); // false
  document.writeln(isNaN(' ')); // false
  document.writeln(isNaN(null)); // false
  document.writeln(isNaN(true)); // false
  document.writeln(isNaN([])); // false

  document.writeln(isNaN(new Date())); // false
  document.writeln(isNaN(new Date().toString())); // true

  /*
    ▶ '123', '123.1', 123, -123, .1
    문자열 타입이든 숫자 타입이든 숫자가 입력되면 isNaN() 함수는 false를 리턴합니다.

    ▶ 'abc'
    문자열이 입력되면 true를 리턴합니다.

    ▶ '123+123'
    숫자로 이루어진 문자열 안에 숫자가 아닌 '+' 기호가 있기 때문에 true를 리턴합니다.

    ▶ undefined, {}
    undefined, {} 는 true를 리턴합니다.

    ▶ '', ' ', null, true, false, []
    빈 문자열, null, boolean 값, 배열은 false를 리턴합니다.

    ▶ new Date(), new Date().toString()
    new Date()는 false를 리턴합니다.
    new Date().toString()은 문자를 리턴하므로 true를 리턴합니다.
  */
}