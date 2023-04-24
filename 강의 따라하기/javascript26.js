// 배열 자르기 - slice()
// arr.slice([begin[, end]])
//배열의 일부분을 잘라내어, 새로운 배열로 리턴하기 위해서는 slice() 함수를 사용합니다.

/* 
slice 함수는 잘라낼 배열의 시작index와 end index를 파라미터로 받아서,
그 사이의 원소들을 새로운 배열로 만들어서 리턴합니다.
이때 원본 배열인 arr은 변경되지 않습니다.

파라미터 
  begin
  잘라낼 배열의 시작 index

  end
  잘라낼 배열의 종료 index
  end index의 값은 잘라낼 배열에 포함되지 않습니다.
  end index가 생략되면, begin index부터 배열의 끝까지를 잘라냅니다.

리턴값 
  잘라낸 원소들로 만든 새로운 배열을 리턴합니다.
*/
{
  const arr = ['a', 'b', 'c', 'd'];
  const arr1 = arr.slice(1, 3); //['b', 'c']
  const arr2 = arr.slice(1); // ['b', 'c', 'd']
  const arr3 = arr.slice(-3, -1); // ['b', 'c'] 

  /*
  arr.slice(1, 3); 
    배열의 arr[1] ~ arr[3] 까지(arr[3]은 미포함)를 복사한, 새 배열을 리턴합니다.
  
  arr.slice(1); 
    두번째 파라미터인 end 값이 입력되지 않으면,
    시작 index부터 배열의 끝까지를 복사한, 새 배열을 리턴합니다.
  
  arr.slice(-3, -1); 
    begin index나 end index가 음수이면,
    배열의 끝에서부터의 길이를 나타냅니다.
  
    [-4] [-3] [-2] [-1]
      a    b    c    d
  */
}