// object1.js
// 생성자함수. object만드는 방식.
function Member(first_name, last_name, age, score) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
    this.score = score;
    this.fullName = function () {
        return this.last_name + ' ' + this.first_name;
    }
    this.isAdult = function () {
        return this.age >= 20 ? true : false;
    }
}

var member1 = new Member('길동', '홍', 15, 80);
var member2 = new Member('익수', '황', 25, 90);
var member3 = new Member('찬호', '박', 30, 88);

var members = [member1, member2, member3, new Member('찬호', '김', 33, 78)];

var table = `<table border="1">`;
table += `<thead>`;
table += `<tr>`;
table += `<th>이름</th>`;
table += `<th>나이</th>`;
table += `<th>점수</th>`;
table += `<th>구분</th>`;
table += `</tr>`;
table += `</thead>`;
table += `<tbody>`;
// tbody 부분을 완료하도록 코드를 작성.
// for (let i = 0; i < members.length; i++) {
var num = 0;
for (let member of members) {
    table += `<tr>`;
    table += `<td>${member.fullName()}</td>`;
    table += `<td>${member.age}</td>`;
    table += `<td>${member.score}</td>`;
    if (member.isAdult())
        table += `<td>성인</td>`;
    else
        table += `<td>청소년</td>`;
    table += `</tr>`;
}
table += `</tbody>`;
table += `</table>`;
console.log(table);
document.write(table);