// object5.js
function clog(str) {
    console.log(str);
}

console.log(Math.round(.4));
clog(Math.floor(3.7));
clog(Math.ceil(3.1));
clog(Math.abs(-10));
// clog(Math.cos(20));
clog(Math.max(10, 20, 100, 5))
clog(Math.min(20, 40, -10, -20));
clog(Math.pow(3, 3));

clog(Math.PI);
clog(Math.E);

let numbers = [30, 25, 12, 92, 55, 37];
let result = Math.max.apply(null, numbers);
console.clear();

function getMaxValue(argsAry) {
    // argsAry배열변수의 제일큰값을 가져오는 프로그램.
    if (!Array.isArray(argsAry)) {
        return 'no array';
    }
    let maxVal = 0;
    // for (let i = 0; i < argsAry.length; i++) {
    //     console.log(maxVal, ', ', argsAry[i]);
    //     if (maxVal < argsAry[i]) {
    //         maxVal = argsAry[i];
    //     }
    // }
    argsAry.forEach(function (val, ind, ary) {
        maxVal = maxVal < val ? val : maxVal;
    });
    return maxVal;
}
result = getMaxValue(numbers);
console.log(`최대값은 ${result}`);

let persons = [{
        fName: 'Hong',
        age: 20,
        score: 80
    },
    {
        fName: 'Hwang',
        age: 22,
        score: 85
    },
    {
        fName: 'Choi',
        age: 23,
        score: 83
    }
];

function getMaxObject(args) {
    // score가 최고점수인 person 을 가져오는 프로그램.

}
result = getMaxObject(persons);
console.log(`최고점수자:Hwang, 점수:85`); // 최고점수자:Hwang, 점수:85