// 반복문(1) - for
/*
for (초기화; 조건식; 증감문) {
  // 반복할 코드
}
초기화 - for문이 실행되기 전 1번만 수행됩니다.
조건식 - for문이 실행되기 위한 조건입니다. 이 조건문의 결과가 true이면 for문 안의 코드는 계속 실행됩니다.
증감문 - for문 안의 코드가 실행 된 후, 매번 수행되는 코드입니다.
*/

for (let i = 0; i < 5; i++) {
  console.log(`${i + 1}번째 반복문`)
}
// 1번째 반복문
// 2번째 반복문
// 3번째 반복문
// 4번째 반복문
// 5번째 반복문

const colors = ['red', 'green', 'yellow'];
for (let i = 0; i < colors.length; i++) {
  console.log(`${colors[i]}`)
}
// red
// green
// yellow

colors.forEach((el) => {
  return console.log('forEach =>', el)
})
// forEach => red
// forEach => green
// forEach => yellow

// for문 이용한 별찍기
// *****
// *****
// *****
// *****
// *****
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    document.write(`*`)
  }
  document.write('<br>')
}

// *
// **
// ***
// ****
// *****
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    document.write(`*`)
  }
  document.write('<br>')
}

//     *
//    **
//   ***
//  ****
// *****
for (let i = 0; i < 5; i++) {
  for (let j = 4; j > i; j--) {
    document.write('&nbsp');
  }
  for (let j = 0; j <= i; j++) {
    document.write('*');
  }
  document.write('<br>');
}

// *****
// ****
// ***
// **
// *
for (let i = 0; i < 5; i++) {
  for (let j = 5; j > i; j--) {
    document.write('*');
  }
  document.write('<br>');
}

// *****
//  ****
//   ***
//    **
//     *
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    // space
    document.write('&nbsp');
  }
  for (let j = 5; j > i; j--) {
    document.write('*');
  }
  document.write('<br>');
}

//     *
//    ***
//   *****
//  *******
// *********
for (let i = 0; i < 5; i++) {
  for (let j = 4; j > i; j--) {
    // space
    document.write('&nbsp');
  }
  for (let j = 0; j <= i; j++) {
    document.write('*');
  }
  for (let j = 1; j <= i; j++) {
    document.write('*');
  }
  document.write('<br>');
}

// *********
//  *******
//   *****
//    ***
//     *
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    document.write('&nbsp');
  }
  for (let j = 5; j > i; j--) {
    // space
    document.write('*');
  }
  for (let j = 4; j > i; j--) {
    document.write('*');
  }
  document.write('<br>');
}

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
for (let i = 0; i < 5; i++) {
  for (let j = 4; j > i; j--) {
    document.write('&nbsp');
  }
  for (let j = 0; j <= i; j++) {
    document.write('*');
  }
  for (let j = 1; j <= i; j++) {
    document.write('*');
  }

  document.write('<br>');
}

for (let i = 0; i < 4; i++) {
  for (let j = 0; j <= i; j++) {
    document.write('&nbsp');
  }
  for (let j = 4; j > i; j--) {
    document.write('*');
  }
  for (let j = 3; j > i; j--) {
    document.write('*');
  }
  document.write('<br>');
}

// for문 이용한 구구단
for (let i = 1; i < 9; i++) {
  document.write(`${i}단 <br>`);
  for (j = 1; j < 9; j++) {
    document.write(`${i + 1}x${j}=${(i * j) + j} <br>`);
  }
}
