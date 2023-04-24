// 배열 특정 값 위치(index) 찾기 - indexOf(), lastIndexOf()

// # indexOf()
/*
arr.indexOf('a', 1); // 2
[0][1][2][3]
'a''b''a''d'
검색방향 --->

arr.indexOf(searchElement[, fromIndex])
배열 안에서 찾으려는 값(searchElement)과 정확하게 일치(===)하는
'첫번째' element의 index를 리턴합니다.
만약, 찾으려는 값이 배열에 없으면 -1을 리턴합니다.
fromIndex를 파라미터로 전달하면, fromIndex부터 값을 찾습니다.

파라미터
searchElement
  찾으려는 값

fromIndex
  검색을 시작할 index
  입력하지 않으면 0부터 검색을 시작합니다.

리턴값
  배열에서 searchElement와 값이 정확하게 일치하는 첫번째 index를 리턴합니다.
  찾으려는 값이 배열에 없으면 -1을 리턴합니다.
*/


// # lastIndexOf() 
/* 
arr.lastIndexOf('a', 2); // 1
[0][1][2][3]
'a''a''b''a'
<--- 검색방향

arr.lastIndexOf(searchElement[, fromIndex])
배열 안에서 찾으려는 값(searchElement)과 정확하게 일치(===)하는 '마지막' element의 index를 리턴합니다.
만약, 찾으려는 값이 배열에 없으면 -1을 리턴합니다.
fromIndex를 파라미터로 전달하면,
fromIndex부터 역방향으로(index값을 줄여나가면서) searchElement와 같은 값을 찾아서
첫번째로 같은 값을 가지는 index를 리턴합니다.
fromIndex값이 입력되지 않으면, 기본값은 (배열의 길이-1) 입니다.
즉, fromIndex값을 입력하지 않으면, lastIndexOf 함수는 배열의 끝에서부터 역방향으로 배열을 탐색하여
searchElement와 같은 값을 가지는 최초의 index값을 리턴하는 것입니다.

파라미터 
searchElement
  찾으려는 값

fromIndex
  검색을 시작할 index
  입력하지 않으면 arr.length-1 index부터 검색을 시작합니다.

리턴값 
  배열에서 searchElement와 값이 정확하게 일치하는 마지막 index를 리턴합니다.
  찾으려는 값이 배열에 없으면 -1을 리턴합니다.
*/
{
  const arr = [1, 1, '1', 1];

  console.log(arr.indexOf(1)); // 0
  console.log(arr.indexOf('1')); // 2
  console.log(arr.indexOf(1, 1)); // 1
  console.log(arr.indexOf(0)); // -1

  console.log(arr.lastIndexOf(1)); // 3
  console.log(arr.lastIndexOf('1')); // 2
  console.log(arr.lastIndexOf(1, 1)); // 1
  console.log(arr.lastIndexOf(0)); // -1

  /*
[ indexOf 예제 ]
arr.indexOf(1);  // 0
  배열에서 값이 1인 최초의 index는 0 입니다.

arr.indexOf('1');  // 2
  배열에서 값이 '1'인 최초의 index는 2입니다.
  indexOf는 === 연산자를 사용하여 비교하기 때문에, 타입과 값이 모두 같아야 같은 값으로 처리합니다.

arr.indexOf(1, 1);   // 1
  index 1 이후에 나오는, 값이 1인 최초의 index는 1입니다.

arr.indexOf(0);  // -1
  배열은 0 값을 가지고 있지 않기 때문에, -1을 리턴합니다.


[ lastIndexOf 예제 ] 

arr.lastIndexOf(1); // 3
  배열의 뒤에서부터 탐색하였을 때, 1값을 가지는 최초의 index는 3입니다.

arr.lastIndexOf('1');  // 2
  배열에서 값이 '1'인 마지막 index는 2입니다.
  indexOf는 === 연산자를 사용하여 비교하기 때문에, 타입과 값이 모두 같아야 같은 값으로 처리합니다.

arr.lastIndexOf(1, 1);  // 1
  index 1부터 역방향으로 배열을 탐색을 합니다.
  역방향으로 탐색을 했을 때, searchElement와 값이 같은 최초의 index는 1입니다.

arr.lastIndexOf(0);  // -1
  배열이 0값을 가지고 있지 않으므로 -1을 리턴합니다.
  */
}

// indexOf() 함수를 활용하여 특정 값이 있는 모든 위치(index) 찾기
{
  const arr = [1, 1, '1', 1];
  let fromIndex = arr.indexOf(1);
  while (fromIndex != -1) {
    console.log('fromIndex: ', fromIndex);
    fromIndex = arr.indexOf(1, fromIndex + 1);
  }
  /*
  indexOf() 함수는 배열에서 특정값의 첫번째 index만 리턴합니다.
  따라서 indexOf() 함수로 배열에 있는 특정값의 모든 index를 구하려면,
  위와 같이 반복문을 사용해야 합니다.
  
  위 코드는, 
  특정값이 존재하는 모든 index를 찾기 위해서
  indexOf 함수의 두번째 파라미터로 검색을 시작할 index를 지정할 수 있다는 점,
  만약 배열에 특정값이 존재하지 않으면 -1을 리턴한다는 특징을 활용하였습니다.
  
  위 코드는,
  indexOf의 결과가 -1이 될때까지,
  fromIndex값을 이전에 찾아낸 index값 이후로 설정해주면서
  특정값이 있는 모든 index를 찾아내고 있습니다.
  */
}
