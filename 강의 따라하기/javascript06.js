// 문자열 합치기 (3가지 방법) 
// 1. '+' 연산자 
// 2. concat() 함수 
// 3. join() 함수

{
  // '+' 연산자 
  const str = 'Hello' + ' ' + 'world';
  document.writeln(str); // Hello world
  /*
  숫자를 더 할 때 '+' 연산자를 사용하는 것처럼 문자열을 이어줄 때도 위와 같이 '+' 연산자를 사용할 수 있습니다.
  이 글에서 소개할 문자열을 이어주는 방법 중 가장 성능이 뛰어납니다.
  */
  let str1 = 'Hello';
  str1 += ' ';
  str1 += 'world';

  document.writeln(str1); // Hello world
  //숫자를 더해줄 때와 마찬가지로 '+=' 연산자를 사용할 수도 있습니다.
}

{
  // concat() 함수 
  // str.concat(str2, str3.....strN)
  // - concat()함수는 str과 파라미터로 입력받은 str2, str3... 문자열을 모두 이어붙인 문자열을 리턴합니다.
  // - str2는 필수 입력값이고, 나머지는 선택 입력값입니다.
  const result = 'Hello'.concat(' ', 'world', '!');
  document.write(result); // Hello world!
  // 'Hello'에 3개의 문자열 ' ', 'world', '!'를 이어붙였습니다.

  {
    // 파라미터로 문자열 이외의 다른 타입도 넣을 수 있습니다.
    const str1 = ''.concat(null); // null
    const str2 = ''.concat(1, 2); // 12
    const str3 = ''.concat(true, false); // truefalse
    const str4 = ''.concat({ name: 'apple' }); // [object Object]
    const str5 = ''.concat([1, 2]); // 1,2

    document.writeln(str1);
    document.writeln(str2);
    document.writeln(str3);
    document.writeln(str4);
    document.writeln(str5);
    // null 12 truefalse [object Object] 1,2
    /*
    파라미터로 입력되는 다른 모든 타입은, 문자열을 이어붙이면서 모두 '문자열' 타입으로 자동 변경되기 때문에, 파라미터로 null이 입력되어도 오류가 발생하지 않고, null값은 문자열 'null'로 변경되어 문자열에 합쳐집니다.
    주의할 것은, 파라미터는 문자열이 아닌 타입이 들어갈 수 있지만, str1.concat(str2) 에서 str1은 반드시 문자열이어야 합니다.
    */
  }

  {
    // Array의 concat() 함수가 적용되지 않도록 주의하세요.
    const arr = ['Hello'];
    const str = 'Hello';

    // 배열 합치기
    const str1 = arr.concat(' ', 'world'); // Hello, , world
    // 문자열 합치기
    const str2 = str.concat(' ', 'world'); // Hello world

    document.write(str1);
    document.write('<br>');
    document.write(str2);
    /*
    배열에도 배열을 이어붙이는 함수인 concat() 함수가 있습니다.
    사용법도 문자열을 합쳐주는 함수는 문자열의 concat() 함수와 거의 비슷합니다.
    str1.concat(str2...)에서 str1이 반드시 문자열이어야 하는 이유입니다.
    str1 자리에 배열이 들어가면, 문자열을 이어붙이는게 아니라 배열을 이어붙이게 됩니다.
    따라서, 문자열을 합칠 때 concat() 함수를 써야 한다면,
    str1 자리에 ''(빈 문자열)을 넣고,
    ''.concat('Hello', ' ', 'world')
    위와 같은 방식으로 사용하는 것을 권장합니다.
    물론, concat 함수보다는 성능이 더 좋은 '+' 연산자를 사용하는 것을 더 추천합니다.
    */
  }
}

{
  // join() 함수 
  // arr.join([separator])
  // - separator는 옵션입니다.

  const str1 = ['Hello', 'world'].join();
  const str2 = ['Hello', 'world'].join('♥');

  document.write(str1);
  document.write('<br>');
  document.write(str2);
  // Hello,world
  // Hello♥world
  /*
  join() 함수는 배열의 모든 문자열을 이어 붙여 줍니다.
  
  join() 함수의 장점은 문자열을 이어 붙일 때 separator(구분자)를 지정해 줄 수 있다는 것입니다.

  join() 함수를 잘 활용하면 반복문을 사용하지 않고도, 문자열에 구분자를 넣어서 이어붙여 줄 수 있습니다. 
  */
}