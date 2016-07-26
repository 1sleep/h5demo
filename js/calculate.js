//����ģ���С��λ��
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
//objname��id��class���ƣ�w����ȣ�h���߶ȣ�ml������߾ࣻmt������߾ࣻmb������߾ࣻl��������߾ࣻt�������ϱ߾�, b�������ױ߾�, fontsize�������С��
function All(objname, w, h, ml, mt, mb, fontsize,l, t, b) {
    $(objname).css(GetCss(w, h, ml, mt, mb, fontsize, l, t, b));
}
//��ȡ�ֲ�����������ģ���Сλ��
function Part(objname, w, h, ml, mt, mb, fontsize) {
    $(objname).css(GetCss(w, h, ml, mt, mb, fontsize, 0, 0, 0));
}



