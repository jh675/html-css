// function3.js
let member1 = {
    meb_id: 1001,
    first_name: '준우',
    last_name: '조',
    math_score: 80,
    eng_score: 90
}
let member2 = {
    meb_id: 1002,
    first_name: '홍제',
    last_name: '이',
    math_score: 82,
    eng_score: 88
}
let member3 = {
    meb_id: 1003,
    first_name: '이경',
    last_name: '박',
    math_score: 85,
    eng_score: 89
}

let members = [member1, member2, member3];

function makeTr(member) {
    // meb_id, first_name, last_name, math_score, eng_score
    var trTag = '<tr>';
    trTag += `<td>${member.meb_id}</td>`;
    trTag += `<td>${member.last_name} ${member.first_name}</td>`;
    trTag += `<td>${member.eng_score}</td>`;
    trTag += `<td>${member.math_score}</td>`;
    trTag += `<td><button>삭제</button></td>`;
    trTag += '</tr>';
    return trTag;
}

var str = '<table border="1">';
str += '<thead>';
str += '<tr><th>순번</th><th>이름</th><th>영어</th><th>수학</th><th>기능</th></tr>';
str += '<tbody>';
for (let i = 0; i < members.length; i++) {
    console.log(members[i])
    str += makeTr(members[i]); // <tr>....</tr>
}
str += '</tbody>';
str += '</table>';
document.write(str);
