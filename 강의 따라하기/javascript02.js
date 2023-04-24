// 문자열에서 특정 문자열 치환하기
// replace() // string.replace(searchValue, newValue)
// replace() 함수는 searchValue, newValue를 파라미터로 입력받고 문자열에서 searchValue를 찾아서 newValue로 치환합니다.
{
  let str = 'apple, banana, orange';
  let replaced_str = str.replace('banana', 'tomato');

  document.write('변경 전 : ', str, '<br/>');
  document.write('변경 후 : ', replaced_str, '<br/>');
}
// 변경 전 : apple, banana, orange
// 변경 후 : apple, tomato, orange
// replace() 함수는 원래의 문자열을 변경하지 않고, 'banana'가 'tomato'로 치환된 문자열을 리턴

// replace() 함수는 첫 번째로 찾은 문자열만 치환해 줍니다.
{
  let str = 'apple, banana, orange, banana';
  let replaced_str = str.replace('banana', 'tomato');

  document.write('변경 전 : ', str, '<br/>');
  document.write('변경 후 : ', replaced_str, '<br/>');
  // 변경 전 : apple, banana, orange, banana
  // 변경 후 : apple, tomato, orange, banana
  /*
  원래의 문자열에는 'banana'가 2번 등장합니다.
  replace() 함수는 문자열에서 첫번째로 찾은 문자열만 치환해 주므로,
  첫번째 'banana'만 'tomato'로 치환되고,
  두 번째 'banana'는 그대로인 것을 확인할 수 있습니다.
*/
}

// replace() 함수는 대소문자를 구분합니다.
{
  let str = 'apple, Banana, orange';
  let replaced_str = str.replace('banana', 'tomato');

  document.write('변경 전 : ', str, '<br/>');
  document.write('변경 후 : ', replaced_str, '<br/>');
  // 변경 전 : apple, Banana, orange
  // 변경 후 : apple, Banana, orange
  /*
  예제에서 원래 문자열은 'Banana'를 포함하고 있고, 첫 글자는 대문자입니다.
  replace() 함수는 대소문자를 구분하기 때문에,
  'banana'를 찾아서 변경하려고 시도하면 'Banana'는 다른 문자열로 인식되어 변경되지 않습니다.
*/
}
//--------------------------------------------------------------------------------

// replace() 함수 사용하여 대소문자 구분 없이 치환하기
{
  let str = 'apple, Banana, orange';
  let replaced_str = str.replace(/banana/i, 'tomato');

  document.write('변경 전 : ', str, '<br/>');
  document.write('변경 후 : ', replaced_str, '<br/>');
  // 변경 전 : apple, Banana, orange
  // 변경 후 : apple, tomato, orange
  /*
  대소문자의 구분없이 문자열을 치환하기 위해서 정규식(regular expression)을 사용하였습니다.
  정규식으로 찾으려는 문자열은 '/'로 감싸서, 파라미터로 들어가는 값이 정규식임을 알려줍니다.
  그리고, '/' 뒤에는 'i'라는 modifier를 붙여주었습니다.
  여기서 i는 대소문자를 구분하지 말라는 의미입니다.
  'ignore case'라고 외우면 좀 더 기억하기 쉬울 것입니다.
  */
}
//--------------------------------------------------------------------------------
// 모든 문자열 치환하기
{
  let str = 'apple, banana, orange, banana';
  let replaced_str = str.replace(/banana/g, 'tomato');

  document.write('변경 전 : ', str, '<br/>');
  document.write('변경 후 : ', replaced_str, '<br/>');
  // 변경 전 : apple, banana, orange, banana
  // 변경 후 : apple, tomato, orange, tomato
  /*
  대소문자 구분없이 문자열을 변경했던 것과 마찬가지로 정규식(regular expression)을 사용하였습니다.
  정규식으로 찾으려는 문자열은 '/'로 감싸서, 파라미터로 들어가는 값이 정규식 임을 알려줍니다.
  그리고, '/' 뒤에는 'g'라는 modifier를 붙여주었습니다.
  g는 'global match'라는 의미로 사용되었습니다.
  */
}

// 대소문자 구분없이 모든 문자열 치환
{
  let str = 'apple, Banana, orange, banana';
  let replaced_str = str.replace(/banana/gi, 'tomato');

  document.write('변경 전 : ', str, '<br/>');
  document.write('변경 후 : ', replaced_str, '<br/>');
  // 변경 전 : apple, Banana, orange, banana
  // 변경 후 : apple, tomato, orange, tomato
  // 대소문자 구분없이 문자열을 치환하기 위해서는 'i' modifier를 사용했기 때문에, 'i'와 'g' modifier를 위 예제와 같이 함께 적어주면 됩니다.
}