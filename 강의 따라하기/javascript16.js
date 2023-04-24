// 문자열 비교하기 (동등 비교, 대소 비교)

// 동등 연산자('==', '===') 비교
// Javascript에서 문자열의 비교를 위해서는 동등연산자('==' 또는 '===')를 사용합니다.
// 동등 연사자를 사용하여 두 개의 문자열을 비교해서
// 두 문자열이 같으면 'true'를 리턴하고, 다르면 'false'를 리턴합니다.
{
  const str1 = 'apple';
  const str2 = 'apple';
  const str3 = 'banana';

  console.log(str1 === str2); // true
  console.log(str1 == str2); // true
  console.log(str2 === str3); // false
  console.log(str2 == str3); // false
}


// 비교 연산자('<', '>') 비교하기 ( 대소비교)
// '<', '>' 연산자를 사용하여 문자열의 순서를 비교할 수도 있습니다.
// '<', '>' 연산자는 문자열을 '사전 순서' 대로 비교하여 결과를 리턴합니다.
// 더 정확하게 말하면, 문자열의 ASCII 값을 비교하여 결과를 리턴합니다.
{
  console.log('apple' > 'banana'); // false
  console.log('apple' > 'abcd'); // true
  console.log('apple' > 'a'); //true
  console.log('apple' > 'Banana'); // true
  console.log('apple' > '1'); // true

  /*
  예제 1.
    'apple'과 'banana'의 사전 순서는 'banana'가 더 뒤이므로, 'apple'은 'banana'보다 작습니다.
    'a'의 ASCII 값은 97입니다.
    'b'의 ASCII 값은 98입니다.
    따라서 'banana' 가 'apple'보다 큽니다.
  
  예제 2.
    'apple'과 'abcd'의 첫번 째 글자인 'a'의 ASCII 값은 97입니다.
    'apple'의 두번 째 글자인 'p'의 ASCII 값은 112이고,
    'abcd'의 두번 째 글자인 'b'의 ASCII 값은 97입니다.
    따라서 'abcd' < 'apple'입니다.
  
  예제 3.
    'apple'과 'a'의 첫번 째 글자인 'a'의 ASCII 값은 97입니다.
    'apple'의 두번째 글자인 'p'의 ASCII 값은 112이고,
    'a'의 두번째 글자는 없으므로, 0으로 비교됩니다.
    따라서, 'apple' > 'a' 입니다.
  
  
  예제 4
    'apple'의 첫번 째 글자인 'a'의 ASCII 값은 97입니다.
    'Banana'의 첫번째 글자인 대문자 'B'의 ASCII 값은 66입니다.
    따라서 'apple' > 'Banana'입니다.
  
  예제 5.
    'apple'의 첫번 째 글자인 'a'의 ASCII 값은 97입니다.
    '1'의 ASCII 값은 49입니다.
    따라서 'apple' > '1' 입니다.
  */
}

// ASCII 값 
// 숫자 0 ~ 10
// 48 ~ 57
// 알파벳 대문자  A ~ Z 
// 65 ~ 90
// 알파벳 소문자  a ~ z 
// 97 ~ 122
 

// 나머지 ASCII 값은 다음 링크를 참조하세요.
// https://en.wikipedia.org/wiki/ASCII#Printable_characters