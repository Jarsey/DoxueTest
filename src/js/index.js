import 'core-js/modules/es.array.concat'
import 'core-js/modules/es.array.for-each'
import 'core-js/modules/web.dom-collections.for-each'

import '../../static/reset.css'
import '../css/index.scss'
import '../css/master.scss'
import logo from '$static/logo.png'
import iconPPT from '$static/icon-ppt.png'
import $ from 'jquery'

function _classCallCheck (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _defineProperties (target, props) {
  for (let i = 0; i < props.length; i++) {
    const descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass (Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
} // List类

const SchoolList = /* #__PURE__ */ (function () {
  function SchoolList () {
    _classCallCheck(this, SchoolList)

    this.total = 0
  }

  _createClass(SchoolList, [{
    key: 'appendItem',
    value: function appendItem (arr) {
      const fragment = document.createDocumentFragment()
      arr.forEach((element) => {
        const { logoUrl } = element
        const { num } = element
        const { linkHref } = element
        const item = new SchoolItem(logoUrl, num, linkHref).createSchoolItem() // 使用jq创建dom

        const itemDom = $(item).get(0)
        fragment.appendChild(itemDom)
      })
      $('#school-list').append(fragment)
      this.total += arr.length
    }
  }])

  return SchoolList
}()) // school card类

var SchoolItem = /* #__PURE__ */ (function () {
  function SchoolItem (logoUrl, num, linkHref) {
    _classCallCheck(this, SchoolItem)

    this.logoUrl = logoUrl
    this.num = num
    this.linkHref = linkHref
  } // 构造item节点

  _createClass(SchoolItem, [{
    key: 'createSchoolItem',
    value: function createSchoolItem () {
      return '\n            <div class="school-item">\n                <div class="school-logo">\n                    <img src="'.concat(this.logoUrl, '" alt="\u5317\u4EAC\u4EA4\u901A\u5927\u5B66">\n                </div>\n                <div class="school-data">\n                    <div class="data-column">\n                        <p class="grey-text font-18">').concat(this.num, '</p>\n                        <p class="grey-text m-t-5">\u53C2\u8BBF\u4EBA\u6570</p>\n                    </div>\n                    <div class="line"></div>\n                    <div class="data-column">\n                        <img src=').concat(iconPPT, ' alt="PPT"></img>\n                        <a class="grey-text normal-link m-t-5" href="').concat(this.linkHref, '">\u5BA3\u8BB2PPT</a>\n                    </div>\n                </div>\n                <button class="primary-btn-large" onclick="()=>{}">\n                    \u4E86\u89E3\u8BE6\u60C5>\n                </button>\n            </div>\n        ')
    }
  }])

  return SchoolItem
}()) // 页面初始化mock数据

const mockData = [{
  logoUrl: logo,
  num: 123,
  linkHref: '',
  cb: function cb () {}
}, {
  logoUrl: logo,
  num: 254,
  linkHref: '',
  cb: function cb () {}
}, {
  logoUrl: logo,
  num: 136,
  linkHref: '',
  cb: function cb () {}
}, {
  logoUrl: logo,
  num: 25,
  linkHref: '',
  cb: function cb () {}
}, {
  logoUrl: logo,
  num: 256,
  linkHref: '',
  cb: function cb () {}
}, {
  logoUrl: logo,
  num: 111,
  linkHref: '',
  cb: function cb () {}
}, {
  logoUrl: logo,
  num: 137,
  linkHref: '',
  cb: function cb () {}
}, {
  logoUrl: logo,
  num: 159,
  linkHref: '',
  cb: function cb () {}
}] // 初始化列表

const schoolList = new SchoolList()
schoolList.appendItem(mockData)
export default {
  schoolList
}
