// object4.js
let today = new Date('2022-10-05T15:00:00');

console.log(today);

today.setDate(4);
today.setMonth(5); // 0 ~ 11까지만 입력이 가능
today.setHours(16);
today.setMinutes(30);
today.setSeconds(15);

console.log(today.toDateString());
console.log(today.getDate());

console.log(today.toString());

function printNow() {
    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth();
    let date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let ampm = hour >= 12 ? 'PM' : 'AM';

    let now = `${year}년 ${month}월 ${date}일 ${hour}:${minute}:${second} ${ampm}`;

    console.log(now);
}
printNow();

setInterval(function () {
    printNow();
}, 1000);