import $ from 'jquery'
import IconPPT from '$static/icon-ppt.png'
import Loading from './loading.js'
// List类
class SchoolList {
  constructor () {
    this.totalCount = 0
    this.listLength = 0
    this.loading = new Loading()
  }

  // 获取节点数据，并显示于页面
  getListData () {
    this.loading.switchLoadingShow(true)
    // 可传递下拉分页数据
    $.get('http://localhost:5371/api/list', (data, status) => {
      //   this.loading.switchLoadingShow(false)
      if (status === 'success' && data.status === 0) {
        this.totalCount = data.msg.count
        this.appendItem(data.msg.data)
      } else {
        // 加载失败
        $('#school-list').append('<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=242107528,387432333&fm=26&gp=0.jpg" alt="页面加载失败" width="600px"/>')
      }
    })
  }

  // append节点
  appendItem (arr) {
    // 创建fragment
    const fragment = document.createDocumentFragment()
    arr.forEach((element) => {
      const { logoUrl, num, linkHref, cb } = element
      const item = new SchoolItem(logoUrl, num, linkHref, cb).createSchoolItem()
      // 使用jq创建dom
      const itemDom = $(item).get(0)
      fragment.appendChild(itemDom)
    })
    $('#school-list').append(fragment)
    this.listLength += arr.length
  }
}
// school card类
class SchoolItem {
  constructor (logoUrl, num, linkHref) {
    this.logoUrl = logoUrl
    this.num = num
    this.linkHref = linkHref
  }

  // 构造item节点
  createSchoolItem () {
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
                      <img src="${IconPPT}" alt="PPT"></img>
                      <a class="grey-text normal-link m-t-5" href="${this.linkHref}">宣讲PPT</a>
                  </div>
              </div>
              <button class="primary-btn-large" onclick="() => {}">
                  了解详情>
              </button>
          </div>
      `
  }
}
// 实例化列表
const schoolList = new SchoolList()
export default schoolList
