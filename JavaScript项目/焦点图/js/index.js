var leftImgAry = document.getElementById('left').getElementsByTagName('img'),
    rightImgAry = document.getElementById('right').getElementsByTagName('img'),
    pointer = document.getElementById('pointer'),
    box = document.getElementById('left');
var TopAry = [0, 82, 164];

for (var i = 0; i < leftImgAry.length; i++) {
    leftImgAry[i].onmouseover = mouseOver;
    leftImgAry[i].index = i;
}

var nowID = 0,
    Top = 0,
    nowTop = 164,
    moveLoop = null;

function mouseOver() {
    if (time != null) {
        clearInterval(time);
        time = null;
    }
    for (var i = 0; i < rightImgAry.length; i++) {
        if (i == this.index) {
            nowID = i;
            // 右侧图片显示
            rightImgAry[i].className = 'show';
            // pointer移动
            Top = TopAry[i];
            nowTop = pointer.offsetTop;
            if (moveLoop == null) {
                moveLoop = setInterval(moveTo, 10);
            }
        }else {
            rightImgAry[i].className = '';
        }
    }
}

function moveTo() {
    // 从上往下
    if (nowTop < Top) {
        nowTop += 4;
        if (nowTop >= Top) {
            nowTop = Top;
            clearInterval(moveLoop);
            moveLoop = null;
        }
    }
    // 从下往上
    if (nowTop > Top) {
        nowTop -= 4;
        if (nowTop <= Top) {
            nowTop = Top;
            clearInterval(moveLoop);
            moveLoop = null;
        }
    }
    if (nowTop == Top) {
        clearInterval(moveLoop);
        moveLoop = null;
    }
    pointer.style.top = nowTop + 'px';
}

var time = null;
box.onmouseleave = function () {
    if (time != null) {
        return;
    }
    time = setInterval(function () {
		nowID = (nowID + 1) > 2 ? 0 : nowID + 1;
		for (var i = 0; i < rightImgAry.length; i++) {
		    if (i == nowID) {
		        // 右侧图片显示
		        rightImgAry[i].className = 'show';
		        // pointer移动
		        Top = TopAry[i];
		        nowTop = pointer.offsetTop;
		        if (moveLoop == null) {
		            moveLoop = setInterval(moveTo, 10);
		        }
		    }else {
		        rightImgAry[i].className = '';
		    }
		}
	}, 2000);
}

    
