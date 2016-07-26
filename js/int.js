/**
 * Created by Lomo on 15/7/27.
 */
window.onload = function () {
    //获取tags
    var tags = document.getElementById('tags').getElementsByTagName('li');
    var mods = document.getElementsByClassName('mod');

    //用来纪录当前选中的li的index
    var tagsIndex = 0;
    //给tags加上鼠标滑过事件
    for (var i = 0; i < tags.length; i++) {

        !function (i) {
            tags[i].onmouseover = function () {
                tagsIndex = i;
                showTag();
                showMod();
            };
        }(i);

    }
    function showTag() {
        for (var i = 0; i < tags.length; i++) {
            if (tags[i].className == 'selected') {
                tags[i].className = '';
                break;
            }
        }
        tags[tagsIndex].className = 'selected';
    }
    function showMod() {
        for (var i = 0; i < mods.length; i++) {
            if (mods[i].style.display == 'block') {
                mods[i].style.display = 'none';
                break;
            }
        }
        mods[tagsIndex].style.display = 'block';
    }
}
