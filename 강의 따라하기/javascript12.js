// 데이터 타입 확인하기 - typeof

/*
typeof operand
typeof(operand)

typeof 연산자는 operand의 타입을 나타내는 문자열을 리턴합니다.

파라미터 
  타입을 알고 싶은 객체 또는 표현식

리턴값 
  operand의 타입을 나타내는 문자열
*/
document.writeln(typeof "ABC"); // string

document.writeln(typeof 1); // number
document.writeln(typeof 1.2); // number

document.writeln(typeof { name: "Anne" });// object
document.writeln(typeof null); // object
document.writeln(typeof [1, 2, 3]); // object

document.writeln(typeof true); // boolean

document.writeln(typeof undeclaredVariable); // undefined

document.writeln(typeof function () { }); // function

document.writeln(typeof 11n); // bigint

/*
typeof "ABC" 
  문자열은 "string"을 리턴합니다.

typeof 1
typeof 1.2 
  숫자는 "number"를 리턴합니다.

typeof { name : "Anne"} 
  객체는 "object"를 리턴합니다.

typeof null 
  null은 "object"를 리턴합니다.

typeof [1, 2, 3] 
  배열은 "object"를 리턴합니다. 
  배열은 object의 특수한 한 형태이기 때문입니다.
  객체가 배열인지 확인하려면 "isArray()" 함수를 사용합니다.

typeof true 
  true, false 값은 "boolean"을 리턴합니다.

typeof undeclaredVariable 
  미정의된 변수는 "undefined"를 리턴합니다.

typeof function() {} 
  함수는 "function"을 리턴합니다.

typeof 11n 
  BigInt는 "bigint"를 리턴합니다.
*/