<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="aplus-terminal" content="1" />
    <title></title>
    <script src="js/jquery-1.9.1.js"></script>
    <script src="js/calculate.js"></script>
    <script src="js/popup1.js"></script>
    <link href="css/popup1.css" rel="stylesheet" />
    <script type="text/javascript">
        $(function () {
            var w = $(window).width();
            var h = $(window).height();
            $("body").css("minHeight", h + "px");
			Part(".alert", 567, 535,27,200);
            Part(".word", 502, 225,37,260);
			var error=1;
			if(error=="404"){
			$(".ts").html("访问页面不存在！"); 
			}
			if(error=="fail"){
			$(".ts").html("系统正在维护中..."); 
			}
        });
    </script>
<style type="text/css">  
    *{margin:0px; padding:0px;font-family:微软雅黑;}
    body{background: #b9bbbd no-repeat;background-size:100% 100%;}
    img{width:100%;vertical-align:middle;}
	.alert{ background:url(images/alert2.png) no-repeat ; background-size:100% 100%; width:90%; display:block; margin:auto; position:absolute;}
	.word{ width:100%; position:relative; overflow:hidden;}
	span{ font-family:"微软雅黑" ; font-size:24px; color:black; display:block; margin:auto; margin-top:5%; text-align:center;}
	.title{ font-size:28px; font-weight:bolder;}
	 
</style>
</head>
<body>  
    <div class="alert" >
		<div class="word">
			<span class="title"><big>温馨提示</big></span>
			<span class="ts">活动尚未开始...</span>
		</div>
	</div>
</body>
</html>
