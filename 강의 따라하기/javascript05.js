// 특정 문자 위치 찾기 (indexOf 함수) 

// 문자열에서 특정 문자의 위치를 찾기 위해서 indexOf 함수를 사용합니다.

// string.indexOf(searchvalue, position)
/*
- indexOf 함수는, 문자열(string)에서 특정 문자열(searchvalue)을 찾고, 
검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴합니다.

- 파라미터
  searchvalue : 필수 입력값, 찾을 문자열
  position : optional, 기본값은 0, string에서 searchvalue를 찾기 시작할 위치

- 찾는 문자열이 없으면 -1을 리턴합니다.
- 문자열을 찾을 때 대소문자를 구분합니다.
*/

{
  const str = "abab";

  document.writeln(str.indexOf('ab')); // 0
  document.writeln(str.indexOf('ba')); // 1
  document.writeln(str.indexOf('abc')); // -1
  document.writeln(str.indexOf('AB')); // -1
  /*
  예제 1
    문자열 'abab'에서 'ab'가 처음으로 나타나는 위치의 인덱스 값을 리턴합니다.
  예제 2
    문자열 'abab'에서 'ba'가 처음으로 나타나는 위치의 인덱스 값을 리턴합니다.
  예제 3
    문자열 'abab'에는 'abc'라는 문자열이 없으므로 숫자 -1을 리턴하였습니다.
  예제 4
    indexOf 함수는 대소문자를 구분합니다.
    문자열 'abab'에는 대문자 'AB'는 없으므로 숫자 -1을 리턴하였습니다.
   
  */
}

// position  값을 입력한 경우 
{
  const str = "abab";

  document.writeln(str.indexOf('ab')); // 0
  document.writeln(str.indexOf('ab', 1)); // 2
  /*
  예제 1
    indexOf 함수의 두번째 파라미터인 position값이 입력되지 않으면, position의 값은 0으로 처리됩니다.
    위 예제에서는 'abab' 문자열의 0번째 index부터 'ab' 문자열을 찾고, 0번째 index에서 문자열 'ab'를 발견하였으므로, 0을 리턴하였습니다.
  예제 2
    position 값을 '1' 로 입력하였습니다.
    위 예제에서는 'abab' 문자열의 1번째 index부터 'ab' 문자열을 검색하므로, 
    index 0에 있는 'ab'는 무시합니다.
  */
}

// 문자열에 있는 모든 searchvalue 위치 찾기 
// indexOf() 함수로는 찾고자 하는 문자열이 나타난 '첫번째' 위치만 찾을 수 있습니다
{
  let str = 'abcabcabc';
  let searchvalue = 'ab';

  let pos = 0;
  while (true) {
    let foundPos = str.indexOf(searchvalue, pos); // 반복문 안에서 searchvalue를 찾고 나서(foundPos)
    if (foundPos == -1) break; // 더 이상 문자열을 찾지 못하면 반복문을 종료합니다.

    document.writeln(foundPos);
    pos = foundPos + 1; // position 값을 foundPos의 다음 index값으로 변경해 줍니다.
  }
}