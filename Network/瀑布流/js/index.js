var oLi = document.getElementsByTagName('li');
var flag = false; //是否在请求数据中
var num = 1;
function send() { 
    if (!flag) {  
        ajax('GET', 'getPics.txt', dealData, 'cpage=' + num, true);
        flag = true;
        num++;
    }
}
send();

function dealData(data) {
    var data = JSON.parse(data);
    if (data.length > 0) {
        data.forEach(function (ele, index) {
            var oItem = document.createElement('div');
            oItem.className = 'item';
            var oImg = new Image();
            oImg.src = ele.image;
            oImg.height = 230 * ele.height/ele.width;
            oItem.appendChild(oImg);
            oLi[findShortest(oLi)].appendChild(oItem);
        });
        flag = false;
    }else {
        alert('已无数据');
    }
}

function findShortest(list) {
    var len = list.length;
    var min = list[0].offsetHeight;
    var index = 0;
    for (var i = 1; i < len; i++) {
        var h = list[i].offsetHeight;
        if (h < min) {
            min = h;
            index = i;
        }
    }
    return index;
}

window.onscroll = function () {
    var index = findShortest(oLi);
    var h = oLi[index].offsetHeight; //最短列高度
    var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if (scrollHeight + clientHeight > h) {
        send();
    }
}