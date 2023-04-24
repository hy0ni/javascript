// 문자열의 첫글자만 대문자로 변환하기

/*
문자열의 첫글자만 대문자로 변환하기 
  문자열의 첫글자만 대문자로 변환하기 위해서는 다음의 4가지 절차가 필요합니다.

1. 첫번째 글자 찾기

2. 첫번째 글자를 대문자로 변환하기

3. 첫번째 글자를 제외한 나머지 글자 찾기

4. 2에서 대문자로 변환한 첫번째 글자와 3에서 찾은 나머지 글자를 이어 붙이기
*/
{
  const str = "apple";

  // 1. 첫번째 글자 찾기
  const firstChar = str[0]; // 'a'
  // const firstChar = str.charAt(0); // 'a'

  // 2. 첫번째 글자를 대문자로 변환하기
  const firstCharUpper = firstChar.toUpperCase(); // 'A'

  // 3. 첫번째 글자를 제외한 나머지 글자 찾기
  const leftChar = str.slice(1, str.length); // 'pple'
  // const leftChar = str.substring(1, str.length); // 'pple'
  // const leftChar = str.substr(1, str.length-1); // 'pple'

  // 4. 2에서 대문자로 변환한 첫번째 글자와 
  //    3에서 찾은 나머지 글자를 이어 붙이기
  const result = firstCharUpper + leftChar; // 'Apple'
  // const result = ''.concat(firstCharUpper, leftChar); // 'Apple'
  document.writeln(result); // Apple

  {
    // 임시변수의 사용을 줄인 좀 더 간결한 코드
    const str = "apple";

    const result = str[0].toUpperCase() + str.slice(1, str.length);

    document.writeln(result); // Apple
  }
}