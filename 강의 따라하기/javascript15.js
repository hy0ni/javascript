// '=='와 '==='의 차이 (null, undefined)

// '=='연산자와 '==='를 이용한 unll, undefined 비교 
{
  console.log(undefined == null); // true
  console.log(undefined === null); // false
  // '==' 연산자를 이용하여 두 값(null과 undefined)을 비교하면 true를 리턴합니다.
  // 그러나, '===' 연산자를 이용하여 두 값을 비교하면 타입이 다르기 때문에 false를 리턴합니다.
}

// '==' 연산자를 이용한 null, undefined 비교 예제
{
  let a; // undefined
  let b = null; // null

  console.log(a == null); // true
  console.log(a == undefined); // true
  console.log(b == null); // true
  console.log(b === undefined); // false
  /*
  변수를 선언하고 값을 할당하지 않으면, 변수는 undefined 값을 가집니다. (변수 a)
  변수 b에는 null 값을 할당하였습니다.

  '==' 연산자를 사용하여 null 값과 비교할 경우,
  변수값이 null 이든,  undefined 이든 모두 true를 리턴합니다.
  마찬가지로,
  '==' 연산자를 사용하여 undefined 값과 비교를 하면,
  변수값이 null 이든,  undefined 이든 모두 true를 리턴합니다.
  */
}

// '===' 연산자를 이용한 null, undefined 비교 예제 
{
  let a; // undefined
  let b = null; // null

  document.writeln(a === null); // false
  document.writeln(a === undefined); // true
  document.writeln(b === null); // true
  document.writeln(b === undefined); // false
  //'===' 연산자를 이용하여 비교할 경우에는 정확하게 두 값이 일치할 경우에만 true를 리턴합니다.
}