// 배열의 앞과 뒤에 값을 추가하는 방법, 삭제하는 방법

// 배열 값 추가, 삭제하기 (앞, 뒤, 중간)
/*
배열의 맨 앞에 값 추가 : unshift()
배열의 맨 앞 값 제거 : shift()
배열의 맨 뒤에 값 추가 : push()
배열의 맨 뒤 값 제거 : pop()
배열의 중간에 값 추가, 삭제 : splice()
*/
//--------------------------------------------------------------
/*
# unshift()
  arr.unshift([...elementN])
  배열의 맨 앞에 파라미터로 전달 받은 element들을 추가합니다.

  파라미터
    배열의 앞 부분에 추가할 elements

  리턴 값
    파라미터로 전달된 elements가 추가 된, 새로운 배열의 길이를 리턴합니다.
*/
{
  const arr = ['apple', 'banana'];
  const length = arr.unshift('orange');
  console.log(length); // 3
  console.log(arr); // ['orange', 'apple', 'banana']
  // unshift() 메소드를 이용하여, 배열의 맨 앞에 'orange' element를 추가하였습니다.
  // unshift() 메소드는 새로운 배열의 길이인 3을 리턴하고,
  // arr는 ['orange', 'apple', 'banana'] 값을 가지게 되었습니다.
}
{
  const arr = ['apple', 'banana'];
  const length = arr.unshift('orange', 'grape');

  console.log(length); // 4
  console.log(arr); // ['orange', 'grape', 'apple', 'banana']
  // unshift() 메소드를 이용하여 배열의 맨 앞에 element를 여러개 추가 할 수도 있습니다.
}
//--------------------------------------------------------------
/*
# shift()
  arr.shift()
  shift() 메소드는 배열의 가장 첫 element를 삭제하고, 삭제한 element를 리턴합니다.

  파라미터
    없음

  리턴값
    삭제한 element
*/
{
  // apple 삭제
  const arr = ['apple', 'banana'];
  let removed = arr.shift();
  console.log(removed); // apple
  console.log(arr); // ['banana']

  // banana 삭제
  removed = arr.shift();
  console.log(removed); // banana
  console.log(arr); // []

  // 삭제할 원소 없음
  removed = arr.shift();
  console.log(removed); // undefined
  console.log(arr); // []
}

//--------------------------------------------------------------
/*
# push
  arr.push(element1[, ...[, elementN]])
  push() 메소드는 배열의 맨 끝에 새로운 element를 추가합니다.

  파라미터
    배열의 맨 뒷 부분에 추가할 elements

  리턴 값
    파라미터로 전달된 elements가 추가 된, 새로운 배열의 길이를 리턴합니다.
*/
{
  const arr = ['apple', 'banana'];
  const length = arr.push('orange');

  console.log(length); // 3
  console.log(arr); // [apple', 'banana', 'orange']
  // arr 배열의 가장 뒤에 'orange' 원소를 추가하였습니다.
  // push() 메소드는 새로운 배열의 길이인 3을 리턴하고,
  // arr는['apple', 'banana', 'orange'] 값을 가지게 되었습니다.
}
{
  const arr = ['apple', 'banana'];
  const length = arr.push('orange', 'tomato');

  document.writeln(length); // 4
  document.writeln(arr); // ['apple', 'banana', 'orange', 'tomato']
  // 파라미터를 여러개 전달하여, 배열의 맨 마지막에 여러개의 원소를 추가할 수도 있습니다.
}
//--------------------------------------------------------------
/*
# pop()
  arr.pop()
  pop() 메소드는 배열의 가장 뒤 element를 삭제하고, 삭제한 element를 리턴합니다.

  파라미터
    없음

  리턴값
    삭제한 element
*/
{
  // banana 삭제
  const arr = ['apple', 'banana'];
  let removed = arr.pop();
  console.log(removed); // banana
  console.log(arr); // ['apple']

  // apple 삭제
  removed = arr.pop();
  console.log(removed); // apple
  console.log(arr); // []

  // 삭제할 원소 없음
  removed = arr.pop();
  console.log(removed); // undefined
  console.log(arr); // []

}

