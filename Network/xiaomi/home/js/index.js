var titleLogin = document.getElementsByClassName("title-login")[0];
var titleRegister = document.getElementsByClassName('title-register')[0];
var titleExit = document.getElementsByClassName('title-exit')[0];

function init() {
    var token = hasToken('Token');
    if (token) {
        titleLogin.innerHTML = '已登录';
        titleLogin.setAttribute('href', 'javascript:;');
        titleRegister.style.display = 'none';
        titleExit.style.display = 'block';
    }
}
init();
function hasToken(str) {
    var cookiesArr = document.cookie.split(';');
    var len = cookiesArr.length;
    for (var i = 0; i < len; i++) {
        var eleArr = cookiesArr[i].split('=');
        if (str == eleArr[0]) {
            return eleArr[1];
        }
    }
}
titleExit.onclick = function () {
    var token = hasToken('Token');
    if (token) {
        var oDate = new Date();
        oDate.setDate(oDate.getDate() - 1);
        document.cookie = 'Token=aaa;expires=' + oDate + ';path=/;domain=chanke.xyz';
        location.href = './index.html';
    }
}