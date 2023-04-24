// 문자열 숫자로 변환하기 (1) - parseInt()

/*
1. parseInt() 함수 사용
2. parseFloat() 함수 사용
3. +, * 연산자 사용
*/

// parseInt(string, radix);
/*
파라미터 
  string
  - 숫자로 변환할 문자열

  radix
   - optional
   - string 문자열을 읽을 진법(수의 진법 체계의 진법)
   - 2~36의 수

리턴 값 
string을 정수로 변환한 값을 리턴합니다.
만약, string의 첫 글자를 정수로 변경할 수 없으면 NaN(Not a Number) 값을 리턴합니다.
*/
{
  // 10진수 처리 
  document.writeln(parseInt("10")); // 10
  document.writeln(parseInt("-10")); // -10
  document.writeln(parseInt("10.9")); // 10
  document.writeln(parseInt(10)); // 10
  document.writeln(parseInt("10n")); // 10
  document.writeln(parseInt("10nnn13")); // 10
  document.writeln(parseInt("    10")); // 10
  document.writeln(parseInt("10      ")); // 10
  document.writeln(parseInt("k10")); // NaN
  document.writeln(parseInt("")); // NaN
  /*
  parseInt("10"); // 10
  문자열 "10"을 숫자로 변환하여 정수 10을 리턴합니다.

  parseInt("-10"); // -10
  문자열 "-10"을 숫자로 변환하여 정수 음수 -10을 리턴합니다.

  parseInt("10.9"); // 10
  문자열 타입의 실수값은 소수점을 제거한 후, 정수값만 리턴합니다.

  parseInt(10); // 10
  파라미터로 문자열이 아닌 다른 타입의 값이 전달되면, 
  파라미터를 문자열로 변환하여 처리합니다.

  parseInt("10n"); // 10
  parseInt("10nnn13"); // 10
  문자열의 첫글자가 숫자이고, 그 이후에 숫자가 아닌 다른 문자열이 나올 경우
  숫자가 아닌 문자 이후의 값은 무시하고,
  그 이전의 숫자만 정수로 변환합니다.

  parseInt("    10"); // 10
  문자열의 첫글자는 반드시 숫자여야 하지만, 처음에 오는 공백 문자는 허용됩니다.

  parseInt("10      "); // 10
  문자열의 첫글자가 숫자이면, 뒤에 오는 공백은 무시됩니다.

  parseInt("k10"); // NaN
  문자열의 첫글자가 숫자가 아니면, NaN(Not a Number)를 리턴합니다.

  parseInt(""); // NaN
  문자열에 공백이 입력되면, 문자열의 첫 글자가 숫자가 아니므로, NaN(Not a Number)를 리턴합니다.
  */
}

{
  // 2진법, 16진법 등 다른 진법 처리 
  document.writeln(parseInt("10", 2)); // 2
  document.writeln(parseInt("2", 2)); // NaN
  document.writeln(parseInt("0xF")); // 15
  document.writeln(parseInt("0XF")); // 15
  document.writeln(parseInt("0XFkk")); // 15

  /*
  parseInt("10", 2); // 2
  파라미터 "10"을 2진법으로 읽어서, 10진법으로 변환한 값을 리턴하였습니다.

  parseInt("2", 2); // NaN
  두 번째 파라미터로 2가 입력되었으므로, 첫 번째 파라미터인 "2"를 2진법으로 읽어야 하는데,
  2진법에서는 2라는 숫자가 없으므로 NaN을 리턴하였습니다.

  parseInt("0xF"); // 15
  parseInt("0XF") // 15
  두번째 파라미터로 16진법을 의미하는 16을 입력하지 않아도, 
  첫 번째 파라미터인 문자열이 '0x' 또는 '0X'로 시작한다면
  자동으로 문자열을 16진수로 읽어서, 10진수로 변환한 값을 리턴합니다.

  parseInt("0XFkk"); // 15
  16진수에서 숫자는 0~F의 범위입니다.
  16진수로 읽어들인 문자열에 'k'라는 범위 밖의 값이 붙어 있으면
  'k'라는 문자는 무시됩니다.

  ※ parseInt() 사용 시 두 번째 파라미터를 입력하지 않아도,
  첫 번째 문자열 파라미터의 값에 따라 자동으로 진법을 구분하기도 합니다.
  따라서, 특정 값에 따른 오류를 방지하기 위해
  두 번째 파라미터인 radix 값을 반드시 입력해 주는 것이 좋습니다.
  */
}

//---------------------------------------------------------------------------

// 문자열 숫자로 변환하기 (2) - parseFloat()

