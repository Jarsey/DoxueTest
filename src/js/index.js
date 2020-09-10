import '../../static/reset.css'
import '../css/index.scss'
import '../css/master.scss'
import logo from '$static/logo.png'
import iconPPT from '$static/icon-ppt.png'
// List类
class SchoolList {
    constructor() {
        this.total = 0
    }
    appendItem(arr) {
        const fragment = document.createDocumentFragment();
        arr.forEach((element) => {
            let { logoUrl, num, linkHref } = element
            const item = new SchoolItem(logoUrl, num, linkHref).createSchoolItem()
                // 使用jq创建dom
            const itemDom = $(item).get(0)
            fragment.appendChild(itemDom)
        });
        $('#school-list').append(fragment);
        this.total += arr.length
    }
}
// school card类
class SchoolItem {
    constructor(logoUrl, num, linkHref) {
            this.logoUrl = logoUrl
            this.num = num
            this.linkHref = linkHref
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
                        <img src=${iconPPT} alt="PPT"></img>
                        <a class="grey-text normal-link m-t-5" href="${this.linkHref}">宣讲PPT</a>
                    </div>
                </div>
                <button class="primary-btn-large" onclick="()=>{}">
                    了解详情>
                </button>
            </div>
        `
    }
}
// 页面初始化mock数据
const mockData = [{
        logoUrl: logo,
        num: 123,
        linkHref: '',
        cb: () => {}
    },
    {
        logoUrl: logo,
        num: 254,
        linkHref: '',
        cb: () => {}
    },
    {
        logoUrl: logo,
        num: 136,
        linkHref: '',
        cb: () => {}
    },
    {
        logoUrl: logo,
        num: 25,
        linkHref: '',
        cb: () => {}
    },
    {
        logoUrl: logo,
        num: 256,
        linkHref: '',
        cb: () => {}
    },
    {
        logoUrl: logo,
        num: 111,
        linkHref: '',
        cb: () => {}
    },
    {
        logoUrl: logo,
        num: 137,
        linkHref: '',
        cb: () => {}
    }, {
        logoUrl: logo,
        num: 159,
        linkHref: '',
        cb: () => {}
    }
];
// 初始化列表
var schoolList = new SchoolList();
schoolList.appendItem(mockData);
export default { schoolList }