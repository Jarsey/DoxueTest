var clientHeight = $(document).height(); //整个文档高度
var windowHeight = $(window).height(); //浏览器可视窗口高度
var scrollTop = $(window).scrollTop(); //浏览器可视窗口顶端距离网页顶端的高度（垂直偏移）
//添加滚动事件
const arr = [{
        logoUrl: '../../static/logo.png',
        num: 25,
        linkHref: '',
        cb: () => {}
    }, {
        logoUrl: '../../static/logo.png',
        num: 256,
        linkHref: '',
        cb: () => {}
    }, {
        logoUrl: '../../static/logo.png',
        num: 111,
        linkHref: '',
        cb: () => {}
    }, {
        logoUrl: '../../static/logo.png',
        num: 137,
        linkHref: '',
        cb: () => {}
    }, {
        logoUrl: '../../static/logo.png',
        num: 159,
        linkHref: '',
        cb: () => {}
    }]
    // 初始化滚动条位置
    // $('.school-section').scrollTop(0)
$(window).unbind('scroll').bind('scroll', function() {
    scrollTop = $(window).scrollTop();
    clientHeight = $(document).height();
    if (scrollTop + windowHeight + 40 > clientHeight) {
        // let schoolList = new SchoolList();
        // schoolList.appendItem(arr);
        // axios.get('http://20181022Mock.com/mode1/tableDataOne').then((res) => {
        //     console.log('res', res)
        //     if (res.status == 200) {
        //         // that.setState({
        //         //     dataSource: res.data.dataSource
        //         // })
        //     }
        // })
        $.get('www.test/api/list', function(data, status) {
            console.log('data', data)
        })
    }
})