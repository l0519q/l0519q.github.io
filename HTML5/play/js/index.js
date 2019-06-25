var oAudio = document.getElementById("audio"),
    oImg = document.getElementById("Img"),
    oMName = document.getElementById("MName"),
    oCurrentTime = document.getElementsByClassName("current-time")[0],
    oAllTime = document.getElementsByClassName("all-time")[0],
    oBtn = document.getElementsByClassName("btn")[0],
    oIsPlay = oBtn.getElementsByClassName("iconfont")[0],
    oProActive = document.getElementsByClassName("pro-active")[0],
    oRadioBox = document.getElementsByClassName("radio-box")[0],
    oProBox = document.getElementsByClassName("pro-box")[0],
    oPrevious = document.getElementsByClassName("previous")[0],
    oNext = document.getElementsByClassName("next")[0],
    oVoBox = document.getElementsByClassName("vo-box")[0],
    oBox = document.getElementsByClassName("box")[0],
    oVoActive = document.getElementsByClassName("vo-active")[0],
    oVoNum = document.getElementsByClassName("vo-num")[0]
    oLaba = document.getElementById("laba");

var timer,
    duration;
    
var index = 0,
    list = ['source/琵琶行.mp3','source/知否知否.mp3','source/风筝误.mp3'],
    listName = ["琵琶行","知否知否","风筝误"],
    listImg = ['source/琵琶行.jpg','source/知否知否.jpg','source/风筝误.jpg']; 

// 插入时间  网络资源用ondurationchange
window.onload = function () {
    oCurrentTime.innerHTML = conversion(0);
    duration = oAudio.duration;
    oAllTime.innerHTML = conversion(duration);
}

// 时间转换成00:00格式
function conversion(time) {
    var ser = parseInt(time%60) < 10 ? "0" + parseInt(time%60) : parseInt(time%60);
    var min = parseInt(time/60) < 10 ? "0" + parseInt(time/60) : parseInt(time/60);
    return min + ":" + ser;
}

// 播放暂停切换
oBtn.onmouseup = function () {
    if (oAudio.paused) {
        musicPlay();
    }else {        
        musicPause();
    }
}
function musicPlay() {
    oAudio.play();
    oIsPlay.className = "iconfont icon-zanting";
    timer = setInterval(movePro,100);
    oImg.style.animation = "move 3s linear infinite";
}
function musicPause() {
    oAudio.pause();
    oIsPlay.className = "iconfont icon-bofang";
    clearInterval(timer);
    oImg.style.animation = "move 3s linear infinite forwards paused";
}
// 播放进度
function movePro() {
    var currentTime = oAudio.currentTime;
    oCurrentTime.innerHTML = conversion(currentTime);
    oProActive.style.width = currentTime/duration * 232 + 8 + "px";
}
// 播放完后自动播放
oAudio.onended = function () {
    index++;
    if (index < 0) {
        index = list.length - 1;
    }else if (index >= list.length) {
        index = 0;
    }
    musicPause();
    oAudio.src = list[index];
    oImg.src = listImg[index];
    oMName.innerText = listName[index];
    // console.log(index);
    oAudio.currentTime = 0;   
    oAudio.oncanplay = function () {
        oCurrentTime.innerHTML = conversion(0);
        duration = oAudio.duration;
        oAllTime.innerHTML = conversion(duration);
    }    
    oProActive.style.width = 8 + "px"; 
    musicPlay();      
}
// 拖拽进度条
oRadioBox.onmousedown = function () {
    clearInterval(timer);
    var c = oAudio.currentTime;
    document.body.onmousemove = function (e) {
        var newWidth = e.clientX - oProBox.getBoundingClientRect().left;
        if (newWidth < 8) {
            newWidth = 8;
        }else if (newWidth > 240) {
            newWidth = 240;
        }
        oProActive.style.width = newWidth + "px";
        c = (newWidth - 8)/232 * duration;
        oCurrentTime.innerHTML = conversion(c);
    }
    document.body.onmouseup = function () {
        document.body.onmousemove = null;
        document.body.onmouseup = null;
        musicPlay();
        oAudio.currentTime = c;
    }
}

// 上一曲
oPrevious.onclick = function () {
    index--;
    if (index < 0) {
        index = list.length - 1;
    }else if (index >= list.length) {
        index = 0;
    }
    musicPause();
    oAudio.src = list[index]; 
    oImg.src = listImg[index];  
    oMName.innerText = listName[index]; 
    // console.log(index);
    oAudio.currentTime = 0;   
    oAudio.oncanplay = function () {
        oCurrentTime.innerHTML = conversion(0);
        duration = oAudio.duration;
        oAllTime.innerHTML = conversion(duration);
    }    
    oProActive.style.width = 8 + "px";
    musicPlay();  
}
// 下一曲
oNext.onclick = function () {
    index++;
    if (index < 0) {
        index = list.length - 1;
    }else if (index >= list.length) {
        index = 0;
    }
    musicPause();
    oAudio.src = list[index]; 
    oImg.src = listImg[index];
    oMName.innerText = listName[index];
    // console.log(index); 
    oAudio.currentTime = 0;   
    oAudio.oncanplay = function () {
        oCurrentTime.innerHTML = conversion(0);
        duration = oAudio.duration;
        oAllTime.innerHTML = conversion(duration);
    }    
    oProActive.style.width = 8 + "px";
    musicPlay();  
}
// 音量控制
oBox.onmousedown = function () {
    document.body.onmousemove = function (e) {
        var newWidth = e.clientX - oVoBox.getBoundingClientRect().left;
        if (newWidth < 8) {
            newWidth = 8;
        }else if (newWidth > 100) {
            newWidth = 100;
        }
        oVoActive.style.width = newWidth + "px";
        oAudio.volume = (newWidth-8)/92 * 1;
        oVoNum.style.display = "block";
        oVoNum.innerHTML = parseInt(oAudio.volume * 100);
        return nowVolume = oAudio.volume, nowWidth =  oVoActive.style.width;
    }
    document.body.onmouseup = function () {
        document.body.onmousemove = null;
        document.body.onmouseup = null;
        oVoNum.style.display = "none";  
    }
}
var flag = true;
var nowVolume = oAudio.volume, 
    nowWidth = oVoActive.style.width;
oLaba.onclick = function () {
    if (flag) {
        oVoActive.style.width = "0px";
        oAudio.volume = 0;
        oLaba.className = "iconfont icon-jingyin"
        flag = !flag;
    } else {
        oVoActive.style.width = nowWidth;
        oAudio.volume = nowVolume;
        oLaba.className = "iconfont icon-laba"
        flag = !flag;
    }
}