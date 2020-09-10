var clientHeight = $(document).height(); //整个文档高度
var windowHeight = $(window).height(); //浏览器可视窗口高度
var scrollTop = $(window).scrollTop(); //浏览器可视窗口顶端距离网页顶端的高度（垂直偏移）
import schoolList from './index.js';
// 初始化滚动条位置
// $('.school-section').scrollTop(0)
$(window).unbind('scroll').bind('scroll', function() {
    scrollTop = $(window).scrollTop();
    clientHeight = $(document).height();
    console.log('schoolList', schoolList.schoolList.total)
    if (scrollTop + windowHeight + 35 > clientHeight && schoolList.schoolList.total < 50) {
        $.get('http://localhost:8080/api/list', function(data, status) {
            if (status === 'success' && data.status === 0) {
                schoolList.schoolList.appendItem(data.msg.data);
            }
        })
    }
})