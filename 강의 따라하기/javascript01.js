// 1. 대소문자 변경 (대문자를 소문자로, 소문자를 대문자로)
{
  // 소문자를 대문자로 변환하기 : toUpperCase() 주어진 스트링의 모든 알파벳을 대문자로 변환한다.
  const abc_uppercase = 'abC'.toUpperCase();
  document.write(abc_uppercase); // ABC

  // 대문자를 소문자로 변환하기 : toLowerCase() 주어진 스트링의 모든 알파벳을 소문자로 변환한다.
  const abc_lowercase = 'abC'.toLowerCase();
  document.write(abc_lowercase); // abc
}
//--------------------------------------------------------------------------------

// 2. 문자열 공백 제거하기
{
  // 문자열의 앞뒤 공백 제거하기(1) - trim() 함수
  let str1 = " 문자열의 앞 뒤 공백 제거하기    ";
  document.write(str1.trim());
}
//--------------------------------------------------------------------------------

// 3. 숫자를 문자로 변환하는 4가지 방법
{
  /*
  1. toString()
  2. String()
  3. Template String (템플릿 문자열)
  4. 빈 문자열 이어붙이기
  */

  // # toString()
  const str1 = (123.1).toString();
  const str2 = (123).toString();
  const str3 = (3).toString(2);

  document.write(str1 + ', ' + typeof str1 + '<br>'); // 123.1, string
  document.write(str2 + ', ' + typeof str2 + '<br>'); // 123, string
  document.write(str3 + ', ' + typeof str3 + '<br>'); // 11, string

  /*  toString() 메소드를 호출하여 숫자를 문자열로 변환하였습니다.
  이 경우, toString()의 파라미터로 base 숫자를 입력해줄 경우,
  해당 진법으로 숫자를 변환하여 문자열로 리턴합니다.
  
  (3).toString(2);
  이 구문은 10진수 숫자 3을 2진수로 변환하여 문자열로 리턴하였습니다.
  */
}
{
  // # String()
  const str1 = String(123.1);
  const str2 = String(123);

  document.write(str1 + ', ' + typeof str1 + '<br>'); // 123.1, string
  document.write(str2 + ', ' + typeof str2 + '<br>'); // 123, string
  // String() 메소드를 사용해서도 숫자를 문자로 변환할 수 있습니다.
}
{
  // # Template String (템플릿 문자열)
  const number1 = 123.1;
  const number2 = 123;
  const str1 = `${number1}`;
  const str2 = `${number2}`;

  document.write(str1 + ', ' + typeof str1 + '<br>'); // 123.1, string
  document.write(str2 + ', ' + typeof str2 + '<br>'); // 123, string
  /*
  ES6 문법인 Template String(템플릿 문자열)을 이용해서 숫자를 문자열로 변환하였습니다.
템플릿 문자열은 백틱(`)으로 문자열을 감싸서 표현하고,
(백틱은 작은 따옴표가 아닌, 키보드 왼쪽 상단의 '~'키 아래에 있는 key입니다.)
'${}' 안에 Javascript 변수를 넣으면 해당 변수의 값을 대응시켜서 문자열을 만들어 줍니다.

  const str1 = `${number1}`;
이 구문은 템플릿 문자열을 백틱(`)으로 감싸서 표현하고,
'${}' 표현 안에 숫자인 number1 변수를 넣어주었습니다.

이 템플릿 문자열은 number1의 숫자를 문자열로 변환시켜 리턴하였습니다.
  */
}
{
  // # 빈 문자열 이어붙이기
  const str1 = 123.1 + "";
  const str2 = 123 + "";

  document.write(str1 + ', ' + typeof str1 + '<br>'); // 123.1, string
  document.write(str2 + ', ' + typeof str2 + '<br>'); // 123, string
  //가장 많이 사용하는 방법으로 숫자에 빈 문자열("")을 연결하여 숫자를 문자로 변경하였습니다.
}
//--------------------------------------------------------------------------------

// 4.문자열에서 첫번째, 마지막 문자 가져오는 3가지 방법
{
  // # charAt() 함수를 이용하기
  let str = "안녕하세요?"

  let first_char = str.charAt(0);
  let second_char = str.charAt(1);
  let last_char = str.charAt(str.length - 1);

  document.write("첫번째 문자 : ", first_char, '<br/>');  // 첫번째 문자 : 안
  document.write("두번째 문자 : ", second_char, '<br/>'); // 두번째 문자 : 녕
  document.write("마지막 문자 : ", last_char, '<br/>');   // 마지막 문자 : ?
  /*
  첫번째 문자, 마지막 문자 또는 원하는 index의 글자를 확인하기 위해서 charAt() 함수를 사용하였습니다.
  charAt() 함수는, 전달된 파라미터의 index에 위치한 글자를 리턴합니다.
  첫번째 글자의 index는 0부터 시작합니다.
  따라서 마지막 글자의 index는 전체 문자열의 길이 - 1 입니다. 
  그래서, 위의 예제에서는 마지막 글자의 index를 구하기 위해 str.length - 1 을 사용하였습니다.
 */
}
{
  // # substring() 함수 이용하기 // string.substring(start, end)
  let str = "안녕하세요?"

  let first_char = str.substring(0, 1);
  let second_char = str.substring(1, 2);
  let last_char = str.substring(str.length - 1, str.length);

  document.write("첫번째 문자 : ", first_char, '<br/>');  // 첫번째 문자 : 안
  document.write("두번째 문자 : ", second_char, '<br/>'); // 두번째 문자 : 녕
  document.write("마지막 문자 : ", last_char, '<br/>');   // 마지막 문자 : ?
  /* 
  substring() 함수는 문자열의 일부를 잘라오는 함수입니다.
  substring() 함수의
  첫번째 파라미터는 잘라내려는 문자열의 시작 index 이고,
  두번째 파라미터는 잘라내려는 문자열의 마지막 index입니다.
  첫번째 글자의 index는 0부터 시작합니다.

  따라서, 위 예제에서는
  첫번째 글자 하나를 가져오기 위해서 start=0, end=1을 세팅하여 substring() 함수를 호출하였습니다.

  마지막 글자 하나를 가져오기 위해서 start=str.length-1, end=str.length 를 세팅하여 substring() 함수를 호출하였습니다.
  */
}
{
  // # slice() 함수 사용하기 // string.slice(start, end)
  let str = "안녕하세요?"

  let first_char = str.slice(0, 1);
  let second_char = str.slice(1, 2);
  let last_char = str.slice(str.length - 1, str.length);

  document.write("첫번째 문자 : ", first_char, '<br/>');  // 첫번째 문자 : 안
  document.write("두번째 문자 : ", second_char, '<br/>'); // 두번째 문자 : 녕
  document.write("마지막 문자 : ", last_char, '<br/>');   // 마지막 문자 : ?
  /*
  slice() 함수의 사용법은 substring() 함수의 사용법과 같습니다.
  slice() 함수는 문자열의 일부를 잘라서 반환하는데, 
  파라미터로는 자르려는 문자열의 시작 index와 끝 index를 전달합니다.

  substring()과 거의 비슷하지만, 약간의 차이가 있습니다.
  */
}
//--------------------------------------------------------------------------------

