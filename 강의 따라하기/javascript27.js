// 배열 같은 값으로 채우기 - fill()
// arr.fill(value[, start[, end]])
/*
arr.fill('A', 1 , 3)
[0][1][2][3]
 a  A  A  d

fill() 함수는 
  배열의 start index부터 end index 전까지(end index는 미포함) value값으로 채워주는 함수입니다.

파라미터 
value
  배열에 채울 값을 지정합니다.  

start
  value 값을 채울 배열의 시작 index입니다.
  입력하지 않으면 기본값은 0입니다.

end
  value 값을 채울 배열의 종료 index입니다.
  입력하지 않으면 기본값은 배열의 길이(arr.length)입니다.

리턴값 
  지정한 값으로 채워진 배열을 리턴합니다.
*/

{
  const arr1 = ['a', 'b', 'c', 'd'];
  arr1.fill('A');
  console.log(arr1); // A,A,A,A

  const arr2 = ['a', 'b', 'c', 'd'];
  arr2.fill('A', 1);
  console.log(arr2); // a,A,A,A

  const arr3 = ['a', 'b', 'c', 'd'];
  arr3.fill('A', 1, 3);
  console.log(arr3); // a,A,A,d
}

{
  // index가 음수일 때 
  //a,A,A,d
  const arr = ['a', 'b', 'c', 'd'];
  arr.fill('A', -3, -1);
  console.log(arr)
}

{
  // 배열 초기화
  const arr = new Array(4).fill('A');
  console.log(arr);
  /*
  fill() 함수를 배열을 초기화 하는데 사용하면 유용합니다.
  new Array() 구문을 사용하여 배열을 생성하면,
  4개의 element를 가지는 배열이 생성되고,
  각 element의 값은 undefined입니다.
  여기에 fill() 함수를 사용하면, 생성된 배열의 element의 초기값을 지정할 수 있습니다.
  */
}