// function1.js

function addNumber(first, last) { // function정의문.
    var sum = first + last;
    // console.log(`두수의 합: ${sum}`);
    return sum;
}

var sum1 = addNumber(10, 20); // function 실행문.
var sum2 = addNumber(100, 200);

var result = addNumber(sum1, sum2);
console.log(`최종합계 : ${result}`);

result = addNumber('Hello', ' World');
console.log(result);

function getMonthDay(month) {
    // 1일의 요일정보를 반환해주는 기능.
    // 일:0, 월:1, 화:2, 수:3, 목:4, 금:5, 토:6
    var startVal = 6; // 2+28 => 7나누면 나머지  => 2
    var point = []; //[6,2,2 ]
    var prevVal = startVal;
    for (let i = 0; i < 12; i++) {
        if (i > 0) {
            prevVal = (prevVal + getLastDate(i)) % 7;
        }
        point[i] = prevVal;
    }
    console.log(point);
    return point[month - 1]; // 1월달->배열의 첫번째위치
}

function getLastDate(month) {
    var lastDate = 31;

    switch (month) {
        case 2:
            lastDate = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            lastDate = 30;
            break;
        default:
            lastDate = 31;
    }
    return lastDate;
}