function Loading(obj, src, lnum) {
        $("#loading").css({ display: "block" });
        var img = new Image();
        img.onload = function () {
            sload += lnum;
            $("#loading div").html(sload + "%");
            $(obj).append(this);
            if (sload >= 100) {
                if (loading_tool == 1) {
                    $("#loading").css({ display: "none" });
                }
                loading_tool = 0;
            }
        };
        img.onerror = function () {
            sload += lnum;
            $("#loading div").html(sload + "%");
            if (sload >= 100) {
                if (loading_tool == 1) {
                    $("#loading").css({ display: "none" });
                }
                loading_tool = 0;
            }
        }
        img.src = src;
    }

    var sload = 0;
