//�ֻ��ŵ���֤�����뵭��(�޹رհ�ť)
function Popbox(txt) {
    $(".pop_p").html(txt);
    $(".pop").fadeIn();
    setTimeout(function () {
        $(".pop").fadeOut();
    }, 5900);
}
//ÿһ��΢�ź�ÿ��ֻ���ϴ�һ�Σ��ڶ��ε���ύ��ʱ�򵯿�(default.htmlҳ�浯��)
function Defpop() {
    $(".defpop").css("display", "block");
    $(".once").click(function () {
        $(".once").css("display", "none");
    });
}

//������ȡ�����򵯿������������������ʾ--ͼƬ����, �滻����(�к�ɫ������)
function Hyzlpop(txt) {
    $(".hy_p").html(txt);
    $(".hyzlpop").css("display", "block");
    $(".hy_back").click(function () {
        $(".hyzlpop").css("display", "none");
    });
}


//����û�е���,��������С���--ͼƬ����, �滻����(�к�ɫ������)
function Hyzlpop1(txt) {
    $(".hyzlpop1").css("display", "block");
    $(".hy_back1").click(function () {
        $(".hyzlpop1").css("display", "none");
    });
}
//��������ѻ�����Ȧ
function Rowbox() {
    $(".rowbox").css("display", "block");
    $(".rowbox").click(function () {
        $(".rowbox").css("display", "none");
    });
}
