//计算模块大小与位置
function GetNewCss(orivalue) {
    return $(window).width() / (640 / orivalue);
}
function GetCss(w, h, ml, mt, mb, fontsize, l, t, b) {
    var cssobj = Object();
    if (w > 0) {
        cssobj.width = GetNewCss(w);
    }
    if (h > 0) {
        cssobj.height = GetNewCss(h);
    }
    if (ml > 0) {
        cssobj.marginLeft = GetNewCss(ml);
    }
    if (mt > 0) {
        cssobj.marginTop = GetNewCss(mt);
    }
    if (mb > 0) {
        cssobj.marginBottom = GetNewCss(mb);
    }
    if (fontsize > 0) {
        cssobj.fontSize = GetNewCss(fontsize) + "px";
    }
    if (l > 0) {
        cssobj.top = GetNewCss(l);
    }
    if (t > 0) {
        cssobj.top = GetNewCss(t);
    }
    if (b > 0) {
        cssobj.bottom = GetNewCss(b);
    }
    return cssobj;
}
//objname：id或class名称；w：宽度；h：高度；ml：左外边距；mt：上外边距；mb：底外边距；l：浮动左边距；t：浮动上边距, b：浮动底边距, fontsize：字体大小。
function All(objname, w, h, ml, mt, mb, fontsize, l, t, b) {
    $(objname).css(GetCss(w, h, ml, mt, mb, fontsize, l, t, b));
}
//抽取局部属性来定义模块大小位置
function Part(objname, w, h, ml, mt, mb, fontsize) {
    $(objname).css(GetCss(w, h, ml, mt, mb, fontsize, 0, 0, 0));
}
$(function () {
    var w = $(window).width();
    var h = $(window).height();
    $("body").css("minHeight", h + "px");
    Part(".container", 640, 262);
    Part(".container img", 640, 262);
    Part(".container .container_img ul", 2600, 262, 0, 2, 0, 30);
    Part(".container_num", 300, 15);

    function showImg(index) {
        var imgWidth = $(".container_img").width();
        $(".container_img ul li").stop(true, false).animate({
            left: -imgWidth * index
        }, 400);
    }
    var i = 0, timer = null;
    timer = setInterval(function change() {
        i++;
        if (i > 3) {
            i = 0
        }
        showImg(i);
        $(".container_num li").eq(i).addClass("current").siblings("li").removeClass("current");
    }, 2500);
    $(".container_img li img").mouseover(function () {
        clearInterval(timer);
    })
    $(".container_num li").mouseover(function () {
        clearInterval(timer);
        var index = $(".container_num li").index(this);
        $(this).addClass("current").siblings("li").removeClass("current");
        showImg(index);
        i = index;
    })
    $(".container_num li,.container_img li img").mouseout(function () {
        timer = setInterval(function change() {
            i++;
            if (i > 3) {
                i = 0;
            }
            showImg(i);
            $(".container_num li").eq(i).addClass("current").siblings("li").removeClass("current");
        }, 2500);
    });

})