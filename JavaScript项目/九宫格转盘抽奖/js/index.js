var divList = document.getElementById('myTable').getElementsByTagName('div');
var start = document.getElementById('start');
var divID = 0,
    divAry = [0, 1, 2, 4, 7, 6, 5, 3],
    prize = ['iphone 6 (16GB)', 'PPTV KING7S 3D影音手机', 'PPBOX 小黑', '家电券100元', '侏罗纪T恤', 'PPTV一年会员', '乐高模型', '速度与激情T恤'],
    runNum;


function playFunc() {
    // 把上次的取消选中
    divList[ divAry[divID] ].className = '';
    divID = divID + 1 >= divAry.length ? 0 : divID + 1;
    // 把这次的加上选中
    divList[ divAry[divID] ].className = 'select';

    runNum++;
    if (runNum == 6) {
        clearInterval(run);
        run = setInterval(playFunc, 20);
    }
    if (runNum + 6 == maxNum) {
        clearInterval(run);
        run = setInterval(playFunc, 200);
    }
    if (runNum >= maxNum) {
        clearInterval(run);
        run = null;
        setTimeout(function () {
            alert('恭喜抽中：' + prize[divID]);
        }, 20);
        return;
    }
}

var run = null;
start.onclick = function () {
    runNum = 0;
    // 跑多少圈
    maxNum = 8 * 3 + parseInt(Math.random() * 8);
    if (run == null) {
        run = setInterval(playFunc, 200);
    }
}