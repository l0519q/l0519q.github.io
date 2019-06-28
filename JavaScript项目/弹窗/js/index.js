var myAD = document.getElementById('myAd'),
myClose = document.getElementById('myClose');
var adHeight = 0,
num = 2;

// 弹出
function adShowFunc() {
if (adHeight < 225) {
    adHeight += num;
    myAD.style.height = adHeight + 'px';
}else {
    myAD.style.height = '225px';
    clearInterval(show);
}
}

// 关闭
myClose.onclick = function () {
clo = setInterval(close, 10);
}
function close() {
if (adHeight > 0) {
    adHeight -= num;
    myAD.style.height = adHeight + 'px';
}else {
    myAD.style.height = 0;
    clearInterval(clo);
}
}

window.onload = function () {
show = setInterval(adShowFunc, 10);
}