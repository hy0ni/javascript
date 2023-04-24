// 배열 선언하는 2가지 방법

{
  // 대괄호([])를 사용하는 방법
  const arr = [];
  const arr1 = ['white', 'red', 'black'];
  const arr2 = ['apple', 1, true, [100, 200]];

  console.log(arr); // []
  console.log(arr1); // ['white', 'red', 'black']
  console.log(arr2); // ['apple', 1, true, Array(2)]
  console.log(arr2.length) // 4
}

{
  // new Array()를 이용하는 방법
  const arr1 = new Array();
  const arr2 = new Array(3);
  const arr3 = new Array('red', 'green', 'blue');

  console.log(arr1); // []
  console.log(arr2); // [empty × 3]
  console.log(arr3); // ['red', 'green', 'blue']
}

//--------------------------------------------------------------
// 배열 길이 체크, 설정하기 (length)
{
  const color = ['white', 'red', 'black', 'yellow'];

  // 배열의 길이 체크 (length)
  console.log(color.length); // 4

  // 배열의 길이 set
  color.length = 2;
  console.log(color.length); // 2
  console.log(color); // ['white', 'red']

  // 배열의 길이는 Array 인스턴스의 length 속성을 통해서 확인할 수 있습니다.
  // 또한, length 속성 값을 직접 설정하여, 배열의 길이를 조정할 수도 있습니다.
}