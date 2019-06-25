(function ($) {
    var page = {
        init: function (dom, obj) {
            this.fillHtml(dom, obj);
            this.bindEvent(dom, obj);
        },
        // 生成DOM结构
        fillHtml: function (dom, obj) {
            dom.empty();
            // 容错
            if (obj.current < 1 || obj.pageCount < 1 || obj.current > obj.pageCount) return;
            // 生成上一页
            if (obj.current == 1) {
                dom.append('<a class="disabled" href="javascript:;"><上一页</a>');
            }else {
                dom.append('<a class="prev" href="javascript:;"><上一页</a>');
            }

            if (obj.pageCount <= 7) {
                for (var i = 1; i <= 7; i++) {
                    if (i == obj.current) {
                        dom.append('<span class="active">' + obj.current + '</span>');
                    }else {
                        dom.append('<a class="page" href="javascript:;">' + i + '</a>');
                    }                    
                }
            }else {
                if (obj.current > 4) {
                    dom.append('<a class="page" href="javascript:;">1</a>');
                    dom.append('<span class="omit">...</span>');
                }
                var start = obj.current - 2,
                    end = obj.current + 2;
                if (obj.current <= 4) {
                    start = 1;
                    end = 6;
                }else if (obj.current >= obj.pageCount - 3) {
                    start = obj.pageCount - 5;
                    end = obj.pageCount;
                }
                for (; start <= end; start++) {
                    if (start == obj.current) {
                        dom.append('<span class="active">' + obj.current + '</span>');
                    }else {
                        dom.append('<a class="page" href="javascript:;">' + start + '</a>');
                    }    
                } 
                if (obj.pageCount - obj.current > 3) {
                    dom.append('<span class="omit">...</span>');
                    dom.append('<a class="page" href="javascript:;">' + obj.pageCount +'</a>');
                }
            }
            // 生成下一页
            if (obj.current == obj.pageCount) {
                dom.append('<a class="disabled" href="javascript:;">下一页></a>');
            }else {
                dom.append('<a class="next" href="javascript:;">下一页></a>');
            }
        },
        // 事件绑定
        bindEvent: function (dom, obj) {
            var _this = this;
            dom.on('click', '.page', function () {
                obj.current = parseInt($(this).text());
                _this.fillHtml(dom, obj);
                obj.cb();
            });
            dom.on('click', function (e) {
                var target = e.target;
                if (target.className == 'prev') {
                    obj.current--;
                }else if (target.className == 'next') {
                    obj.current++;
                }else return;
                _this.fillHtml(dom, obj);
                obj.cb();
            });
        }
    }
    $.fn.paging = function (options) {
        var obj = {
            pageCount: 10,
            current: 1,
            cb: function () {
                //
            }
        }
        var args = $.extend(obj, options);
        page.init(this, args);
    }
})($);