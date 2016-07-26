//计算模块大小与位置
function GetNewCss(orivalue) {
    return $(window).width() / (640 / orivalue);
}
function GetCss(w, h, ml, mt, mb,fontsize, l, t, b) {
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
function All(objname, w, h, ml, mt, mb, fontsize,l, t, b) {
    $(objname).css(GetCss(w, h, ml, mt, mb, fontsize, l, t, b));
}
//抽取局部属性来定义模块大小位置
function Part(objname, w, h, ml, mt, mb, fontsize) {
    $(objname).css(GetCss(w, h, ml, mt, mb, fontsize, 0, 0, 0));
}