// 5. substring(), slice() 비교
{
  // start > end 일 경우 처리
  let str = "안녕하세요?"

  let slice = str.slice(1, 0);
  let substring = str.substring(1, 0);

  document.write("slice(1,0) : ", slice, '<br/>'); // slice(1,0) :
  document.write("substring(1,0) : ", substring, '<br/>'); // substring(1,0) : 안
  /*
    파라미터로 전달되는 start > end 일 경우 두 함수의 처리가 다릅니다.
  
    start > end 인 경우,
    substring() : 
    start 값과 end 값을 바꾸어서 처리합니다.
  
    위 예제에서 substring(1, 0)은 실제로는 substring(0, 1)로 처리되어 string의 첫번째 글자 하나를 리턴합니다.
  
    slice() :
    그냥 비어있는 string, 즉 ""을 리턴합니다.
  */
}
{
  // start 또는 end 값이 음수인 경우
  let str = "안녕하세요?"
  //0 1 2 3 4 5 6 7
  //-7 -6 -5 -4 -5 -3 -2 -1 0

  let slice_1 = str.slice(-2, 6);
  let substring_1 = str.substring(-2, 6);
  let slice_2 = str.slice(0, -2);
  let substring_2 = str.substring(0, -2);

  document.write("slice(-2, 6) : ", slice_1, '<br/>'); // slice(-2, 6) : 요?
  document.write("substring(-2, 6) : ", substring_1, '<br/>'); // substring(-2, 6) : 안녕하세요?
  document.write("slice(0, -2) : ", slice_2, '<br/>'); // slice(0, -2) : 안녕하세
  document.write("substring(0, -2) : ", substring_2, '<br/>'); // substring(0, -2) :
  /*
  slice() :
  string의 가장 뒤에서 음수의 절대값만큼 내려온 index로 취급합니다.
  slice(-2, 6) 예제의 경우 start값이 -2로 음수입니다.
  이 경우 string의 뒤에서 2번째자리를 start값으로 취급하여 계산하게 됩니다.
  즉, '안녕하세요?' string의 뒤에서 2번째 자리 글자는 '요'입니다.
  내부적으로 slice(-2, 6)의 start 매개변수의 값은 '요'의 index인 '4'값으로 취급되어
  slice(4, 6)으로 계산되게 됩니다.

  start값이 음수인 경우와 마찬가지로, end값이 음수인 경우에도
  end값은 string의 가장 뒤에서 음수의 절대값만큼 내려온 index로 취급합니다.
  위 예제에서 slice(0, -2)의 경우
  뒤에서 2번째 자리 글자는 '요'이고, '요'의 index는 4이므로
  내부적으로는 slice(0, 4)로 처리되게 됩니다.

  substring() : 
  start값이 음수인 경우, start값은 0으로 취급됩니다.
  위 예제에서 substring(-2, 6)의 start값은 0으로 취급되어,
  내부적으로는 substring(0, 6)으로 계산되게 됩니다.
  end값이 음수인 경우에도, start값과 마찬가지로 end값은 0으로 취급됩니다.
  */
}
{
  // slice() : start 또는 end값이 음수이고, 음수의 절대값이 전체 string 길이보다 클때
  let str = "안녕하세요?"

  let slice_1 = str.slice(-10, 6);
  let slice_2 = str.slice(0, -10);

  document.write("slice(-10, 6) : ", slice_1, '<br/>'); // slice(-10, 6) : 안녕하세요?
  document.write("slice(0, -10) : ", slice_2, '<br/>'); // slice(0, -10) :
  /*
  slice() 함수의 파라미터로 음수값이 전달되면, 
  string의 가장 뒤에서부터 음수의 절대값만큼 내려온 index로 취급된다고 하였습니다.

  그렇다면, string의 길이보다 파라미터로 전달된 음수의 절대값이 더 크다면 어떻게 될까요?
  이 경우, 음수는 단순히 0으로 처리됩니다.

  위 예제와 같이 slice(-10, 6)의 -10의 절대값은 string의 길이인 6보다 크므로
  내부적으로는 slice(0, 6)와 같이 처리됩니다.
  slice(0, -10) 예제도 마찬가지입니다.
  이는 내부적으로 slice(0, 0)으로 처리됩니다.
  */
}