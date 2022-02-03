// object5.js
function clog(str) {
    console.log(str);
}

console.log(Math.round(.4));
clog(Math.floor(3.8));
clog(Math.ceil(3.5));
clog(Math.abs(-12));
// clog(Math.cos(20));
clog(Math.max(894, 459, 485, 500, 1560, 1354));
clog(Math.min(10, 20, -30, 500, -1560, 1354));
clog(Math.pow(5, 5));

clog(Math.PI);
clog(Math.E);

let numbers = [30, 25, 12, 55, 37, 59];


function getMaxValue(argsAry) {
    // argsAry배열 변수의 제일 큰 값을 가져오는 프로그램
    // let maxinum = argsAry[0];
    // for(let i = 0; i< argsAry.length; i++) {
    //     if(argsAry[i] > maxinum) {
    //         maxinum = argsAry[i];
    //     }
    // }
    argsAry.forEach(function(val, ind, ary) {
        maxinum = maxinum < val ? val : maxinum;
    });
    return maxinum;

}
result = getMaxValue(numbers);
console.log(`최대값은 ${result}`);

let person =[
    {
        fName:'Hong',
        age:20,
        score:80
    },
    {
        fName:'Hwang',
        age:22,
        score:85
    },
    {
        fName:'Choi',
        age:23,
        score:80
    }
]
function getMaxObject(args){
    // args배열 변수의 제일 큰 값을 가져오는 프로그램

}
result = getMaxValue(person);
console.log(result); //최고 점수자 Hwang, 최고점수: 85