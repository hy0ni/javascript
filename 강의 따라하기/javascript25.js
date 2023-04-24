// 배열 합치기 3가지 방법
/*
1. concat() 함수
2. ... spread operator (전개 연산자) 
3. push() 함수와 spread operator
*/

// 1. concat() 함수 
/**
array.concat([value1[, value2[, ...[, valueN]]]])
concat() 함수는
파라미터로 받은 배열이나 값들을 기존의 배열에 합쳐서, 
새로운 배열을 만들어서 리턴합니다.

파라미터 
  value1~valueN
  기존 배열에 합칠 배열 또는 값

리턴값 
  기존 배열(array)와 파라미터로 받은 값(value1~valuneN)을 합쳐서 새로 만든 배열
*/
{
  const arr = [1, 2, 3];
  const newArr = arr.concat('a', ['b', 'c'], 'abc');

  console.log(arr); // [1, 2, 3]
  console.log(newArr.length); // 7
  console.log(newArr); // [1, 2, 3, 'a', 'b','c', 'abc']

  /*
  const newArr = arr.concat('a', ['b', 'c'], 'abc'); 
  arr.concat()에 3개의 파라미터를 전달하여
  3개의 값을 가진 배열 arr와 파라미터를 합쳤습니다.
  arr : [1, 2, 3]
  첫번째 : 'a'
  두번째 : ['b', 'c']
  세번째 : 'abc'
  
  concat() 함수는 arr와 전달받은 파라미터들을 합쳐서 
  "새로운 배열"을 생성하여 리턴합니다.
  이 때, 파라미터가 배열인 경우, 배열 안의 원소들을 꺼내여 새로운 배열에 포함시킵니다.
  그래서, 새로운 배열(newArr)의 길이는 6이 아닌 7이 됩니다.
  원본인 arr의 값은 변하지 않습니다.
  */
}

// 2. ... spread operator (전개연산자) 
/*
ES6에서 제공하는 spread operator(...)를 사용하여 배열을 이어 붙일 수 있습니다.

spread operator(...) 
spread operator는 한글로 전개 연산자라고도 합니다.
spread operator는 배열과 객체 등 여러 곳에서 사용할 수 있지만,
여기서는 배열에서 사용하는 방법만 간단히 설명합니다.
*/
{
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [7, 8, 9];

  const newArr = [
    ...arr1,
    ...arr2,
    ...arr3,
  ];

  console.log(newArr.length); // 9
  console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  /*
  위의 예제에서 '...' 기호는 spread operator(전개연산자) 입니다.
  
  ...arr1, ...arr2, ...arr3
  spread operator ... 은 arr1의 원소들을 쪼개어 개별요소인 1, 2, 3을 리턴합니다.
  ...arr2는 개별요소인 4, 5, 6을 리턴합니다.
  ...arr3은 개별요소인 7, 8, 9를 리턴합니다.
  
  newArr는
  이렇게 쪼개진 개별 요소들을 인자로 가지는 새로운 배열입니다.
  */
}

// 3. push() 함수와 spread operator 
// spread operator를 사용하면 push() 함수를 이용해서도 여러 개의 배열을 하나로 합칠 수 있습니다.
{
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];

  arr1.push(arr2);
  console.log(arr1); // [1, 2, 3, Array(3)]
  console.log(arr1[0]); // 1
  console.log(arr1[1]); // 2
  console.log(arr1[2]); // 3
  console.log(arr1[3]); // [4,5,6]
  /*
  push() 함수를 사용하여 배열을 합치면
  파라미터로 전달 된 배열을 하나의 원소로 처리합니다.
  따라서, 위 예제에서 파라미터로 전달 된 배열은 arr1의 4번째 원소가 됩니다.
  그러므로, arr1의 길이는 6이 아니라 4가 됩니다.
  push() 함수를 사용하여, 두 여러개의 배열을 합칠 때, 
  concat() 함수를 사용한 것과 같이
  파라미터로 전달 된 배열의 원소 각각을 새로운 배열에 넣어서 합치기 위해서는
  spread operator(...)를 사용해야 합니다.
  */
  {
    // push() 함수와 spread operator(...)로 배열 합치기 
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    arr1.push(...arr2);
    console.log(arr1.length); // 6
    
  }
}