//手机号等验证弹框淡入淡出(无关闭按钮)
function Popbox(txt) {
    $(".pop_p").html(txt);
    $(".pop").fadeIn();
    setTimeout(function () {
        $(".pop").fadeOut();
    }, 5900);
}
//每一个微信号每天只能上传一次，第二次点击提交的时候弹框(default.html页面弹框)
function Defpop() {
    $(".defpop").css("display", "block");
    $(".once").click(function () {
        $(".once").css("display", "none");
    });
}

//满足领取条件则弹框与助力红包被抢完提示--图片弹框, 替换文字(有黑色背景层)
function Hyzlpop(txt) {
    $(".hy_p").html(txt);
    $(".hyzlpop").css("display", "block");
    $(".hy_back").click(function () {
        $(".hyzlpop").css("display", "none");
    });
}


//桃心没有点亮,继续邀请小伙伴--图片弹框, 替换文字(有黑色背景层)
function Hyzlpop1(txt) {
    $(".hyzlpop1").css("display", "block");
    $(".hy_back1").click(function () {
        $(".hyzlpop1").css("display", "none");
    });
}
//分享给朋友或到朋友圈
function Rowbox() {
    $(".rowbox").css("display", "block");
    $(".rowbox").click(function () {
        $(".rowbox").css("display", "none");
    });
}
