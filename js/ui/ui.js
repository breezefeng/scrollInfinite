/**
 * Created by breezefeng on 15/7/27.
 */
define(function (require, exports, module) {
    var scrollInfinite = require('lib/scroll-infinite');
    var $ = require('lib/zepto');

    var isLoading = false;
    var j = 0;
    var str;


    function getRenderStr() {
        str = '';
        for (var i = 0; i < 20; i++) {
            j++;
            str += '<li class="list-item infinite-item">' + j + '</li>';
        }
        return str;
    }


    function loadData() {
        isLoading = true;
        setTimeout(function () {
            isLoading = false;

            scrollInfinite.render(getRenderStr());

        }, 500);
    }

    // 无限滚动列表组件初始化
    scrollInfinite.init({
        scrollerContainer: $('.container'),
        listContainer: $('.list'),
        // 滚动到中线加载下一页数据
        /*onScrollToMiddle: function () {
            if (!isLoading) {
                loadData();
            }
        },*/
        //滚动到底部加载下一页数据
        onScrollToBottom: function () {
            if (!isLoading) {
                loadData();
            }
        }
    });

    loadData();
});