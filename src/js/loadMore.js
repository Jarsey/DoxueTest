// 浏览器可视窗口顶端距离网页顶端的高度（垂直偏移）
import schoolList from './index.js'
import $ from 'jquery'
const documentElement = document.documentElement
const documentBody = document.body
// 获取滚动条当前的位置
function getScrollTop () {
  var scrollTop = 0
  var elementScrollTop = documentElement.scrollTop
  var bodyScrollTop = documentBody.scrollTop
  if (documentElement && elementScrollTop) {
    scrollTop = elementScrollTop
  } else if (documentBody) {
    scrollTop = bodyScrollTop
  }
  return scrollTop
}
// 获取当前可视范围的高度
function getClientHeight () {
  var elementClientHeight = documentElement.clientHeight
  var bodyClientHeight = documentBody.clientHeight
  var clientHeight = bodyClientHeight && elementClientHeight ? Math.min(bodyClientHeight, elementClientHeight) : Math.max(bodyClientHeight, elementClientHeight)
  return clientHeight
}

// 获取文档完整的高度
function getScrollHeight () {
  return Math.max(documentBody.scrollHeight, documentElement.scrollHeight)
}

// 滚动事件触发
$(window).unbind('scroll').bind('scroll', () => {
  if (getScrollTop() + getClientHeight() >= getScrollHeight() && schoolList.schoolList.total < 50) {
    $.get('http://localhost:5371/api/list', (data, status) => {
      if (status === 'success' && data.status === 0) {
        schoolList.schoolList.appendItem(data.msg.data)
      }
    })
  }
})
