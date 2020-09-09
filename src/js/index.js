// List类
class SchoolList {
    constructor(listArr) {
        this.listArr = listArr
    }
    initList() {
        const fragment = document.createDocumentFragment();
        this.listArr.forEach((element) => {
            let { logoUrl, num, linkHref, cb } = element
            const item = new SchoolItem(logoUrl, num, linkHref, cb).createSchoolItem()
                // 使用jq创建dom
            const itemDom = $(item).get(0)
            fragment.appendChild(itemDom)
        });
        $('#school-list').append(fragment);
    }
}
// school card类
class SchoolItem {
    constructor(logoUrl, num, linkHref, cb) {
            this.logoUrl = logoUrl
            this.num = num
            this.linkHref = linkHref
            this.cb = cb
        }
        // 构造item节点
    createSchoolItem() {
        return `
            <div class="school-item">
                <div class="school-logo">
                    <img src="${this.logoUrl}" alt="北京交通大学">
                </div>
                <div class="school-data">
                    <div class="data-column">
                        <p class="grey-text font-18">${this.num}</p>
                        <p class="grey-text m-t-5">参访人数</p>
                    </div>
                    <div class="line"></div>
                    <div class="data-column">
                        <img src="../../static/icon-ppt.png" alt="PPT"></img>
                        <a class="grey-text normal-link m-t-5" href="${this.linkHref}">宣讲PPT</a>
                    </div>
                </div>
                <button class="primary-btn-large" onclick="${this.cb}">
                    了解详情>
                </button>
            </div>
        `
    }
}
// 页面初始化mock数据
const mockData = [{
        logoUrl: '../../static/logo.png',
        num: 123,
        linkHref: '',
        cb: () => {}
    },
    {
        logoUrl: '../../static/logo.png',
        num: 254,
        linkHref: '',
        cb: () => {}
    },
    {
        logoUrl: '../../static/logo.png',
        num: 136,
        linkHref: '',
        cb: () => {}
    },
    {
        logoUrl: '../../static/logo.png',
        num: 25,
        linkHref: '',
        cb: () => {}
    },
    {
        logoUrl: '../../static/logo.png',
        num: 256,
        linkHref: '',
        cb: () => {}
    },
    {
        logoUrl: '../../static/logo.png',
        num: 111,
        linkHref: '',
        cb: () => {}
    },
    {
        logoUrl: '../../static/logo.png',
        num: 137,
        linkHref: '',
        cb: () => {}
    }, {
        logoUrl: '../../static/logo.png',
        num: 159,
        linkHref: '',
        cb: () => {}
    }
];
// 初始化列表
let schoolList = new SchoolList(mockData);
schoolList.initList();