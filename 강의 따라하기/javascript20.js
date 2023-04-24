// for...of 는 ES6에 추가된 문법입니다.
// 이 반복문은 배열 또는 map객체 등 iterable 객체의 값들을 순회할 수 있습니다.

/*
for(variable of object)	{
  statement
}
object 는 iterable 객체입니다. (배열 또는 Map, Set, String 등)
variable은 iterable 객체에서 하나씩 뽑아온 값입니다.

for...of를 사용하면 배열의 인덱스는 알 수 없습니다.
인덱스를 알아야 한다면 다른 for 반복문을 사용해야 합니다.
*/

{
  // # 배열
  const arr = [1, 2, 3];

  for (element of arr) {
    console.log(element);
  }
  // 1
  // 2
  // 3
  // for...of 구문으로 문자열 객체를 순회하면, 문자열의 한 글자씩 가져옵니다.
}

{
  // 문자열
  const str = 'apple';

  for (element of str) {
    console.log(element);
  }
  // a
  // p
  // p
  // l
  // e
  // for...of 구문으로 문자열 객체를 순회하면, 문자열의 한 글자씩 가져옵니다.
}

{
  // Map()
  const map = new Map();
  map.set('key1', 'value1');
  map.set('key2', 'value2');

  for (element of map) {
    console.log(`${element[0]}, ${element[1]}`);
  }
  // key1, value1
  // key2, value2
  // for...of 구문으로 Map 객체를 순회하면 [key, value] 형태의 배열 객체를 하나씩 가져옵니다.
}

{
  // Set()
  const set = new Set();
  set.add('value1');
  set.add('value2');

  for (element of set) {
    console.log(element);
  }
  // value1
  // value2
  // for...of 구문으로 Set 객체를 순회하면, 각각의 값들을 하나씩 가져옵니다.
}