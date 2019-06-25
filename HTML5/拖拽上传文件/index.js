var content = document.getElementsByClassName('content')[0];
var val = document.getElementsByClassName('val')[0];
var text = document.getElementsByClassName('text')[0];


content.addEventListener('dragover', function (e) {
    e.preventDefault();
});
content.addEventListener('drop', function (e) {
    e.preventDefault();
    file = e.dataTransfer.files[0];
    var loader = new FileLoader(file,events);
});

var events = {
    progressIng: function (per) {
        val.style.width = per * 250 + 'px';
        text.innerHTML = Math.round(per * 100) + '%'; 
    },
    stepLoad: function (loaded) {
        console.log('上传' + loaded + '部分');
    },
    finish: function () {
        console.log('上传完成');
    }
}

