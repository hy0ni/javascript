// 배열 중간에 값 추가, 삭제하기 - splice() 함수

// splice() 함수를 사용하여,
// 배열의 중간에 원소를 추가 삭제하는 방법을 알아보도록 하겠습니다.
// 물론, 이 방법으로 배열의 맨 앞과 끝에 원소를 추가, 삭제 할 수도 있습니다.

/*
# splice() 
  array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

  description 
    splice() 함수는 start, deleteCount, items원소 목록을 파라미터로 입력 받습니다.
    splice() 함수는 start index부터 deleteCount만큼의 원소를 삭제하고,
    뒤 이어 오는 items를 start index 위치에 추가합니다.

  파라미터 
    start
    변경을 시작할 배열의 시작 index

  deleteCount
    start index부터 deleteCount 갯수만큼 원소를 삭제합니다.
    deleteCount가 입력되지 않으면, start index 이후의 모든 값이 삭제됩니다.

  items
    배열의 start index에 item들을 추가합니다.

  리턴값 
    삭제된 원소(element)의 배열을 리턴합니다.
*/

{
  const array = ['a', 1, 'd', 'c'];
  array.splice(1, 1, 'b', 'c'); // index 1부터, 1개 원소 삭제, index 1부터 2개 원소 'b','c' 추가 

  // [0]a [1]1 [2]d [3]e

  // index 1부터, 1개 원소 삭제
  // [0]a [2]d [3]e

  // index 1부터 2개 원소 'b','c' 추가 
  // [0]a [1]b [2]c [3]d [4]e

  console.log(array) // ['a', 'b', 'c', 'd', 'c']
}


// 배열의 앞, 중간, 뒤에 값 추가하기 
{
  // 앞에 추가 [ 'a', 'b', 1, 2, 3]
  const arr1 = [1, 2, 3];
  arr1.splice(0, 0, 'a', 'b');
  console.log(arr1);

  // 뒤에 추가 [1, 2, 3, 4, 5]
  const arr2 = [1, 2, 3];
  arr2.splice(arr2.length, 0, 4, 5);
  console.log(arr2)

  // 중간에 추가 [1, 'a', 'b', 2, 3]
  const arr3 = [1, 2, 3];
  arr3.splice(1, 0, 'a', 'b');
  console.log(arr3)
}

// 배열의 앞, 중간, 뒤의 값 삭제하기 
{
  // 앞에서 2개 원소 삭제
  const arr1 = ['a', 'b', 1, 2, 3];
  arr1.splice(0, 2);
  console.log(arr1); // [1, 2, 3]
  // 중간(idnex 1) 2개 원소 삭제
  const arr2 = [1, 'a', 'b', 2, 3];
  arr2.splice(1, 2)
  console.log(arr2); // [1, 2, 3]

  // 마지막 원소 삭제
  const arr3 = [1, 2, 3, 'a'];
  arr3.splice(arr3.length - 1, 1)
  console.log(arr3); // [1, 2, 3]
}
console.clear()

// 전체 또는 특정 인덱스 이후의 모든 원소 삭제 
{
  // 전체 원소 삭제
  const arr1 = [1, 2, 3];
  arr1.splice(0);
  // 배열 전체의 원소를 삭제하고 싶으면
  // 첫번째 파라미터(start index)를 0으로 지정하고, 나머지 파라미터는 입력하지 않습니다.
  console.log(arr1); // []

  // index 1 이후의 모든 원소 삭제
  const arr2 = [1, 2, 3];
  arr2.splice(1)
  //특정 index 이후의 원소를 삭제하고 싶으면
  // 첫번째 파라미터(start index)를 삭제할 특정 index를 지정하고, 나머지 파라미터는 입력하지 않습니다.
  // 이 예제는 index 1 이후의 모든 원소를 삭제합니다.
  console.log(arr2); // [1]

}

// 삭제와 추가 동시에 하기
{
  //[a, b, c, d, e]
  const arr = ['a', 1, 'd', 'e'];
  arr.splice(1, 1, 'b', 'c');

  console.log(arr)
}

// 값 변경하기
{
  // a,b,c,d
  const arr = ['a', 1, 'c', 'd'];
  arr.splice(1, 1, 'b');
  // 하나의 값을 삭제하고, 그 위치에 새로운 값을 추가하여 마치 값을 변경한 것과 같은 효과를 만들었습니다.
  console.log(arr)
}