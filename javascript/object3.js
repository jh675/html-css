// object3.js

let arr = new Array();
arr[0] = 1;
arr[1] = 10;
arr[3] = 100; //배열 공간을 건너뛰어서 값을 넣으면 그 사이에 있는 배열의 공간은 empty로 설정된다.

delete arr[0];
arr[0] = 12;
arr[arr.length] = 50;
arr[arr.length] = 60;
arr[arr.length] = 70;

console.log(arr);
console.log(arr.length);

// push(), pop(): 마지막 위치에 추가(push), 삭제(pop)
let newArr = [];
newArr.push(10);
newArr.push(100);
newArr.push(200);

newArr.pop();
newArr.pop();

// unshift(), shift() : 처음 위치에 추가(unshift), 삭제(shift)

newArr.unshift(100); 
newArr.unshift(1000);

newArr.shift(); //첫번째 위치부터 삭제.
newArr.shift();

// splice() : 요소1 → 요소2 변경.
// 대체할 값을 넣으면 변경되며, 대체할 값을 넣지 않으면 삭제.
newArr.splice(0, 1, '10', '20');
newArr.splice(0, 0, 10, 20);

newArr.splice(2, 0, '100') // number자리에 0이 들어가면 추가.

console.log(newArr);
console.log(newArr.length);

let names = ['김진환', '황우석', '이영식', '정영택'];
names.split(2,1, '김영식');
names.split(4,0, '이창호');
names.split(2,2); // 이영식, 정영택 삭제
console.log(names);

// concat() 배열 요소 추가
let numbers = [1, 2, 3, 4];
let newNum = numbers.concat(10, 20);
console.log(newNum);

console.log(newNum.indexOf(10));

// join() : 배열요소 → 문자열
let newStr = newNum.join('-');``
console.log(newStrm, typeof newStr);

// every() : 배열의 각 요소에 대해 function조건
let all = newNum.some(function(val, ind, arr) {
    console.log(val, ind, arr);
    
    return val > 2;
});
console.log(all);

console.clear();
// forEach() : 배열의 각 요소에 대해 function 실행
let sum = 0;
newNum.forEach(Sum);

function Sum(val, ind, arr) {
    console.log(val, ind, arr);
    if(val % 2 == 0) {
        sum += val;
    }
}

console.log(`합계:${sum}`);

// filter() : function을 만족하는 새로운 배열 생성
let over10 = newNum.filter(function(val, ind, arr) {
    console.log(val, ind, arr);
    return val >= 10;
});

console.log(over10);
names = ['user1', 'user2', 'guest1', 'guest2', 'admin'];

let userNames = [];
for(let i = 0; i < names.length; i++) {
    if(names[i].indexOf('user') != -1) {
        userNames.push(names[i]);
    }
}

userNames = [];
for(let name of names) {
    if(name.indexOf('user') != -1) {
        userNames.push(name);
    }
}

userNames = [];
names.forEach(function(val) {
    if(val.indexOf('user') != -1) {
        userNames.push(val);
    }
});

userNames = names.filter(val => val.includes('user'));

console.log(names);

// arrow function: 메소드의 매개값으로 활용

function oper (first = 0, last = 0, oper) {
    return oper(first, last);
}

let result = oper(10, 20, sum);

function sum(a, b) {
    // 두 수를 더하는 function
    return a + b;
}

// sort(): 정렬
let numbers2 = [1, 4, 3, 5, 7, 6, 2];
let cnt = 0;
numbers2.sort(function(num1, num2) {
    cnt++;
    let diff = num1 - num2;
    return diff; //-값이면 오름차순, +값이면 내림차순
});
console.log('cnt', cnt);
numbers2.reverse();
console.log(numbers2);

let fruits = ['cherry', 'apple', 'banana'];
fruits.sort();
console.log(fruits);

let sortNum = [1,3,2,9,4];
for(let j = 0; j < sortNum.length - 1; j++) {
    for (let i = 0; i<sortNum.length; i++) {
        if(sortNum[i] > sortNum[i + 1]) {
            let temp = sortNum[i + 1];
            sortNum[i + 1] = sortNum[i];
            sortNum[i] = temp;
        }
    }
}
console.log(sortNum);

// slice()
let newSortNum = sortNum.slice(1,3);
console.log(newSortNum);

fruits.slice(1,3);

// new someThing = fruits.copyWithin(fruits, 1, 3);
// console.log(someThing);

const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1.dopyWithin(0, 2, 5));

const array2 = [5, 12, 8, 130, 44];
const found = array2.find(element => element > 10);
console.log(found);