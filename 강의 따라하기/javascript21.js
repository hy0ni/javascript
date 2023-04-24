// 1부터 100까지의 합 계산하기 (for문)
{
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    sum = sum + i;
  }
  console.log(sum); // 5050

  // for문을 사용하여 index인 i값이 증가할 때마다 sum에 i값을 더해 주고 있습니다.
  // for문에서 index 값이 1부터 시작되고, index값인 i가 100이 될때까지 for문은 실행됩니다.
  // i값이 101이 되면 for문은 종료됩니다.
}

{
  // '+=' 연산자 사용 
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    sum += i;
  }
  console.log(sum); // 5050

  // sum += i;
  // sum = sum + i;
  // 두 구문은 동일하게 작동합니다.
}