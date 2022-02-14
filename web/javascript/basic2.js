var str = "hello";
var age = 50;
// I"m 29;
str = "I'm " + age + "\n My name is hhh";
str = `I'm ${age} 
My name is hhh`;
console.log(str);
// "", '', `` => 문자열 

var members = ["이효림", "장예빈", "윤희철", "이웅재"];

var tag = `<ul>`; 
for (let member of members) {
    tag += `<li>이름은 ${member} 입니다.</li>`;
}
tag += `</ul>`;
document.write(tag);