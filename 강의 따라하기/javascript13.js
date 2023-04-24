// 배열인지 확인하기 - isArray()

// typeof를 사용하여 배열을 검사하면, typeof는 'object'를 리턴합니다.
// 배열은 'object'의 특수한 한 형태이기 때문입니다.
// 따라서, typeof만으로는 객체가 배열인지 확인할 수 없습니다.
// 객체가 배열인지 확인하기 위해서는 'isArray()' 함수를 사용해야 합니다.

/*
- Array.isArray(obj)
파라미터로 입력받은 obj가 배열인지 여부를 boolean값으로 리턴합니다.

파라미터 
  배열인지 검사할 객체

리턴값 
  객체가 배열이면 true, 배열이 아니면 false를 리턴합니다.
*/
{
  document.writeln(Array.isArray([1, 2])); // true
  document.writeln(Array.isArray(new Array(3))); // true

  document.writeln(Array.isArray({})); // false

  /*
Array.isArray([1, 2]);
Array.isArray(new Array(3));
  파라미터가 배열이면 true를 리턴합니다.

Array.isArray({});
  파라미터가 배열이 아닌 object이므로 false를 리턴합니다.
*/
}