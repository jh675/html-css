// basic.js 파일입니다.
// 자바스크립트 코드 작성.
// 단축키 등록 -> beautify selection + 단축키 등록 후 엔터
var age = 10; // number
age = 12.3;
var fullName = '홍길동'; // string "", ''
var marriage = false; // boolean

var hobby; // undefined 
hobby = null; // 아무 값이 없는 상태. object
hobby = 'reading';
hobby = 200; // 변수: 10 -> 20 -> hello.
var hobby = false;
hobby = '';

// let hobby = 100;
// fullName = prompt('이름을 입력하세요: ');
// age = prompt('나이를 입력하세요: ');

console.log(typeof hobby);

console.log('이름은 ' + fullName + ', 나이는 ' + age);

if (hobby) { // 값이 있으면 true 반환. 값이 없으면 : 0, '', null => false반환.
    console.log('취미는 ' + hobby);
}

var sum = 100 - 90;
if (sum) {
    console.log('sum: ' + sum);
}
// sum => 10
for (let i = 0; i < 10; i++) {
    sum = sum + i;
    console.log('sum: ' + sum + ', i: ' + i);
}
console.log('sum: ' + sum);

fullName = ['홍길동', '김민수', '박이현', '최성식']; // 자바스크립트 배열
var translateName = '';
for (let i = 0; i < fullName.length; i++) {
    translateName += ' ' + fullName[i];
}

for (let name of fullName) {
    translateName += ' ' + name;
}
console.log(translateName);

// object 타입.

var person = {
    first_name: 'kildong',
    last_name: 'Hong',
    age: 15,
    phone: '010-1111-2222'
}
var field = 'phone';

person.first_name = '길동';
person['last_name'] = '홍';
person[field] = '010-1234-5678';

console.log('이름: ' + person.first_name);
console.log('나이는 ' + person['age']);
console.log('연락처: ' + person[field]);

document.write('<h2>홍길동의 정보</h2>');
document.write('<ul>');
document.write('<li>이름: ' + person.first_name + '</li>');
document.write('<li>나이는: ' + person['age'] + '</li>');
document.write('<li>연락처: ' + person[field] + '</li>');
document.write('</ul>');
// alert(person.first_name);
document.write('<button onclick="alert(person.first_name)">클릭</button>');