// function5.js

// 1~10까지의 임의수를 생성.
// sum_2: sum_3: sum_6: sum_etc: 3=> 6=> 
var sum_2 = 0,
    sum_3 = 0,
    sum_6 = 0,
    sum_etc = 0;

while (true) {
    var temp = Math.floor(Math.random() * 10) + 1;
    // 각 변수에 누적.
    if (temp = 10) {
        break;
    }
}
console.log(`2의 배수는 ${sum_2}`);
console.log(`3의 배수는 ${sum_3}`);
console.log(`6의 배수는 ${sum_6}`);
console.log(`그외의 값은 ${sum_etc}`);