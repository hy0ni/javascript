// 배열 특정 값 위치(index) 찾기 - findIndex()

/*
1. findIndex() 함수 소개
arr.findIndex(callback( element[, index[, array]] )[, thisArg])

findIndex() 함수는 
배열에서 값을 찾는 조건을 callback 함수로 전달하고,
배열에서 조건에 맞는 값의 '첫번째 index'를 리턴하는 함수입니다.

파라미터 
callback(element, index, array) 함수
조건을 비교할 callback 함수이고, 다음 3개의 파라미터가 전달됩니다.
callback 함수에서 사용자가 테스트할 조건을 정의하고,
만약 배열의 값이 조건에 부합하면 true를 리턴하면,
해당 배열의 index가 findIndex()의 리턴값이 됩니다.
조건에 부합하는 값을 찾으면, 그 이후의 배열값은 테스트 되지 않습니다.

element : 현재 처리중인 배열의 element입니다.
index : 현재 처리중인 배열의 index입니다. (optional)
array : findIndex가 호출된 배열입니다. (optional)

thisArg (optional)
callback을 실행할 때 this로 사용할 객체입니다.

리턴값 
callback 함수에 정의한 조건에 부합하는 배열의 첫번째 index를 리턴합니다.
조건에 부합하는 배열 값이 없을 경우 -1을 리턴합니다.
*/

// 2. findIndex() 함수 예제
{ // 숫자 찾기
  const arr = [1, 1, '1', 1];

  function findNumberOne(element) {
    if (element === 1) return true;
  }

  console.log(arr.findIndex(findNumberOne)); // 0

  // callback 함수로는 배열의 값(element)들이 순서대로 전달되고,
  // 그 값이 1이면 true를 리턴합니다.
  // findIndex() 함수는 callback함수가 true를 리턴하면,
  // 해당 배열의 index를 리턴합니다.
}

{ // 짝수 찾기
  const arr = [1, 2, 3, 4];

  function findEvenNumber(element) {
    if (element % 2 === 0) return true;
  }
  console.log(arr.findIndex(findEvenNumber)); // 1

  // callback 함수 안에 다양한 조건들을 넣을 수 있습니다.
  // 여기서는 callback 함수에 element가 짝수인 index를 찾기 위한 조건을 넣었습니다.
}

{ // 객체 찾기
  const arr = [
    { name: 'banana', price: 1000 },
    { name: 'apple', price: 1500 },
    { name: 'orange', price: 2000 }
  ];

  function findApple(element) {
    if (element.name === 'apple') return true;
  }
  console.log(arr.findIndex(findApple)); // 1

  // findIndex() 함수는 객체를 비교하는 데 유용합니다.
  // 배열의 element가 primitive type이 아닌 객체인 경우,
  // 객체를 찾기 위한 조건을 callback 함수에 구현할 수 있습니다.
}


/* 3. indexOf(), lastIndexOf() 함수와 findIndex()의 차이점

indexOf(), lastIndexOf() 함수는 
primitive type 비교에 적합합니다.
indexOf(), lastIndexOf() 함수는 파라미터로 primitive type을 받고,
이 값이 배열에 존재하는지를 '===' 연산자를 사용하여 비교합니다.

findIndex() 함수는 
파라미터로 사용자가 정의할 수 있는 callback 함수를 받기때문에,
object type 비교에 적합하고,
indexOf() 함수보다 더 다양한 조건을 정의할 수 있습니다.
위의 예제에서도 단순한 값의 비교 뿐만 아니라, 
홀수값 찾기, 객체 비교 등을 한 것을 확인 할 수 있습니다.
*/