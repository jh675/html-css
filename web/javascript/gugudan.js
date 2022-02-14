// gugudan.js
document.write('<table>');
// for(반복문사용...)
var num = 5;
for (let i = 1; i <= 9; i++) {
    document.write('<tr class="row">');
    document.write(`<td>${num}</td><td>X</td><td>${i}</td><td>=</td><td>${num*i}</td>`);
    document.write('</tr>');
}
document.write('</table>');
document.write('<br>');

// 반복문 : 반복문을 사용.
// for (let num = 2; num <= 9; num++) {
//     for (let num2 = 1; num2 <= 9; num2++) {

//     }
// }

var start_nums = [2, 3, 4, 5, 6, 7, 8, 9];
var end_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let start_n of start_nums) {
    document.write('<div>');
    for (let end_n of end_nums) {
        document.write(`<p>${start_n} X ${end_n} = ${start_n * end_n}</p>`);
    }
    document.write('</div>');
}