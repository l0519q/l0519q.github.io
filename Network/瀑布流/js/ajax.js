function ajax(method, url, callback, data, flag) {
    // ajax对象
    var xml = null;
    if (window.XMLHttpRequest) {
        xml = new XMLHttpRequest();
    }else {
        xml = new ActiveXObject('Microsoft.XMLHttp');   //兼容IE6及以下浏览器
    }
    // 初始化 HTTP 请求参数（请求方式， 地址， 同步异步）

    // 发送请求
    method = method.toUpperCase();
    if (method == 'GET') {
        var date = new Date();
        timer = date.getTime();
        xml.open(method, url + '?' + data + '&timer=' + timer, flag);
        xml.send();
    }else if (method == 'POST') {
        xml.open(method, url, flag);
        xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xml.send(data);
    }   

    // 监控数据
    xml.onreadystatechange = function () {
        if (xml.readyState == 4) {
            // 检查数据 使用
            if (xml.status == 200) {
                callback(xml.responseText);
            }   
        }
    }
}

