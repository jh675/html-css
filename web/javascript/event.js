// event.js
// document.write('<h1 onclick="h1Click(event)"=>Hello</h1>');
// document.write('<p>nice</p>');

function h1Click(e) {
    // 이벤트 핸들러.
    console.log('h1Click');
    console.log(e.target.remove());
}

function turnOnFnc() {
    var img = document.getElementsByTagName('img');
    // HTMLCollection -> 배열처럼 여러개의 요소.
    console.log(img[0].src = 'https://www.w3schools.com/js/pic_bulbon.gif');
}

function turnOffFnc() {
    var img = document.getElementsByTagName('img');
    // HTMLCollection -> 배열처럼 여러개의 요소.
    console.log(img[0].src = 'https://www.w3schools.com/js/pic_bulboff.gif');
}

var butns = document.getElementsByTagName('button');
console.log(butns);
butns[0].onmouseover = turnOnFnc;
butns[1].onmouseover = turnOffFnc;

// 추가된...
var colorBtn = document.getElementsByClassName('color');
console.log(colorBtn.length);

for (let i = 0; i < colorBtn.length; i++) {
    // colorBtn[i].onclick = changeColorFnc;
    colorBtn[i].addEventListener('click', changeColorFnc);
}

// 새로운 요소가 생성이 되면 해당 요소에 이벤트 등록.
document.write(`<button class="color">Cyan</button>`);
colorBtn[6].addEventListener('click', changeColorFnc);

function changeColorFnc(evnt) {
    console.log(evnt.target.innerText);
    var show = document.getElementById('show');
    show.style.backgroundColor = evnt.target.innerText; // Yello, Green, Red
}