// parseFloat(string)
/*
파라미터 
  변환할 문자열

리턴 값 
  파라미터로 입력받은 문자열을 실수로 변환 한 값을 리턴합니다.
  파라미터로 입력받은 문자열을 실수로 변환할 수 없는 경우에는 NaN (Not a Number) 값을 리턴합니다.
  
  첫 글자가 숫자로 변환할 수 있는 값(숫자(0~9), 기호(+, -), 소수점(.), 지수)이 아닌 경우, NaN을 리턴합니다.

  첫 글자 이후에 숫자로 변환할 수 없는 값이 오는 경우, 그 이후 값들은 무시합니다.
*/
{
  document.writeln(parseFloat("10")); // 10
  document.writeln(parseFloat("-10")); // -10
  document.writeln(parseFloat("10.9")); // 10.9
  document.writeln(parseFloat(10.9)); // 10.9
  document.writeln(parseFloat("10.9abcd")); // 10.9
  document.writeln(parseFloat("10.9abcd55")); // 10.9
  document.writeln(parseFloat("abcd10.9")); // NaN
  document.writeln(parseFloat("    10.9")); // 10.9
  document.writeln(parseFloat("10.9   ")); // 10.9
  document.writeln(parseFloat("")); // NaN

  /*
  parseFloat("10"); // 10
  입력받은 문자열에 소수점이하 자리가 없으므로, 그대로 정수 10을 리턴합니다.

  parseFloat("-10"); // -10
  음수 값도 변환할 수 있습니다.

  parseFloat("10.9"); // 10.9
  문자열을 실수로 변환하여 실수를 리턴하였습니다.

  parseFloat(10.9); // 10.9
  파라미터로 문자열이 전달되지 않고, 다른 타입의 값이 전달되면
  전달된 파라미터를 문자열로 변환한 후, 실수로 변환하여 그 값을 리턴합니다.

  parseFloat("10.9abcd"); // 10.9
  첫 글자 이후에 숫자로 변환할 수 없는 값이 오는 경우, 그 이후 값들은 무시합니다.
  'abcd'는 숫자로 변환할 수 있는 값이 아니고, 첫 글자가 아니므로 무시됩니다.

  parseFloat("10.9abcd55"); // 10.9
  첫 글자 이후에 숫자로 변환할 수 없는 값이 오는 경우, 그 이후 값들은 무시합니다.
  10.9까지만 숫자로 변환할 수 있고, abcd는 숫자로 변환할 수 없습니다.
  55는 숫자로 변환할 수 있지만, abcd(숫자로 변환할 수 없는 값) 이후에 있으므로 무시됩니다.

  parseFloat("abcd10.9"); // NaN
  첫 글자가 숫자로 변환할 수 있는 값(숫자(0~9), 기호(+, -), 소수점(.), 지수)이 아닌 경우, NaN을 리턴합니다.

  parseFloat("    10.9"); // 10.9
  첫 글자가 공백인 경우에, 공백은 무시됩니다.

  parseFloat("10.9   "); // 10.9
  첫 글자 이후에 숫자로 변환할 수 없는 값이 오는 경우, 그 이후 값들은 무시합니다.
  공백도 숫자로 변환할 수 없는 글자이므로, 무시됩니다.

  parseFloat(""); // NaN
  공백 문자만 입력된 경우, 변환할 수 있는 숫자가 없으므로 NaN을 리턴합니다.
  */
}

//------------------------------------------------------------------------

// 문자열 숫자로 변환하기 (3) - +, * 연산자 사용

// "+" 단항 연산자 사용하기 (Unary plus)
// 문자열 앞에 단항 연산자 (+)를 붙여주면, 문자열을 숫자 타입으로 변환하여 리턴합니다.
// 만약, 문자열을 숫자로 변경할 수 없다면 NaN (Not a Number)를 리턴합니다.
{
  document.writeln(+"10"); // 10
  document.writeln(+"10.1"); // 10.1
  document.writeln(+"-10"); // -10
  document.writeln(+"abc"); // NaN
  document.writeln(+true); // 1
  document.writeln(+false); // 0

  /*
  +"10"
  정수 10을 리턴합니다.

  +"10.1"
  실수 10.1을 리턴합니다.

  +"-10"
  음수도 처리할 수 있습니다.

  +"abc"
  숫자로 변경할 수 없는 문자열이기 때문에, NaN을 리턴합니다.

  +true
  +false
  boolean 값은 true인 경우 1, false인 경우 0을 리턴합니다.
  */
}

//곱하기(*) 연산자 
// 숫자로 변환할 문자열에 "곱하기 1" 을 해주면 문자열이 숫자로 변환됩니다.
// 만약, 문자열을 숫자로 변경할 수 없다면 NaN (Not a Number)를 리턴합니다.
{
  document.writeln("10" * 1); // 10
  document.writeln("10.1" * 1); // 10.1
  document.writeln("-10" * 1); // -10
  document.writeln("abc" * 1); // NaN
  /*
  "10" * 1
  정수 10을 리턴합니다.

  "10.1" * 1
  실수 10.1을 리턴합니다.
  
  "-10" * 1
  음수도 처리할 수 있습니다.
  
  "abc" * 1
  숫자로 변경할 수 없는 문자열이기 때문에, NaN을 리턴합니다.
  */
}