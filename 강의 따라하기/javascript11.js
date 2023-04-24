// 문자열 거꾸로 뒤집기
{
  const str = '사과 바나나 포도'
  document.writeln(str);

  const step1 = str.split(' ');
  console.log(step1)
  // split() 함수를 사용하여 문자열을 배열로 바꾸었습니다.

  const step2 = step1.reverse();
  console.log(step2)
  // reverse() 함수를 사용하여 배열을 거꾸로 뒤집었습니다.

  const step3 = step2.join(',');
  // 뒤집어진 배열을 join() 함수를 사용하여 이어 붙여서
  console.log(step3)
  // 거꾸로 뒤집힌 문자열을 만들었습니다.

  // ['사과', '바나나', '포도']
  // ['포도', '바나나', '사과']
  // 포도,바나나,사과

}

{
  // 중간 변수를 사용하지 않고 코드를 간결하게
  const str = '사과 바나나 포도';

  const newStr =
    str.split(' ').reverse().join(',');
  console.log(newStr);
  // 포도,바나나,사과
}


//---------------------------------------------------------------------

// 숫자 콤마 제거 하는 2가지 방법
// 1. replace() 함수 사용하기
// 2. split(), join() 함수 사용하기


// # replace() 함수 사용하기
{
  const numberStr = "123,456,789";

  // 콤마 제거
  const number = numberStr.replace(",", "");
  document.write(number); // 123456,789
  /*
  숫자 문자열의 콤마를 제거하기 위해서 replace() 함수를 사용하였습니다.
  replace() 함수는 2개의 파라미터를 입력받고,
  문자열에서 첫번째 파라미터(여기서는 ",")를 두번째 파라미터(여기서는 "")로 치환해 줍니다.
  그런데, 결과를 보니 모든 콤마가 제거 된 것 같지는 않네요.
  replace() 함수는 첫번째로 첫번째로 발견한 값만 치환해 주기 때문입니다.
  그래서, 문자열 전체에서 모든값(첫번째 파라미터와 일치하는)을 치환해 주기 위해서는
  반복문을 사용하거나 정규식을 사용해야 합니다.
  */
}
{
  const numberStr = "123,456,789";

  // 전체 콤마 제거
  const number = numberStr.replace(/,/g, "");
  document.write(number);
  /*
  replace()의 첫번째 파라미터로 일반 문자열 대신 정규식을 넣어주었습니다.
  /,/g
  이 정규식은 매우 간단한 정규식입니다.
  정규식은 '/'로 감싸서 작성합니다.
  즉, '/,/'은 단순히 ','(콤마)를 찾는 정규식입니다.
  그리고, 뒤에 붙은 'g'는 문자열 전체에서 콤마를 찾도록 해주는 플래그 입니다.
  (정규식의 'g'를 한번 삭제하고 실행해 보세요. 그러면, 이전 예제와 같이 첫번째 콤마만 삭제됩니다.)
  */
}

// # split(), join() 함수 사용하기
{
  const numberStr = "123,456,789";

  // 전체 콤마 제거
  const number = numberStr.split(',').join("");
  document.write(number)
  /*
  일반적으로 첫번째 예제인 replace() 함수와 정규식을 많이 사용하지만
  split()과 join() 함수를 사용해서 콤마를 제거할 수도 있습니다.

  split()
  split() 함수는 문자열을 첫번째 파라미터(여기서는 ',')로 잘라서 배열로 반환하는 함수입니다.
  위 예제에서는 ["123", "456", "789"] 를 리턴합니다.

  join()
  join() 함수는 배열의 모든 요소를 연결해 하나의 문자열로 만들어 줍니다.
  split() 함수가 리턴한 값이 ["123", "456", "789"] 이니까
  이 배열의 문자열을 모두 연결하면, "123456789"가 됩니다.
  */
}

//------------------------------------------------------------------------
//
{
  const str1 = "apple, banana";
  const str2 = "apple, banana,";
  const str3 = "apple, banana,    ";
  // str1과 같이 문자열의 끝에 콤마가 없을 경우, 문자열을 그대로 유지하고,
  // str2와 같이 문자열의 끝에 콤마가 있을 경우, 문자열에서 콤마를 제거하고,
  // str3과 같이 문자열의 끝에 콤마가 있고, 빈 공백이 이어진 경우, 문자열에서 콤마를 제거하는 방법을 소개합니다.

  {
    const str1 = "apple, banana";
    const str2 = "apple, banana,";
    const str3 = "apple, banana,    ";

    const rslt1 = str1.replace(/,\s*$/, "");
    const rslt2 = str2.replace(/,\s*$/, "");
    const rslt3 = str3.replace(/,\s*$/, "");

    document.write(rslt1);
    document.write("<br />");
    document.write(rslt2);
    document.write("<br />");
    document.write(rslt3);

    /*
    str1.replace(/,\s*$/, "");
      마지막 콤마를 삭제하기 위해서 replace 함수와 정규식을 사용하였습니다.
  
    replace() 함수 
      replace() 함수는,  문자열(str1)에서 첫번째 파라미터 값을 찾아서, 두번째 파라미터 값으로 변환합니다.
      단, 이때 첫번째로 찾은 값만 변환해줍니다.
      위 예제에서는 str1에서 정규식(/,\s*$/)에 해당하는 값을 찾아서, 빈 공백("")으로 변환해 줍니다.
  
  
    정규식(/,\s*$/) 
      /  : 정규식 전체를 둘러싸고 있는 '/'는 정규식의 시작과 끝을 표시합니다.
      , : 우리가 찾고 있는 콤마(,) 문자입니다.
      \s : space 나 tab과 같은 공백을 나타냅니다. 여기서는 str3의 예제와 같이 콤마뒤에 이어지는 공백을 찾습니다.
      * : 0번 이상을 의미합니다. 여기서는 공백이 0번 이상 나타남을 의미합니다.
      $ : 문자열의 끝을 의미합니다.
      즉, 위 정규식은 문자열의 끝에서 콤마와 0번이상의 공백이 있는 경우를 찾게 됩니다.
  
      그리고, replace() 함수는 정규식에서 찾은 '콤마와 0번 이상의 공백'을 ""(비어있는 문자열)로 치환합니다.
    */
  }
}